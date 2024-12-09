import { NavLink, Link } from "react-router-dom";

const MyRecipeCard = ({ recipe }) => {

    // console.dir(recipe)

    function toggleInfo() {
        infoDiv.classList.toggle('trans');
    }
    return (
        <>
 <div className='relative infoContainer'>
                <div className="cardLinks">
                        <div className="cardDiv">
                    <Link to={`/recipes/${recipe._id}`} >
                            <h3 className="recipeName">{recipe.name}</h3>
                            <img src={'/' + recipe.image} alt="img" className="card-img-top recipeCardImg image" />
                            <h4 className="card-text">{recipe.mealType.join(', ')}</h4>
                           
                    <div className="overlay">
                        <div className="text">
                        <p>Servings: {recipe.servings}</p>
                        <p>Calories: {recipe.caloriesPerServing}</p>
                        <p>Difficulty: {recipe.difficulty}</p>
                        <p>Tags: {recipe.tags.join(', ')}</p>
                        <p className="click">Click For Recipe</p>
                        </div>
                    </div>
                    </Link>
                        </div>
                        </div>
                        </div>





            {/* <div className='relative'>
                <div className="cardLinks">
                        <div className="cardDiv">
                    <Link to={`/recipes/${recipe._id}`} >
                            <h3 className="recipeName">{recipe.name}</h3>
                            <img src={'/' + recipe.image} alt="img" className="card-img-top recipeCardImg" />
                            <h4 className="card-text">{recipe.mealType.join(', ')}</h4>
                    </Link>
                        </div>
                    <button className="infoBtn btnStyle" onClick={(e) => {
                        e.target.nextSibling.classList.toggle('trans')
                    }}>More Info</button>
                 
                    <div id="infoDiv" className="infoDiv flex text-start">
                        <button className="infoBtn btnStyle float-end" onClick={(e) => {
                            e.target.parentElement.classList.toggle('trans')
                        }}>❌</button>
                        <p>Servings: {recipe.servings}</p>
                        <p>Calories: {recipe.caloriesPerServing}</p>
                        <p>Difficulty: {recipe.difficulty}</p>
                        <p>Tags: {recipe.tags.join(', ')}</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default MyRecipeCard