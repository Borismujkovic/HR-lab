import React, { Component } from 'react';
import './Info.scss'
import { Header } from '../../Components/Header/Header'
import {Details} from '../../Components/Details/Details'
import { Modal } from '../../Components/Modal/Modal';
import {Footer} from '../../Components/Footer/Footer'



export const Info = (props) => {


    return <>
    <h1>Info</h1>
    <Header />
    <Details />
    <Modal />
    <Footer />
    </>
}