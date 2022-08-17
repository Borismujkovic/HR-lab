import React, { useContext } from "react";
import { useState } from "react";
import "./SinglePage.scss";
import { Header } from "../../Components/Header/Header";
import { Card } from "../../Components/Card/Card";
import { Footer } from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { adminCtx } from "../../context";

export const SinglePage = (props) => {
  const candidates = useContext(adminCtx).candidates;
  const [filtered, setFiltered] = useState("");

  const filteredCandidates = candidates.filter((c) =>
    c.name.toLowerCase().includes(filtered.toLowerCase())
  );

  const search = (event) => {
    setFiltered(event.target.value);
  };

  return (
    <div id="SinglePage">
      <Header toggleTheme={props.toggleTheme} />
      <main className="main-card">
        <div className="div-search">
          <Link to="/admin/Admin">
            <button>Your Reports</button>
          </Link>
          <div>
            <img
              className="search-icon"
              src="https://freesvg.org/storage/img/thumb/search_ideogram.png"
              alt=""
            />
            <input type="search" onChange={search} />
          </div>
        </div>
        <div className="cards">
          {filteredCandidates.map((e) => (
            <Card singleCandidate={e} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
