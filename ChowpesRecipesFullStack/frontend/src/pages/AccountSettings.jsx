import React from "react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../layout/RootLayout";
import { NavLink, useNavigate } from "react-router-dom";

const AccountSettings = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const [favs, setFavs] = useState([]);
  let loading = false;

  if (!user) {
    navigate("/");
  }

  useEffect(() => {
    loading = true;
    const fetchRecipes = async () => {
      const req = await fetch("http://localhost:3000/recipes");
      const res = await req.json();
      if (res.data) {
        setRecipes(res.data);
      }
    };
    const fetchFavs = async () => {
      const req = await fetch(`http://localhost:3000/users/${user._id}/favs`);
      const res = await req.json();
      if (res) {
        setFavs(res.favorites);
      }
    };

    if (loading) {
      fetchRecipes();
      fetchFavs();
      loading = false;
    }
  }, []);
  // console.log(user.comments);
  // console.log(recipes);
  // console.log(favs);

  return (
    <div className="accountMain" id="personal">
      <h1 className="accountTitle text-center title">Personal Info</h1>
      <section className="accountForm" id="personalInfo">
        <div className="accountImgDiv">
          <img src={user.image} alt="User Image" className="userImage" />
        </div>
        <div className="userInfoDiv">
          <h3>
            First Name: <span>{user.firstName}</span>
          </h3>

          <h3>
            Last Name: <span>{user.lastName}</span>
          </h3>

          <h3>
            User Name: <span>{user.userName}</span>
          </h3>

          <h3>
            Email: <span>{user.email}</span>
          </h3>

          <h3>
            Password: <span>{user.password}</span>
          </h3>

          <h3>
            Address: <span>{user.address}</span>
          </h3>

          <h3>
            City: <span>{user.city}</span>
          </h3>

          <h3>
            State: <span>{user.state}</span>
          </h3>

          <h3>
            Zipcode: <span>{user.zipCode}</span>
          </h3>

          <h3>
            Phone: <span>{user.phone}</span>
          </h3>
        </div>
        <a href="#accountRecipes">
          <img
            src="/assets/angles-down.svg"
            alt="arrow-down"
            className="icon arrow"
          />
        </a>
      </section>
      <section id="accountRecipes">
        <h1 className="text-center accountRecipesTitle">My Recipes</h1>
        <div id="AccountRecipes">
          {user &&
            recipes &&
            recipes.map((recipe) => {
              if (recipe.userId === user._id) {
                return (
                  <div
                    className="accountRecipeCardsDiv accCardDiv"
                    key={recipe._id}
                  >
                    {/* <MyRecipeCard key={recipe._id} recipe={recipe} /> */}

                    <NavLink to={`/recipes/${recipe._id}`}>
                      <h4 className="accRecipeName text-center">
                        {recipe.name}
                      </h4>
                      <div className="recipeCardImgDiv">
                        <img
                          src={recipe.image}
                          alt="img"
                          className="card-img-top accRecipeCardImg"
                        />
                      </div>
                    </NavLink>
                  </div>
                );
              }
            })}
        </div>
        <a href="#navTitle">
          <img
            src="/assets/angles-down.svg"
            alt="arrow-up"
            className="icon upArrow"
          />
        </a>
        <a href="#userFavorites">
          <img
            src="/assets/angles-down.svg"
            alt="arrow-down"
            className="icon arrow"
          />
        </a>
      </section>
      <section id="userFavorites" className="">
        <h1 className="text-center accountRecipesTitle">My Favorites</h1>
   <div className="accountFavorites">

          {user &&
            favs.map((recipe, index) => (
              <div
              className="accountRecipeCardsDiv accCardDiv"
              key={recipe._id}
              >
                    {/* <MyRecipeCard key={recipe._id} recipe={recipe} /> */}

                    <NavLink to={`/recipes/${recipe._id}`}>
                      <h4 className="accRecipeName text-center">
                        {recipe.name}
                      </h4>
                      <div className="recipeCardImgDiv">
                        <img
                          src={recipe.image}
                          alt="img"
                          className="card-img-top accRecipeCardImg"
                          />
                      </div>
                    </NavLink>
                  </div>
            ))}
          </div>
          <a href="#accountRecipes">
          <img
            src="/assets/angles-down.svg"
            alt="arrow-up"
            className="icon upArrow"
          />
        </a>
        <a href="#userComments">
          <img
            src="/assets/angles-down.svg"
            alt="arrow-down"
            className="icon arrow"
          />
        </a>
      </section>
      <section id="userComments">
        <h1 className="text-center accountRecipesTitle">My Comments</h1>
        {user.comments &&
          user.comments.length &&
          user.comments.map((com, index) => (
            <div key={index} className="commentDiv text-center">
              <p>{com.comment}</p>
              <p><span className="text-dark">Commented on:</span> {com.createdAt}</p>
            </div>
          ))}
            <a href="#userFavorites">
          <img
            src="/assets/angles-down.svg"
            alt="arrow-down"
            className="icon upArrow"
          />
        </a>
        <a href="#accountNavDiv">
          <img
            src="/assets/angles-down.svg"
            alt="arrow-down"
            className="icon arrow"
          />
        </a>
      </section>

      <div className="d-flex justify-content-center gap-2 w-100 p-5">
        <NavLink to="/delete" className="btnStyle accountBtns">
          Delete Account
        </NavLink>

        <NavLink to="/edit" className="btnStyle accountBtns">
          Edit Account
        </NavLink>
      </div>
      <div id="accountNavDiv">
        <nav className="accountNav">
          <a href="#navTitle" className="personal">
            Personal Info
          </a>
          <a href="#accountRecipes" className="accRecs">
            My Recipes
          </a>
          <a href="#userFavorites" className="accFavs">My Favorites</a>
        </nav>
      </div>
    </div>
  );
};

export default AccountSettings;
