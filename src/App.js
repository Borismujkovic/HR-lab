import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { SinglePage } from "./Pages/SinglePage/SinglePage";
import { Admin } from "./Pages/Admin/Admin";
import { Info } from "./Pages/Info/Info";
import { NewReport } from "./Pages/NewReport/NewReport";

export const App = () => {


  
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/SinglePage">
          <SinglePage />
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
        <Route path="/Info">
          <Info />
        </Route>
        <Route path="NewReport">
          <NewReport />
        </Route>
      </Switch>
    </div>
  );
};
