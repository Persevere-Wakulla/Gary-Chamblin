import { useLoaderData, NavLink } from "react-router-dom";
import { UserContext } from "../layout/RootLayout";
import { useContext, useState } from "react";

export default function RecipeDetails() {
  const { user, setUser } = useContext(UserContext);
  const recipes = useLoaderData();
  const [isFavorite, setIsFavorite] = useState(
    user != null ? user.favorites.includes(recipes._id) : false
  );
  // console.dir(user._id);
  // console.dir(recipes.userId);
  async function favoriteHandler(e) {
    if (user != null) {
      let data;
      if (!isFavorite) {
        data = { favorites: [...user.favorites, recipes._id] };
      } else if (isFavorite) {
        data = {
          favorites: user.favorites.filter((element) => element != recipes._id),
        };
      }

      const favs = await fetch(`http://localhost:3000/users/${user._id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });
      const result = await favs.json();
      console.log({ ...result });
      setIsFavorite(result.favorites.includes(recipes._id));
      setUser({ ...result });
    } else {
      alert("Please Sign In To Add A Favorite");
    }
  }

  return (
    <>
      <div className="detailsPage p-3 d-xl-flex gap-5 justify-content-center mt-5">
        <div className="detailsImgDiv">
          <img
            src={"/" + recipes.image}
            className="detailsImg img-fluid col-sm-4 float-sm-end ms-md-3 mb-3"
            alt="img"
          />
        </div>

        <div className="directionsDiv d-flex justify-content-center flex-column">
          <div className="directions m-auto w-75">
            <h1 className="fst-italic fw-bold">{recipes.name}</h1>
            <h4>Prep Time: {recipes.prepTimeMinutes} Min.</h4>
            <h4>Cook Time: {recipes.cookTimeMinutes} Min.</h4>
            <h4>Servings: {recipes.servings}</h4>
            <h3>Ingredients:</h3>
            <ul>
              {recipes.ingredients.map((list, index) => (
                <li key={index}>{list}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
              {recipes.instructions.map((orderList, index) => (
                <li key={index}>{orderList}</li>
              ))}
            </ol>
          </div>

          <div className="detailsBtnsDiv">
            {user &&
              user._id &&
              recipes.userId &&
              user._id === recipes.userId && (
                <NavLink
                  to={`/recipes/editRecipe/${recipes._id}`}
                  className="detailPgBtns editBtn btnStyle"
                >
                  Edit
                </NavLink>
              )}
            <button
              type="button"
              className="btnStyle detailPgBtns addRemoveFav"
              onClick={favoriteHandler}
            >
              {user === null
                ? "Sign In To Add To Favorites"
                : !isFavorite
                ? "Add To Favorites"
                : "Remove From Favorites"}
            </button>
            {user &&
              user._id &&
              recipes.userId &&
              user._id === recipes.userId && (
                <NavLink
                  to={`/recipes/deleteRecipe/${recipes._id}`}
                  className="detailPgBtns deleteBtn btnStyle"
                >
                  Delete
                </NavLink>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

//? loader function
export const detailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/recipes/${id}`);
  const local = await res.json();
  console.log(local);
  return local;
};
