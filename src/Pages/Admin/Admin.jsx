import React, { Component } from 'react';
import './Admin.scss'
import { Header } from '../../Components/Header/Header'
import { ReportList } from '../../Components/ReportList/ReportList';
import { Modal } from '../../Components/Modal/Modal';

export const Admin = () => {



    return <>
    <h1>AdminPage</h1>
    <Header />
    <ReportList />
    <Modal />
    </>
}