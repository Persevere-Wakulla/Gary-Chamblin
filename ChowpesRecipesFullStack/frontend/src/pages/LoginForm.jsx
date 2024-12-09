import { useContext} from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../layout/RootLayout";

const LoginForm = ({ logIn, logOut }) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="loginDiv">
      {user ? (
        <div className="welcomeUserDiv">
          <h2 className="userName">Welcome {user.firstName}</h2>
          <div className="d-flex justify-content-center gap-2">
            {user && user.userName === 'admin' ? (
               <button className="loginFormBtn btnStyle">
               <NavLink to="admin" className="text-white">
                 Admin 
               </NavLink>
             </button>
            ) : (
              <button className="loginFormBtn btnStyle">
              <NavLink to="account" className="text-white">
                Account
              </NavLink>
            </button>
            )}
           
            <button className="loginFormBtn btnStyle" onClick={logOut}>
              <NavLink to="/" className="text-white">
                Logout
              </NavLink>
            </button>
          </div>
        </div>
      ) : (
        <form
          id="loginForm"
          onSubmit={logIn}
          className="d-flex flex-column"
          method="POST"
        >
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Username"
            className="inputFocus"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="inputFocus"
          />
          <div className="d-flex justify-content-between gap-1">
            <button type="submit" className="loginFormBtn btnStyle">
              Login
            </button>
            <button type="button" className="btnStyle loginFormBtn">
              <NavLink to="register" className="registerBtn text-white">
                Register
              </NavLink>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
