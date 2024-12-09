import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <>
      <header>
        <NavLink to="contact" className="nameLink">
          <p className="title text-start" id="spinLogo">
            Gary<strong>Chamblin</strong>
          </p>
        </NavLink>

        <nav className="navbar fixed-top ms-auto navbar-expand-sm bg-transparent">
          <div className="navContainer container-fluid">
            <button
              className="ToggleBtn navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="Menu collapse navbar-collapse"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav d-flex justify-content-center gap-3 m-auto">
                <NavLink className="navLinks m-auto" to="/">
                  Home
                </NavLink>
                <NavLink className="navLinks m-auto" to="about">
                  About
                </NavLink>
                <NavLink className="navLinks m-auto" to="projects">
                  Projects
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
      <Footer />
    </>
  );
}

// const [name, setName] = useState([]);

// useEffect(() => {
//   // const text = ['G', 'a', 'r', 'y'];
//   // let interval
//   // if (name.length < text.length){
//   //   interval = setInterval(() => {
//   //     const ltr = name.length
//   //     console.log(ltr);
//   //     setName([...name, text[ltr]]);
//   //     console.log(name);
//   //   }, 1000);
//   //   return() => {
//   //     clearInterval(interval)
//   //   }
//   // }
// }, []);
