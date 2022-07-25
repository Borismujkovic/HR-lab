import React, { Component, useContext, useState } from "react";
import { adminCtx } from "../../context";
import "./ChooseCandidate.scss";

export const ChooseCandidate = (props) => {
  const {theme} = useContext(adminCtx)


  return (
    <div id={theme ? "ChooseCandidate-light" : "ChooseCandidate-dark"}>
      <main>
        <div>
          <p
            className={`${
              props.chosenCandidate.name === props.singleCandidate.name
                ? "active"
                : "not-active"
            }`}
            onClick={() => {
              props.populateChosenCandidateInfo(props.singleCandidate);
            }}
          >
            {props.singleCandidate.name}
          </p>
          
        </div>
      </main>
    </div>
  );
};
