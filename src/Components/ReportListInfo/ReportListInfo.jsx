import React, { Component, useContext, useState } from 'react';
import './ReportListInfo.scss'
import { Modal } from '../../Components/Modal/Modal';
import { adminCtx } from '../../context';



export const ReportListInfo = (props) => {
    const {toggleModal} = useContext(adminCtx)
    const {selectReport} = useContext(adminCtx)
    const {theme} = useContext(adminCtx)
 


    return <div id={theme ? 'ReportListInfo-light' : 'ReportListInfo-dark'}>
            <h3>{props.singleReport.companyName}</h3>
            <h3>{props.singleReport.interviewDate}</h3>
            <h3>{props.singleReport.status}</h3>
            <img onClick={() => {toggleModal(); selectReport(props.singleReport)} } className='img-modal' src="https://cp.cuyahogacounty.us/media/1832/form.png?crop=0,0.026831272691590618,0.080070650574035979,0.053239377882445364&cropmode=percentage&width=300&height=300&rnd=131837411850000000" alt="" />
    </div>
}