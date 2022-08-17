import React, { useContext, useState } from "react";
import "./EditModal.scss";
import { adminCtx } from "../../context";
import { useHistory } from "react-router-dom";

export const EditModal = (props) => {
  const { modalData } = useContext(adminCtx);
  const { theme } = useContext(adminCtx);
  const { token } = useContext(adminCtx);
  const { fetchData } = useContext(adminCtx);
  const history = useHistory();
  console.log(modalData.id);

  const [body, setBody] = useState({
    candidateId: modalData.candidateId,
    candidateName: modalData.candidateName,
    companyId: modalData.companyId,
    companyName: modalData.companyName,
    interviewDate: "",
    phase: "",
    status: "",
    note: "",
  });

  const changeReport = () => {
    fetch(`http://localhost:3333/api/reports/${modalData.id}}`, {
      method: "PUT",
      body: JSON.stringify({ ...body }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(fetchData)
      .then(history.push("/admin/Admin"));
  };

  return (
    <div id={theme ? "Modal-light" : "Modal-dark"}>
      <div className="modal-content">
        <button className="closeBtn" onClick={() => props.openEditModal()}>
          X
        </button>
        <div className="left">
          <img
            src="https://icon-library.com/images/profile-icon-white/profile-icon-white-3.jpg"
            alt=""
            className="userLogo"
          />
          <div className="personalInfo">
            <h2>{modalData.candidateName}</h2>
          </div>
        </div>
        <div className="right">
          <div className="reportInfo">
            <div className="reportInfoItem">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2891/2891415.png"
                alt=""
                className="logo"
              />
              <h4>{modalData.companyName}</h4>
            </div>
            <div className="reportInfoItem">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2693/2693507.png"
                alt=""
                className="logo"
              />
              <input
                type="date"
                className="date"
                onChange={(event) => {
                  setBody({ ...body, interviewDate: event.target.value });
                }}
              />
            </div>
            <div className="reportInfoItem">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4295/4295910.png"
                alt=""
                className="logo"
              />
              <select
                name="Status"
                className="status"
                onChange={(event) => {
                  setBody({ ...body, status: event.target.value });
                }}
              >
                <option disabled selected value>
                  ---
                </option>
                <option value="Ongoing">Ongoing</option>
                <option value="Passed">Passed</option>
                <option value="Declined">Declined</option>
              </select>
            </div>
            <div className="reportInfoItem">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5698/5698496.png"
                alt=""
                className="logo"
              />
              <select
                name="Phase"
                className="phase"
                onChange={(event) => {
                  setBody({ ...body, phase: event.target.value });
                }}
              >
                <option disabled selected value>
                  ---
                </option>
                <option value="Final">CV</option>
                <option value="HR">HR</option>
                <option value="Technical">Technical</option>
                <option value="Final">Final</option>
              </select>
            </div>
          </div>
          <div className="report">
            <textarea
              className="reportNote"
              type="text"
              onChange={(event) => {
                setBody({ ...body, note: event.target.value });
              }}
            >
              {modalData.note}
            </textarea>
            <button className="submitChange" onClick={changeReport}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
