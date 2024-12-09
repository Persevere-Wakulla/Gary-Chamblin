import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <NavLink
        to="https://developer.mozilla.org/en-US/docs/Web/HTML"
        target="_blank"
      >
        <img
          src="\assets\html5-video-responsive-web-design-css3-festivals-a7b5d7cbde33715be305163b837a597c.png"
          className="langImg langLogo"
          id="html"
          alt="HTML"
        />
      </NavLink>
      <NavLink
        to="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
      >
        <img
          src="\assets\css3-cascading-style-sheets-logo-html-markup-language-others-c7a8232493819980fb868fee15bae351.png"
          className="langImg langLogo"
          id="css"
          alt="CSS"
        />
      </NavLink>
      <NavLink
        to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
      >
        <img
          src="\assets\javascript-logo-html-comment-python-15-8384ab27dc8e8acfe1f5b546dcab5dec.png"
          className="langImg langLogo"
          id="Js"
          alt="JS"
        />
      </NavLink>
      <NavLink to="https://getbootstrap.com/" target="_blank">
        <img
          src="\assets\bootstrap-scalable-vector-graphics-clip-art-logo-github-884e72da41cca1c841bcbb2311cf5fea.png"
          className="langImg langLogo"
          id="bootstrap"
          alt="Bootstrap"
        />
      </NavLink>
      <div className="reactDiv">
        <NavLink to="https://react.dev/" target="_blank">
          <img
            src="\assets\react-logo-javascript-front-and-back-ends-user-interface-others-26ab40cda979c6537a69e241c6634266.png"
            className="langImg"
            id="react"
            alt="React"
          />
        </NavLink>
      </div>

      <div>
        <NavLink to="https://nodejs.org/en" target="_blank">
          <img
            src="\assets\node-js-angularjs-react-javascript-npm-node-js-c89058e536c10b41899cf2e96dfc1d82.png"
            className="langImg langLogo"
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
}
