import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//? Layouts
import RootLayout from "./Portfolio/layout/RootLayout";

// ?Pages
import Home, { quotes } from "./Portfolio/pages/Home";
import About from "./Portfolio/pages/About";
import Projects from "./Portfolio/pages/Projects";
import Contact from "./Portfolio/pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={quotes} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
