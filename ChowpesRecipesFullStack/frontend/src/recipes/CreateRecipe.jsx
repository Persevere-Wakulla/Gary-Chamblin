import { useContext, useState } from "react";
import { useNavigate, useOutletContext, NavLink } from "react-router-dom";
import { UserContext } from "../layout/RootLayout";

const CreateRecipe = () => {
  const { user, setUser } = useContext(UserContext);
  const { recipes, setRecipes } = useOutletContext();

  // console.dir(user._id)
  const navigate = useNavigate();
  const [ingList, setIngList] = useState([]);
  const [direction, setDirection] = useState([]);
  const [typeMeal, setTypeMeal] = useState([]);
  const [tagType, setTagType] = useState([]);
  const [recipesCreated, setRecipesCreated] = useState([]);

  const handleRecipeCreate = (e) => {
    e.preventDefault();

    console.dir(e.target.parentElement);
    let formData = new FormData(e.target.parentElement);
    let dat = Object.fromEntries(formData);
    dat.userId = user._id;
    dat.ingredients = ingList;
    dat.instructions = direction;
    dat.mealType = typeMeal;
    dat.tags = tagType;
    // console.dir(dat);
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      body: JSON.stringify(dat),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    }).then(() => {
      e.target.parentElement.reset();
    });
  };

  const newIng = () => {
    const ingInput = document.getElementById("ingredients");
    setIngList([...ingList, ingInput.value]);
    ingInput.value = "";
  };

  const newDirect = () => {
    const dirInput = document.getElementById("instructions");
    setDirection([...direction, dirInput.value]);
    dirInput.value = "";
  };

  const newMealType = () => {
    const mealInput = document.getElementById("mealType");
    setTypeMeal([...typeMeal, mealInput.value]);
    mealInput.value = "";
  };

  const newTag = () => {
    const tagInput = document.getElementById("tags");
    setTagType([...tagType, tagInput.value]);
    tagInput.value = "";
  };

  return (
    <div className="createRecipeMain">
      <form className="createRecipeForm d-flex flex-column gap-2 w-70 mx-auto">
        <h1 className="createRecipeTitle">Add A Recipe</h1>

        <input type="hidden" name="userId" defaultValue={recipes.userId} />

        <input
          type="text"
          className="createRecipeInputs"
          name="image"
          id="image"
          placeholder="Image Path..."
        />

        <input
          className="createRecipeInputs"
          type="text"
          name="name"
          placeholder="Recipe Name..."
          id="name"
        />

        <input
          className="createRecipeInputs"
          type="text"
          id="ingredients"
          name="ingredients"
          placeholder="Ingredient..."
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              newIng();
            }
          }}
        />

        <button className="createRecipeBtns" type="button" onClick={newIng}>
          Add Ingredient
        </button>
        <input
          className="createRecipeInputs"
          type="text"
          name="instructions"
          id="instructions"
          placeholder="Instruction..."
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              newDirect();
            }
          }}
        />
        <button className="createRecipeBtns" type="button" onClick={newDirect}>
          Add Instruction
        </button>

        <input
          className="createRecipeInputs"
          type="text"
          name="servings"
          id="servings"
          placeholder="Servings"
        />

        <input
          className="createRecipeInputs"
          type="text"
          name="difficulty"
          id="difficulty"
          placeholder="Difficulty..."
        />

        <input
          className="createRecipeInputs"
          type="text"
          name="cuisine"
          id="cuisine"
          placeholder="Cuisine..."
        />

        <input
          className="createRecipeInputs"
          type="text"
          name="mealType"
          id="mealType"
          placeholder="Meal Type"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              newMealType();
            }
          }}
        />
        <button
          className="createRecipeBtns"
          type="button"
          onClick={newMealType}
        >
          Add Meal Type
        </button>
        <input
          className="createRecipeInputs"
          type="text"
          name="prepTimeMinutes"
          id="prepTimeMinutes"
          placeholder="Prep Time"
        />
        <input
          className="createRecipeInputs"
          type="text"
          name="cookTimeMinutes"
          id="cookTimeMinutes"
          placeholder="Cook Time"
        />

        <input
          className="createRecipeInputs"
          type="text"
          name="tags"
          id="tags"
          placeholder="Tags"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              newTag();
            }
          }}
        />
        <button className="createRecipeBtns" type="button" onClick={newTag}>
          Add Tag
        </button>

        <input
          className="createRecipeInputs"
          type="text"
          name="caloriesPerServing"
          id="caloriesPerServing"
          placeholder="Calories Per Serving"
        />

        <button
          className="createRecipeBtns"
          type="button"
          onClick={handleRecipeCreate}
        >
          Submit Recipe
        </button>
        {/* <button type="reset">RESET FORM</button> */}
      </form>

      <div className="createRecipeDisplay">
        <ul>
          {ingList.map((ing, ind) => (
            <li key={ind}>{ing}</li>
          ))}
        </ul>
        <ol>
          {direction.map((dir, index) => (
            <li key={index}>{dir}</li>
          ))}
        </ol>
        <p>{typeMeal.join(", ")}</p>
        <p>{tagType.join(", ")}</p>
      </div>
    </div>
  );
};

export default CreateRecipe;
