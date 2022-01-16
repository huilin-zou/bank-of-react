import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function LogIn(props) {
  console.log("props",props.user.userName)
  const [user, setUser] = useState({ userName: "", password: "" });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const updatedUser = { ...user };
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedUser[inputField] = inputValue;

    setUser(updatedUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.mockLogIn(user);
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/userProfile" />;
  }
  return (
    <div
      style={{
        textAlign: "left",
        paddingLeft: "600px",
        fontSize: "25px",
        paddingTop: "100px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ color: "white" }} htmlFor="userName">
            User Name
          </label>
          <input
            style={{ color: "black", width: "500px" }}
            type="text"
            name="userName"
            onChange={handleChange}
            value={user.userName}
            className="form-control"
          />
        </div>
        <div>
          <label style={{ color: "white" }} htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            style={{ color: "black", width: "500px" }}
            type="password"
            name="password"
          />
        </div>
        <button className="btn btn-outline-dark">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;