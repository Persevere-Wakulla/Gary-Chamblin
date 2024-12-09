// import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserContext } from "../layout/RootLayout";
import { useContext } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RecipeCatBtns({ filterFunc }) {
  const { recipes, setRecipes } = useOutletContext();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  // console.dir(recipes);
  console.dir(user);

  
  let mealTimeList = new Array(
    ...new Set(recipes.map((rec) => rec.mealType).flat())
  ).sort();

  let tagsList = new Array(
    ...new Set(recipes.map((rec) => rec.tags).flat())
  ).sort();


  let cuisineList = new Array(...new Set(recipes.map((rec) => (
  rec.cuisine)))).sort()


  return (
    <>
      {user && (
        <>
          <button
            onClick={() => navigate("/recipes/createRecipe")}
            className="filterBtn btnStyle"
          >
            Create Recipe
          </button>
          <button
            onClick={() => navigate("/recipes/userRecipes")}
            className="filterBtn btnStyle"
          >
            My Recipes
          </button>
        </>
      )}
      <button
        className="filterBtn btnStyle"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Filter
      </button>

      <div
        className="test offCanvasColor offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Filter Options
          </h5>
          <button
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
          </button>
        </div>

        <div className="offcanvas-body" id='filterBoxDiv'>
          <div className="filterListBox" id="mealTimeFilterDiv">
            <h5 className="offcanvas-title">Meal Time Filters:</h5>
            <ul
              className="filters"
              onClick={filterFunc}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasright"
            >
              {mealTimeList.map((item, index) => {
                if(item !== '') {
                  return <li key={index}>{item}</li>;
                }
              })}
            </ul>
          </div>

          <div className="filterListBox" id="recipeeTagsFilter">
            <h5 className="offcanvas-title">Tag Filters:</h5>
            <ul
              className="filters"
              onClick={filterFunc}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
            >
              {tagsList.map((item, index) => {
                if(item !== ''){
                  return <li key={index}>{item}</li>;
                }
              })}
            </ul>
          </div>
          <div className="filterListBox" id="recipeTitleFilter">
          <h5 className="offcanvas-title">Cuisine Filters:</h5>
            <ul
              className="filters"
              onClick={filterFunc}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasright"
            >
              {cuisineList.map((item, index) => {
                if(item !== ''){
                  return <li key={index}>{item}</li>
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
