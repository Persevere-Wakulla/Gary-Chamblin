import { Link } from "react-router-dom";

export default function NotFound() {
    return (
      <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, corporis.</p>

        <p>Go to the <Link to="/">HomePage</Link>.</p>
      </div>
    )
}