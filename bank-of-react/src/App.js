import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/LogIn";
import Nav from "./components/Nav";
import "./App.css";
import Credits from "./components/Credits";
import Debits from "./components/Debits";

function App(props) {
  const mockLogIn = (logInInfo) => {
    const newUser = { ...currentUser };
    newUser.userName = logInInfo.userName;
    //setCurrentUser(newUser);
  };

  const [accountBalance, setAccountBalance] = useState(14568.27);
  const [currentUser, setCurrentUser] =
  
  useState({
  userName: 'bob',
  memberSince: "08/23/99",
  });

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home accountBalance={accountBalance} />} />
        <Route
          path="/userProfile"
          element={
            <UserProfile
              userName={currentUser.userName}
              memberSince={currentUser.memberSince}
            />
          }
        />
        <Route
          path="/login"
          element={<LogIn user={currentUser} mockLogIn={mockLogIn} />}
        />
        <Route path="/Debits" element={<Debits />} />

        <Route path="/Credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;