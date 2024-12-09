import React from "react";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../layout/RootLayout";

const EditAccount = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  let loading = false;

  useEffect(() => {
    const editUser = async () => {
      await fetch("http://localhost:3000/users");
      await req.json().then((res) => {
        console.log(res);
        let data = {};
        document.querySelectorAll("#editForm input").forEach((inp) => {
          data[inp.id] = inp.value;
        });
      });
      editUser();
    };
  }, []);

  const handleEditUser = (e) => {
    e.preventDefault();
    confirm(
      "Are you sure all info is correct? You will be logged out for info to be updated."
    );
    let data = {};
    document.querySelectorAll("#editForm input").forEach((inp) => {
      data[inp.id] = inp.value;
    });
    const editUser2 = async () => {
      await fetch(`http://localhost:3000/users/${user._id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => {
          console.log(res);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    editUser2();
    setUser(user);
    navigate("/");
  };

  return (
    <div>
      <form
        className="regForm d-flex flex-column w-50 mx-auto gap-2"
        id="editForm"
        onSubmit={handleEditUser}
      >
        <div className="d-flex justify-content-between align-items-center">
          <label htmlFor="image">Image</label>
          <input type="text" className="editUserInput" id="image" name="image" defaultValue={user.image}/>
        </div>

        <div className="d-flex justify-content-between align-items-center gap-2">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="editUserInput"
            id="firstName"
            defaultValue={user.firstName}
            name="firstName"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="editUserInput"
            id="lastName"
            defaultValue={user.lastName}
            name="lastName"
          />
        </div>

        <div className="d-flex justify-content-between align-items-center gap-2">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            className="editUserInput"
            id="userName"
            defaultValue={user.userName}
            name="userName"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="editUserInput"
            id="email"
            defaultValue={user.email}
            name="email"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="editUserInput"
            id="password"
            defaultValue={user.password}
            name="password"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="editUserInput"
            id="address"
            defaultValue={user.address}
            name="address"
          />
        </div>

        <div className="d-flex justify-content-between align-items-center gap-2">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="editUserInput"
            id="city"
            defaultValue={user.city}
            name="city"
          />
        </div>

        <div className="d-flex justify-content-between align-items-center gap-2">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="editUserInput"
            id="state"
            defaultValue={user.state}
            name="state"
          />
        </div>

        <div className="d-flex justify-content-between align-items-center gap-2">
          <label htmlFor="zipCode">Zipcode</label>
          <input
            type="text"
            className="editUserInput"
            id="zipCode"
            defaultValue={user.zipCode}
            name="zipCode"
          />
        </div>

        <div className="d-flex justify-content-between align-items-center gap-2">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="editUserInput"
            id="phone"
            defaultValue={user.phone}
            name="phone"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="submitBtn btnStyle" id="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAccount;
