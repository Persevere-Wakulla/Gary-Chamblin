import { useContext, useState, useEffect } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { UserContext } from "../layout/RootLayout";

const Admin = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  if (!user) {
    navigate("/");
  }
  const allUsers = useLoaderData();
  // console.log(allUsers);
  const handleDeleteUserInfo = (userId) => {
    confirm("Are you sure you wish to delete this User");
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((res) => {
        res.json();
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="adminMain">
        <input type="hidden" name="userId" defaultValue={allUsers._id} />
        {allUsers &&
          allUsers.map((data, index) => (
            <article className="adminUsersInfoArticle" key={index}>
              <div className="adminUsersInfoCard">
                <div className="usersPersonalInfo">
                  <h5>Personal:</h5>
                  <p>
                    <span>Name:</span> {data.firstName} {data.lastName}
                  </p>
                  <p>
                    <span>Username:</span> {data.userName}
                  </p>
                  <p>
                    <span>Email:</span> {data.email}
                  </p>
                  <p>
                    <span>Password:</span> {data.password}
                  </p>
                  <p>
                    <span>Address:</span> {data.address}
                  </p>
                  <p>
                    <span>City:</span> {data.city}
                  </p>
                  <p>
                    <span>State:</span> {data.state}
                  </p>
                  <p>
                    <span>Zipcode:</span> {data.zipCode}
                  </p>
                  <p>
                    <span>Phone:</span> {data.phone}
                  </p>
                </div>
                <div className="usersFavsDiv">
                  <h5>Recipes Created:</h5>
                  {data.favorites.map((favs) => (
                    <NavLink key={favs._id} to={`/recipes/${favs._id}`}>
                      {favs.name}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-center pb-3">
                <button
                  className="adminDeleteBtn btnStyle"
                  onClick={() => {
                    handleDeleteUserInfo(data._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
      </div>
    </>
  );
};

export async function adminLoader() {
  const req = await fetch("http://localhost:3000/users/admin");
  const res = await req.json();
  return res;
}

export default Admin;
