import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import './NewReport.scss'
import { Header } from '../../Components/Header/Header'
import ChooseCandidate, { ChoseCandidate } from '../../Components/ChooseCandidate/ChooseCandidate'
import { CreateNew } from '../../Components/CreateNew/CreateNew'


export const NewReport = () => {



  return <div>
    <h1>NewReportPage</h1>
    <Header />
    <ChoseCandidate />
    <CreateNew />
  </div>
}
