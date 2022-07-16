import React, { useContext } from 'react';
import './ReportList.scss'
import { adminCtx } from '../../context';

export const ReportList = (props) => {
    const toggleModal = useContext(adminCtx).toggleModal
    const selectReport = useContext(adminCtx).selectReport

    return <>
    <div id='ReportList'>
        <h2>{props.singleReport.candidateName}</h2>
        <h2>{props.singleReport.interviewDate}</h2>
        <div className='buttons'>
            <button className='details' onClick={() => {
                toggleModal();
                selectReport(props.singleReport);
                }}>Details</button>
            <button className='edit'>Edit</button>
            <button className='delete'>Delete</button>
        </div>
    </div>
    </>
}