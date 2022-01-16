import React from "react";

function UserProfile(props) {
  return (
    <div
      className="containerProfile"
      style={{
        backgroundColor: "rgba(52, 52, 52, 0.2)",

        height: "500px",
        width: "auto",
      }}
    >
      <h1
        style={{
          textAlign: "left",
          color: "rgb(239, 245, 237)",
          paddingLeft: "200px",
          paddingTop: "70px",
        }}
      >
        Username: {props.userName}
      </h1>
      <h1
        style={{
          textAlign: "left",
          paddingLeft: "200px",
          color: "rgb(239, 245, 237)",
        }}
      >
        Member Since: {props.memberSince}
      </h1>
    </div>
  );
}

export default UserProfile;