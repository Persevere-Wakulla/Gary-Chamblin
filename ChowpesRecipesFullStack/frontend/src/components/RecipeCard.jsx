import { Link } from "react-router-dom";
export default function RecipeCard({ recipe }) {
  // console.dir(recipe)

  function toggleInfo() {
    infoDiv.classList.toggle("trans");
  }
  return (
      <div className="relative infoContainer">
        <div className="cardLinks">
          <div className="cardDiv">
            <Link to={`/recipes/${recipe._id}`}>
              <h3 className="recipeName">{recipe.name}</h3>
              {/* <div className="recipeCardImg"> */}
                <img
                  src={recipe.image}
                  alt="img"
                  className="card-img-top recipeCardImg"
                />
              {/* </div> */}
              <h4 className="card-text">{recipe.mealType.join(", ")}</h4>
          <div className="overlay">
            <div className="text">
              <p>Servings: {recipe.servings}</p>
              <p>Calories: {recipe.caloriesPerServing}</p>
              <p>Difficulty: {recipe.difficulty}</p>
              <p>Tags: {recipe.tags.join(", ")}</p>
              <p className="click">🧾</p>
            </div>
          </div>
            </Link>
          </div>
        </div>
      </div>
  );
}
// <button className="infoBtn btnStyle" onClick={(e) => {
//     e.target.nextSibling.classList.toggle('trans')
// }}>More Info</button>

// <div id="infoDiv" className="infoDiv flex text-start">
//     <button className="infoBtn btnStyle float-end" onClick={(e) => {
//         e.target.parentElement.classList.toggle('trans')
//     }}>❌</button>
// </div>
