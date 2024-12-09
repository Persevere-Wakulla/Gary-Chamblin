import { useState, useEffect } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

export default function Home() {
  const quoteGen = useLoaderData();
  const [current, setCurrent] = useState(0);

  // ? Time of day Function
  // ? Use Effect for time of day Greeting.
  let today = new Date();
  let hourNow = today.getHours();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    console.log(hourNow);
    const greet = () => {
      if (hourNow > 18) {
        setGreeting("Good Evening!");
      } else if (hourNow >= 12) {
        setGreeting("Good Afternoon!");
      } else if (hourNow > 0) {
        setGreeting("Good Morning!");
      } else {
        setGreeting("welcome!");
      }
    };
    greet();
  }, []);

  // ? Use Effect for quote generator.
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (current === quoteGen.quotes.length - 1) {
        setCurrent(0);
      } else {
        setCurrent((c) => c + 1);
      }
    }, 12000);
    return () => {
      clearInterval(interval);
    };
  }, [current]);

  return (
    <section className="greetingSection">
      <div className="greetingCardDiv">
        <div className="greetingDiv">
          <h1>{greeting}</h1>

          <h1>
            I'm <span className="nameSpan">Gary Chamblin</span>
          </h1>
          <h3>Welcome to my Portfolio</h3>
          <p>
            Based in the United States, I'm a Junior Front-End-Developer
            passionate about building accessible web apps that users love.
          </p>

          <NavLink to="contact" className="contactLink">
            Contact Me
          </NavLink>
        </div>
      </div>
      <div id="ringDiv" className="rightTop">
        <img
          src="/assets/pattern-rings.svg"
          className="img-fluid ringsImg"
          id="ringSpin"
          alt="rings"
        />
        <img
          src="/assets/pattern-rings.svg"
          className="img-fluid ringsImg"
          id="ringSpin2"
          alt="rings"
        />
      </div>

      <div className="rightBottom">
        <article className="quoteArticle">
          <blockquote className="w-75 m-auto">
            "{quoteGen.quotes[current].quote}"
          </blockquote>
          <h4>-{quoteGen.quotes[current].author}</h4>
        </article>
      </div>
    </section>
  );
}

export const quotes = async () => {
  const res = await fetch("/quotes.json");
  return res.json();
};
// export const quotes = async () => {
//   const res = await fetch("https://dummyjson.com/quotes");
//   return res.json();
// };
