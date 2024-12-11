const canvas = document.getElementById('myCanvas');
const gl = canvas.getContext('webgl2');

const vertexShaderSource = `#version 300 es

in vec2 a_position;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `#version 300 es

precision highp float;

uniform vec2 iResolution; // Declare as vec2 (canvas width and height)
uniform vec2 iMouse;
uniform float iTime;

out vec4 fragColor;

// Shadertoy code here

#define PI 3.14159265359
#define RES iResolution
#define PT iMouse
#define smin smoothmin
#define smax smoothmax

float sdSeg(in vec3 p, in vec3 a, in vec3 b) {
  vec3 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
  return length(pa - ba * h);
}

float sdSphere(in vec3 p, in vec3 center, float radius) {
  return length(p - center) - radius;
}

float whiteNoise2x1(vec2 p) {
  float random = dot(p, vec2(12.235, 78.37283));
  random = sin(random);
  random *= 4358.4346;
  random = fract(random);
  return random;
}

float valueNoise(vec2 uv) {
  uv *= 4.0;
  vec2 gridUV = fract(uv);
  vec2 gridId = floor(uv);

  gridUV = smoothstep(0.0, 1.0, gridUV);

  float bL = whiteNoise2x1(gridId);
  float bR = whiteNoise2x1(gridId + vec2(1.0, 0.0));
  float b = mix(bL, bR, gridUV.x);

  float tL = whiteNoise2x1(gridId + vec2(0.0, 1.0));
  float tR = whiteNoise2x1(gridId + vec2(1.0));
  float t = mix(tL, tR, gridUV.x);
  float noise = mix(b, t, gridUV.y);

  return noise;
}

float sdPlane(vec3 p, vec3 n, float h) {
  float noiseValue = valueNoise(p.xz*10.);
  float heightAdjustment = 0.05 * noiseValue;
  return dot(p, n) + h + heightAdjustment;
}

float smoothmin(float d1, float d2, float k) {
  float h = max(k - abs(d1 - d2), 0.) / k;
  return min(d1, d2) - h * h * k * (1. / 4.);
}

float smoothmax(float d1, float d2, float k) {
    float h = max(k - abs(d1 - d2), 0.) / k;
    return max(d1, d2) + h * h * k * (1. / 4.);
}

int partID = 1;

float map(vec3 p) {
  
  vec3 g = p;
  float mx = .33, mz = 1.05;
  p.x = mod(p.x - mx,2.*mx) - mx;
  p.z = mod((p.z + iTime/4.) - mz,2.*mz) - mz;

  float m = .05*p.y*(-1. + cos(iTime*5.));

  p.x/=1.5;
  vec3 n = vec3(0,.25,0.);
  float off = n.z;
  n.z+=m;
  float nose = sdSphere(p,n,.125);

  p.x*=1.5;

  float tR = .125;
  vec3 ta = vec3(0,.5,.2+m),
       tb = ta;
       tb.y = - ta.y;
       tb.z = off + .2;
  float torso = sdSeg(p, ta, tb) - tR;

  vec3 tc = vec3(0,-.5,.35),
       td = tb;
  td.z = 0.95 - m*4.;

  float tail = sdSeg(p, tc, td) - tR;

  vec3 h = abs(p), z = abs(p);
  h.y = (mod(h.y - .05,.1));
  float cutY = h.y;
  z.z = (mod(z.z - .05+.005*cos(-iTime*5.),.1+.01*cos(-iTime*5.)));
  float cutZ = z.z;

  float body = smin(smin(
                smax(torso,-cutY,.03),
                smax(tail,-cutZ,.03),.1),
                nose,.025);

  vec3 eA = vec3(.075,.4,.1+m),
       eB = eA;
  eB.x = -eA.x;

  float eye1 = sdSphere(p,eA,.1),
        eye2 = sdSphere(p,eB,.09),
        eyes = min(eye1,eye2);

  vec3 pA = vec3(.075,.4,.045+m),
       pB = pA;
  pB.x = -pA.x;

  float p1 = sdSphere(p,pA,.048),
        p2 = sdSphere(p,pB,.041),
        pupils = min(p1,p2);

  
  p.z-=iTime*.5;
  float ground = sdPlane(g, vec3(0.,1.,0.), .6);

  float result = min(min(body, min(eyes,pupils)),ground);

  if (result == body) {
    partID = 1;
  } else if (result == eyes) {
    partID = 2;
  } else if (result == pupils) {
    partID = 3;
  }
  else {
    partID = 4;
  }

  return result;
}

