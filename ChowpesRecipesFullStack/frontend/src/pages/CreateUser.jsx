import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();

  const handleSaveUser = (e) => {
    e.preventDefault();
    confirm("Are you sure all information is correct?");
    const data = {};

    const inputs = [...document.querySelectorAll("input")];
    inputs.forEach((ip) => {
      data[ip.id] = ip.id === "phone" ? Number(ip.value) : ip.value;
    });
    console.log(data);

    const postUser = () => {
      console.log("FETCHING");
      fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })
        .then((res) => {
          return res.json();
        })
        .then((x) => {
          const { message } = x;
          if (message) {
            alert(message);
          } else {
            navigate("/");
          }
        });
    };
    postUser();
  };

  return (
    <div className="regFormMain">
      <h1 className="title text-center mb-4">Register</h1>
      <div className="">
        <form
          className="regForm"
          onSubmit={handleSaveUser}
        >
          <div>
            <input
              type="text"
              className="createUserInput"
              id="image"
              name="image"
              placeholder="Image"
            />
          </div>

          <div>
            <input
              type="text"
              className="createUserInput"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>

          <div>
            <input
              type="text"
              className="createUserInput"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>

          <div>
            <input
              type="text"
              className="createUserInput"
              id="userName"
              name="userName"
              placeholder="User Name"
            />
          </div>

          <div>
            <input
              type="text"
              className="createUserInput"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              type="password"
              className="createUserInput"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div>
            <input
              type="text"
              className="createUserInput"
              id="address"
              name="address"
              placeholder="Address"
            />
          </div>

          <div>
            <input
              type="text"
              className="createUserInput"
              id="city"
              name="city"
              placeholder="City"
            />
          </div>

          <div>
            <input
              type="text"
              className="createUserInput"
              id="state"
              name="state"
              placeholder="State"
            />
          </div>

          <div>
            <input
              type="text"
              className="createUserInput"
              id="zipCode"
              name="zipCode"
              placeholder="ZipCode"
            />
          </div>

          <div>
            <input
              type="text"
              className="createUserInput"
              id="phone"
              name="phone"
              placeholder="Phone"
            />
          </div>
          
          <div className="createUserInput text-center">
            <button type="submit" className="submitBtn btnStyle" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
