import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import RecipeCatBtns from "./RecipeCatBtns";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  //?this is the array of recipes call data
  const { recipes, setRecipes } = useOutletContext();
  const [mealType, setMealType] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);

  const filtering = (e) => {
    setMealType(
      recipes.filter((item) => {
        if (
          item.tags.includes(e.target.innerText) ||
          item.mealType.includes(e.target.innerText) ||
          item.cuisine.includes(e.target.innerText)
        ) {
          return item;
        }
      })
    );
    setIsFiltering(true);
  };

  const removeFilter = () => {
    setMealType([]);
    setIsFiltering(false);
  };

  return (
    <div className="container-fluid recipe-container">
      <div className="d-flex justify-content-center mb-4 mt-5 gap-3">
        <RecipeCatBtns filterFunc={filtering} />
        {isFiltering && (
          <button
            type="button"
            className="filterBtn btnStyle"
            onClick={removeFilter}
          >
            👈Back
          </button>
        )}
      </div>
      <div className="row row-cols-4 gap-3 justify-content-center">
        {mealType.length > 0
          ? mealType.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))
          : recipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
      </div>
    </div>
  );
}
