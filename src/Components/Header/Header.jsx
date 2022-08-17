import React, { useContext, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { adminCtx } from "../../context";

export const Header = (props) => {
  const { toggleTheme } = useContext(adminCtx);
  const { setToken } = useContext(adminCtx);
  const { theme } = useContext(adminCtx);

  const storageTheme = () => {
    window.localStorage.setItem("theme", theme);
  };

  return (
    <div id="Header">
      <Link to="/admin/SinglePage">
        <img
          className="header-img"
          src="https://iconape.com/wp-content/files/qa/334838/png/334838.png"
          alt=""
        />
      </Link>

      <div className="header-btns">
        <button
          className="theme"
          onClick={() => {
            toggleTheme();
            storageTheme();
          }}
        >
          Switch Theme
        </button>
        <button
          className="logout"
          onClick={() => {
            localStorage.clear("admin");
            localStorage.clear("token");
            localStorage.clear("adminId");
            setToken("");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
