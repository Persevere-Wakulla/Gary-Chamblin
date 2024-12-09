import { useRouteError } from "react-router"
import { Link } from "react-router-dom"

export default function RecipesError() {
    const error = useRouteError()

    return (
        <div className="recipes-error">
            <h2 style={{ color: "red" }}>Error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to the homepage</Link>
        </div>
    )
}