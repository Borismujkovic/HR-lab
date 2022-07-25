import React, { useContext } from 'react';
import './ReportList.scss'
import { adminCtx } from '../../context';

export const ReportList = (props) => {
    const {toggleModal} = useContext(adminCtx)
    const {selectReport} = useContext(adminCtx)
    const {token} = useContext(adminCtx)
    const {fetchData} = useContext(adminCtx)
    const {theme} = useContext(adminCtx)


    const deleteReport = () => {
        fetch(`http://localhost:3333/api/reports/${props.singleReport.id}`, {
            method : "DELETE",
            headers : {
                "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
            }
        })
    .then(fetchData)
    }

    return <>
    <div id={theme ? 'ReportList-light' : 'ReportList-dark'}>
        <h2>{props.singleReport.candidateName}</h2>
        <h2>{props.singleReport.interviewDate}</h2>
        <div className='buttons'>
            <button className='details' onClick={() => {
                toggleModal();
                selectReport(props.singleReport);
                }}>Details</button>
            <button className='edit' onClick={() => {
                props.openEditModal();
                selectReport(props.singleReport);
                }}>Edit</button>
            <button className='delete' onClick={() => {
                deleteReport()
            }}>Delete</button>
        </div>
    </div>
    </>
}