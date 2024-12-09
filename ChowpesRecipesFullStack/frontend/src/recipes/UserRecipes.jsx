import { NavLink, useOutletContext } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../layout/RootLayout";
import MyRecipeCard from "../components/MyRecipeCard";
// import BackButton from "../components/BackButton";

const UserRecipes = () => {
  const { recipes }  = useOutletContext();
  const { user } = useContext(UserContext);

  // console.dir(recipes);

  return (
    <div className="container-fluid recipe-container">
      <h1 className="text-center title">My Recipes</h1>
    {/* <BackButton  /> */}
      <div className="d-flex gap-3 justify-content-center flex-wrap">
        {user &&
          recipes &&
          recipes.map((recipe) => {
            if (recipe.userId === user._id) {
              return (
                <div className="userRecipeCardsDiv" key={recipe._id}>
                  <MyRecipeCard key={recipe._id} recipe={recipe} />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default UserRecipes;
