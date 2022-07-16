import React, { Component, useState } from "react";
import "./ChooseCandidate.scss";

export const ChooseCandidate = (props) => {
  return (
    <div id="ChooseCandidate">
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