vec3 norm(vec3 p) {
  float h = 1e-3;
  vec2 k = vec2(-1, 1);
  return normalize(
    k.xyy * map(p + k.xyy * h) +
    k.yxy * map(p + k.yxy * h) +
    k.yyx * map(p + k.yyx * h) +
    k.xxx * map(p + k.xxx * h)
  );
}

float d0 = 25.;

float raymarch(inout vec3 p, vec3 rd) {
  float dd = 0.0;

  for (float i = 0.0; i < 100.0; i++) {
    float d = map(p);
  if (d < 1e-3 || dd > d0) break;
    p += rd * d;
    dd += d;
  }
  return dd;
}

vec3 render(vec3 p, vec3 rd) {
  float d = raymarch(p, rd);
  vec3 col = vec3(0);

  if (d < d0) {
    vec3 n = norm(p),
         lp = vec3(-1, 2, -5),
         l = normalize(lp - p);
    float diffuse = clamp(dot(l, n), 0., 1.),
          reflective = clamp(dot(reflect(rd, n), l), .0, 1.0);
          col += diffuse;
          
    if (partID <= 3) {
      col += pow(reflective, 32.);
    }

    if (partID == 1) {
      col = mix(col, vec3(1.,0.,0.), .33);
    } else if (partID == 2) {
      col = mix(col, vec3(1.), .5);
    } else if (partID == 3) {
      col = mix(col, vec3(-.5), .5);
    } else if (partID == 4) {
      col = mix(col, vec3(-1.25,-2.,-2.25), .25);
    }
  } else {
    col += vec3(.25,.6*(abs(rd.z)),.6);
  }

  float fogFactor = clamp(d / d0, 0.0, 1.0);
  vec3 fogColor = vec3(0.25, 0.6 * abs(rd.z), 0.6);
  col = mix(col, fogColor, fogFactor);


  return col;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = (fragCoord.xy - .5 * RES.xy) / RES.y;

  float angleX = PI + cos(iTime/6.),
        angleY = (PT.y / RES.y * 2. - 1. - 1.)*PI*-.25,
        camR = 5.;
  vec3 target = vec3(0.0);

  vec3 ro = vec3(
    sin(angleX)*cos(angleY),
    sin(angleY),
    cos(angleX)*cos(angleY)
    )*camR;

  vec3 fwd = normalize(target - ro),
      right = normalize(cross(vec3(0., 1., 0.), fwd)),
      up = cross(fwd, right),
      rd = normalize(fwd + uv.x * right + uv.y * up);

  float t = 0.0;
  vec3 p = ro, col = render(ro, rd);
  fragColor = vec4(col, 1);
}

// Shadertoy code ends here

void main() {
    mainImage(fragColor, gl_FragCoord.xy);
}

`;

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);  


const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

const  
 program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
gl.useProgram(program);  


const positions = [
    -1.0, -1.0,
    1.0, -1.0,
    -1.0, 1.0,
    1.0, 1.0,
];

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new  
 Float32Array(positions), gl.STATIC_DRAW);

const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
gl.enableVertexAttribArray(positionAttributeLocation);  

gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);  


const iResolutionLocation = gl.getUniformLocation(program, 'iResolution');
const iMouseLocation = gl.getUniformLocation(program, 'iMouse');
const iTimeLocation = gl.getUniformLocation(program, 'iTime');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);  

resizeCanvas(); // Initial resize

canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y  
 = canvas.height - (event.clientY - rect.top);
    gl.uniform2f(iMouseLocation, x, y);
});

function render() {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(iTimeLocation, performance.now() * 0.001);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(render);
}

render();