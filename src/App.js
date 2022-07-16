import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { SinglePage } from "./Pages/SinglePage/SinglePage";
import { Admin } from "./Pages/Admin/Admin";
import { Info } from "./Pages/Info/Info";
import { NewReport } from "./Pages/NewReport/NewReport";
import { AdminProvider } from "./context";
import { Modal } from "./Components/Modal/Modal";

// const candidates = useContext(adminCtx).candidates

export const App = () => {
  const [theme, setTheme] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [singleCandidate, setSingleCandidate] = useState(null);
  const [admin, setAdmin] = useState("Google")
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState(null)

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const selectReport = (obj) => {
    setModalData(obj);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  const fetchData = () => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((res) => setCandidates(res));

    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((res) => setReports(res));
  };

  const fetchCompanies = () => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((res) => setCompanies(res));
  };

  useEffect(() => {
    fetchCompanies();
    fetchData();
  }, []);

  const candidateInfo = (obj) => {
    setSingleCandidate(obj);
  };

  return (
    <AdminProvider
      value={{ theme, candidates, candidateInfo, singleCandidate, reports, admin, toggleModal, modalOpen, toggleTheme, selectReport, modalData }}
    >
      <div id={theme ? "light-app" : "dark-app"}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/SinglePage">
            <SinglePage toggleTheme={toggleTheme} />
          </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/Info">
            <Info />
          </Route>
          <Route path="/NewReport">
            <NewReport />
          </Route>
        </Switch>
      </div>
    </AdminProvider>
  );
};
