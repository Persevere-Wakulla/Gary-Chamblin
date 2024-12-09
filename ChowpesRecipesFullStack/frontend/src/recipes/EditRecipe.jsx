import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";


const EditRecipe = () => {
  const { recipes, setRecipes } = useOutletContext();
  const { recipeId } = useParams();
  const [recipeGotten, setRecipeGotten] = useState("");
  const [ingList, setIngList] = useState([]);
  const [dir, setDir] = useState([]);
  const [typeMeal, setTypeMeal] = useState([]);
  const [tagType, setTagType] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch(`http://localhost:3000/recipes/editRecipe/${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipeGotten({ ...data });
        setIngList(data.ingredients);
        setDir(data.instructions);
        setTypeMeal(data.mealType);
        setTagType(data.tags);
      });
  }, []);

  const handleEditRecipe = async (e) => {
    e.preventDefault();
    confirm("Are you sure all info is correct?");
    let newRecipe = {};
    let dirs = [...dir];
    let ings = [...ingList];
    let tags = [...tagType];
    let meals = [...typeMeal];

    [...e.target].forEach((input) => {
      if (input.name) {
        switch (input.name) {
          case "instructions":
            if (input.value === "") {
              return dirs.splice(input.id, 1);
            }
            if (!dirs.includes(input.value)) {
              if (dirs.value !== dir[input.id]) {
                return dirs.splice(input.id, 1, input.value);
              } else {
                dirs.push(input.value);
              }
            }
            break;

          case "ingred":
            if (input.value === "") {
              return ings.splice(input.id, 1);
            }
            if (!ings.includes(input.value)) {
              if (ings.value !== ingList[input.id]) {
                return ings.splice(input.id, 1, input.value);
              } else {
                ings.push(input.value);
              }
            }
            break;
          case "tagType":
            if (input.value === "") {
              return tags.splice(input.id, 1);
            }
            if (!tags.includes(input.value)) {
              if (tags.value !== tagType[input.id]) {
                return tags.splice(input.id, 1, input.value);
              } else {
                tags.push(input.value);
              }
            }
            break;
          case "mealType":
            if (input.value === "") {
              return meals.splice(input.id, 1);
            }
            if (!meals.includes(input.value)) {
              if (meals.value !== typeMeal[input.id]) {
                return meals.splice(input.id, 1, input.value);
              } else {
                meals.push(input.value);
              }
            }
            break;
          default:
            newRecipe[input.name] = input.value;
        }
      }
    });
    newRecipe.instructions = dirs;
    newRecipe.ingredients = ings;
    newRecipe.tags = tags;
    newRecipe.mealType = meals;

    fetch(`http://localhost:3000/recipes/editRecipe/${recipeId}`, {
      method: "PUT",
      body: JSON.stringify(newRecipe),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        const newRecipes = [...recipes.filter((x) => x._id !== data._id), data];
        setRecipes(newRecipes);
        navigate("/recipes/userRecipes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function newIngred() {
    setIngList([...ingList, ""]);
  }

  function newDirection() {
    setDir([...dir, ""]);
  }

  function newMealType() {
    setTypeMeal([...typeMeal, ""]);
  }

  function newTag() {
    setTagType([...tagType, ""]);
  }

  return (
    <div className="editRecipeMain text-center">
      <h2 className="title">Edit Recipe</h2>
      {/* <NavLink to={"/recipes"} className='btnStyle filterBtn'>👈Back</NavLink>{" "} */}
      {recipeGotten ? (
        <form className="editRecipeForm" onSubmit={handleEditRecipe}>
          <input type="hidden" name="_id" defaultValue={recipeGotten._id} />
          <input
            type="hidden"
            name="userId"
            defaultValue={recipeGotten.userId}
          />
          <label>
            Recipe Name:{" "}
            <input
              className="editInputs"
              type="text"
              defaultValue={recipeGotten.name}
              name="name"
              id="name"
            />
          </label>

          <label>
            Recipe Image:
            <input
              className="editInputs"
              type="text"
              defaultValue={recipeGotten.image}
              name="image"
              id="image"
            />
          </label>

          {ingList.length > 0 ? (
            ingList.map((ing, index) => {
              return (
                <label key={index}>
                  {`Ingredient ${index + 1}:`}{" "}
                  <input
                    className="ingred editInputs"
                    name="ingred"
                    id={index}
                    defaultValue={ing}
                  />
                </label>
              );
            })
          ) : (
            <>
              <label>
                Ingredient:
                <input
                  type="text"
                  className="ingred editInputs"
                  name="ingred"
                />
              </label>
            </>
          )}
          <button className="editRecipeBtns" type="button" onClick={newIngred}>
            Add Ingredient
          </button>

          {dir.length > 0 ? (
            dir.map((dir, index) => {
              return (
                <label key={index}>
                  {`Instruction ${index + 1}:`}{" "}
                  <input
                    className="instructions editInputs"
                    name="instructions"
                    id={index}
                    defaultValue={dir}
                  />
                </label>
              );
            })
          ) : (
            <>
              <label>
                Direction:
                <input
                  type="text"
                  className="instructions editInputs"
                  name="instructions"
                />
              </label>
            </>
          )}
          <button
            className="editRecipeBtns"
            type="button"
            onClick={newDirection}
          >
            Add Instruction
          </button>

          <label>
            Servings:{" "}
            <input
              type="text"
              className="editInputs"
              defaultValue={recipeGotten.servings}
              name="servings"
              id="servings"
            />
          </label>

          <label>
            Difficulty:{" "}
            <input
              type="text"
              name="difficulty"
              id="difficulty"
              defaultValue={recipeGotten.difficulty}
            />
          </label>

          {typeMeal.length > 0 ? (
            typeMeal.map((meal, index) => {
              return (
                <label key={index}>
                  {`Meal Type ${index + 1}:`}{" "}
                  <input
                    className="mealType"
                    name="mealType"
                    id={index}
                    defaultValue={meal}
                  ></input>
                </label>
              );
            })
          ) : (
            <>
              <label>
                Meal Type:
                <input
                  type="text"
                  name="mealType"
                  className="mealType editInputs"
                />
              </label>
            </>
          )}
          <button
            className="editRecipeBtns"
            type="button"
            onClick={newMealType}
          >
            Add Meal Type
          </button>

          {tagType.length > 0 ? (
            tagType.map((tag, index) => {
              return (
                <label key={index}>
                  {`Tag ${index + 1}:`}{" "}
                  <input
                    className="tagType"
                    name="tagType"
                    id={index}
                    defaultValue={tag}
                  ></input>
                </label>
              );
            })
          ) : (
            <>
              <label>
                Tag:
                <input
                  type="text"
                  className="tagType editInputs"
                  name="tagType"
                />
              </label>
            </>
          )}
          <button className="editRecipeBtns" type="button" onClick={newTag}>
            Add Tag
          </button>

          <button className="editRecipeBtns editSubmit" type="submit">
            Submit Changes
          </button>
        </form>
      ) : (
        <h1>Recipe </h1>
      )}
    </div>
  );
};

export default EditRecipe;

//  export async function recipeEditLoader() {
//     const res = await fetch(`http://localhost:3000/recipes/${recipeId}`);

// }
