import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav id="nav">
      <ul className="nav m-5 justify-content-center">
        <Link to="/" />
        <li className="nav-item">
          <a
            className="nav-link active"
            href="/"
            style={{
              color: "white",
              fontSize: "20px",
              paddingRight: "100px",
              textDecorationLine: "underline",
              fontFamily: "Roboto",
            }}
          >
            HOME
          </a>
        </li>

        <Link to="/userProfile" />
        <li className="nav-item">
          <a
            className="nav-link"
            href="userProfile"
            style={{
              color: "white",
              fontSize: "20px",
              paddingRight: "100px",
              textDecorationLine: "underline",
              fontFamily: "Roboto",
            }}
          >
            USER PROFILE
          </a>
        </li>

        <Link to="/Debits" />
        <li className="nav-item">
          <a
            className="nav-link active"
            href="/Debits"
            style={{
              color: "white",
              fontSize: "20px",
              paddingRight: "100px",
              textDecorationLine: "underline",
              fontFamily: "Roboto",
            }}
          >
            DEBITS
          </a>
        </li>

        <Link to="/Credits" />
        <li className="nav-item">
          <a
            className="nav-link"
            href="/Credits"
            style={{
              color: "white",
              fontSize: "20px",
              paddingRight: "100px",
              textDecorationLine: "underline",
              fontFamily: "Roboto",
            }}
          >
            CREDITS
          </a>
        </li>

        <Link to="/logIn" />
        <li className="nav-item">
          <a
            className="nav-link"
            href="LogIn"
            style={{
              color: "white",
              fontSize: "20px",
              paddingRight: "100px",
              textDecorationLine: "underline",
              fontFamily: "Roboto",
            }}
          >
            LOG IN
          </a>
        </li>
      </ul>
    </nav>
  );
}