import React, { useContext } from "react";
import "./Details.scss";
import { adminCtx } from "../../context";

export const Details = (props) => {
  const { theme } = useContext(adminCtx);

  return (
    <div id={theme ? "Details-light" : "Details-dark"}>
      <div className="candidateInfo">
        <div className="candidateDetails">
          <h2>
            <span>Full Name:</span> {props.candidate.name}
          </h2>
          <h2>
            <span>Date of Birth:</span> {props.candidate.birthday}
          </h2>
          <h2>
            <span>E-mail:</span> {props.candidate.email}
          </h2>
          <h2>
            <span>Education:</span> {props.candidate.education}
          </h2>
        </div>
        <div>
          <img className="detailsImg" src={props.candidate.images} alt="" />
        </div>
      </div>
    </div>
  );
};
