import React, { Component } from "react";
import "./HomePage.scss";
import { Login } from "../../Components/Login/Login";
import { Footer } from "../../Components/Footer/Footer";

export const HomePage = (props) => {
  return (
    <div id="HomePage">
      <Login />
    </div>
  );
};
