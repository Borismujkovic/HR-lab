import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "./NewReport.scss";
import { Header } from "../../Components/Header/Header";
import { ChooseCandidate } from "../../Components/ChooseCandidate/ChooseCandidate";
import { CreateNew } from "../../Components/CreateNew/CreateNew";
import { Link } from "react-router-dom";
import { adminCtx } from "../../context";

export const NewReport = (props) => {
  const candidates = useContext(adminCtx).candidates;
  const [chosenCandidate, setChosenCandidate] = useState({ name: "", id: 0 });
  const {theme} = useContext(adminCtx)

  const populateChosenCandidateInfo = (obj) => {
    setChosenCandidate(obj);
  };

  return (
    <div id={theme ? "NewReport-light" : "NewReport-dark"}>
      <Header />
      <div className="admin-search">
        <div>
          <Link to="/Admin">
            <button className="admin-btn">Admin Page</button>
          </Link>
          <Link to="/NewReport">
            <button className="new-btn">New Report</button>
          </Link>
        </div>
      </div>
      <main>
        <div className="candidates">
          <div className="choose">
            <p className="number">1</p>
            <h2>Choose candidate:</h2>
          </div>
          {candidates.map((e) => (
            <ChooseCandidate
              singleCandidate={e}
              populateChosenCandidateInfo={populateChosenCandidateInfo}
              chosenCandidate={chosenCandidate}
            />
          ))}
        </div>

        <CreateNew chosenCandidate={chosenCandidate} />
      </main>
    </div>
  );
};
