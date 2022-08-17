import React, { useContext, useState } from "react";
import "./Login.scss";
import { adminCtx } from "../../context";

export const Login = (props) => {
  const { setToken } = useContext(adminCtx);
  const { fetchData } = useContext(adminCtx);
  const [user, setUser] = useState("");
  const { getUser } = useContext(adminCtx);
  const { getUserId } = useContext(adminCtx);
  const [error, setError] = useState();
  const [userError, setUserError] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const authorisation = () => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (typeof res == "object") {
          localStorage.setItem("token", res.accessToken);
          setToken(res.accessToken);
        } else if (typeof res == "string") {
          setError(res);
        }
      });
  };

  const selectCompany = () => {
    if (user === "" || user === "blank") {
      setUserError("Please select company");
    } else {
      authorisation();
    }
  };

  return (
    <>
      <main className="main-login">
        <div className="logo-image">
          <img
            src="https://iconape.com/wp-content/files/qa/334838/png/334838.png"
            alt=""
          />
        </div>
        <h2 className="error">{user === "blank" ? userError : error}</h2>

        <div className="form">
          <label>UserName:</label>
          <input
            type="text"
            name="username"
            onChange={(event) => {
              setLoginData({ ...loginData, email: event.target.value });
            }}
          />
          <label>Password:</label>
          <input
            type="text"
            name="username"
            onChange={(event) => {
              setLoginData({ ...loginData, password: event.target.value });
            }}
          />
          <label>Chose your company</label>
          <select
            name="company"
            onChange={(event) => {
              setUser(event.target.value);
            }}
          >
            <option value="blank"> --- </option>
            <option value="Google">Google</option>
            <option value="Tesla">Tesla</option>
            <option value="Alphabet">Alphabet</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Facebook">Facebook</option>
          </select>
          <button
            onClick={() => {
              fetchData();
              selectCompany();
              getUser(user);
              getUserId();
            }}
          >
            LogIn
          </button>
        </div>
        <div className="companies">
          <a href="https://www.google.com/" target="/blank">
            <img
              src="https://cdn-icons-png.flaticon.com/128/104/104093.png"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/" target="/blank">
            <img
              src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
              alt=""
            />
          </a>
          <a href="https://www.tesla.com/" target="/blank">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1724/1724639.png"
              alt=""
            />
          </a>
          <a href="https://www.alphabet.com/" target="/blank">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3522/3522242.png"
              alt=""
            />
          </a>
          <a href="https://www.microsoft.com/" target="/blank">
            <img
              src="https://cdn-icons-png.flaticon.com/128/732/732068.png"
              alt=""
            />
          </a>
        </div>
      </main>
    </>
  );
};
