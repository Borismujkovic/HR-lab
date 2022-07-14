import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import './SinglePage.scss'
import { Header } from '../../Components/Header/Header'
import { Card } from '../../Components/Card/Card'
import {Footer} from '../../Components/Footer/Footer'

export const SinglePage = () => {



  return <div id="SinglePage">
    <Header />
    <main className="main-card">
    <div className='div-search'>
            <button>Your Reports</button>
            <div>
            <img className='search-icon' src="https://cdn-icons.flaticon.com/png/128/2120/premium/2120967.png?token=exp=1657822380~hmac=b132a890d5b679e467095b78fb2a19f1" alt="" />
            <input type="search" />
            </div>
        </div>
    <Card />
    </main>
    <Footer />
  </div>
}
