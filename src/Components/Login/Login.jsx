import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

export const Login = (props) => {
  return (
    <>
      <main className="main-login">
        <div className="logo-image">
          <img
            src="https://iconape.com/wp-content/files/qa/334838/png/334838.png"
            alt=""
          />
        </div>
        <div className="form">
          
          <label>UserName:</label>
          <input type="text" name="username" />
          <label>Password:</label>
          <input type="text" name="username" />
          <label>Chose your company</label>
          <select name="company">
            <option value="Google">Google</option>
            <option value="Tesla">Tesla</option>
            <option value="Alphabet">Alphabet</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Facebook">Facebook</option>
          </select>
          <Link to='/SinglePage'><button>LogIn</button></Link>
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
