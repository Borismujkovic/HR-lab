import React, { useContext, useEffect, useState } from "react";
import "./Info.scss";
import { Header } from "../../Components/Header/Header";
import { Details } from "../../Components/Details/Details";
import { Modal } from "../../Components/Modal/Modal";
import { Footer } from "../../Components/Footer/Footer";
import { ReportListInfo } from "../../Components/ReportListInfo/ReportListInfo";
import { adminCtx } from "../../context";
import { useParams } from "react-router-dom";

export const Info = (props) => {
  const { modalOpen } = useContext(adminCtx);
  const { id } = useParams();
  const [candidate, setCandidate] = useState([]);
  const [allReports, setAllReports] = useState([]);

  const fetchStuff = () => {
    fetch(`http://localhost:3333/api/candidates/${id}`)
      .then((res) => res.json())
      .then((res) => setCandidate(res));

    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((res) => setAllReports(res));
  };

  useEffect(() => {
    fetchStuff();
  }, []);

  const findReport = allReports.filter((e) => e.candidateId == id);

  return (
    <div id="Info">
      {modalOpen && <Modal />}
      <Header />
      <Details candidate={candidate} />
      {findReport.map((e) => (
        <ReportListInfo singleReport={e} />
      ))}
      <Footer />
    </div>
  );
};
