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


export const App = () => {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"));
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [singleCandidate, setSingleCandidate] = useState(null);
  const [admin, setAdmin] = useState(window.localStorage.getItem("admin"));
  const [adminId, setAdminId] = useState(window.localStorage.getItem("adminId"));
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const selectReport = (obj) => {
    setModalData(obj);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const fetchData = () => {
    if (token) {
      fetch("http://localhost:3333/api/candidates")
        .then((res) => res.json())
        .then((res) => setCandidates(res));

      fetch("http://localhost:3333/api/reports")
        .then((res) => res.json())
        .then((res) => setReports(res));

      window.localStorage.setItem("admin", admin);
    }
  };

  const fetchCompanies = () => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((res) => setCompanies(res));
  };

  useEffect(() => {
    fetchCompanies();
    if (token) fetchData();
  }, [token]);

  const candidateInfo = (obj) => {
    setSingleCandidate(obj);
  };

  const getUser = (something) => {
    setAdmin(something);
  };

  const getUserId = () => {
    companies.find((e) => {
      if (e.name === admin) return window.localStorage.setItem("adminId", e.id);
    });
  };

  return (
    <AdminProvider
      value={{
        theme,
        candidates,
        candidateInfo,
        singleCandidate,
        reports,
        admin,
        toggleModal,
        modalOpen,
        toggleTheme,
        selectReport,
        modalData,
        setToken,
        fetchData,
        getUser,
        token,
        getUserId,
        adminId,
      }}
    >
      <div id={theme ? "light-app" : "dark-app"}>
        {!token && (
          <Switch>
            <Redirect from="/SinglePage" to="/" />
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        )}

        {token && (
          <Switch>
            <Redirect exact from="/" to="/SinglePage" />
            <Route path="/SinglePage">
              <SinglePage />
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
        )}
      </div>
    </AdminProvider>
  );
};
