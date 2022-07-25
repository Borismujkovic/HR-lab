import React, { useContext, useState } from 'react';
import './CreateNew.scss'
import { Link, useHistory } from 'react-router-dom';
import { adminCtx } from '../../context';

export const CreateNew = (props) => {
const {token} = useContext(adminCtx)
const {fetchData} = useContext(adminCtx)
const {admin} = useContext(adminCtx)
const {adminId} = useContext(adminCtx)
const {theme} = useContext(adminCtx)
const history = useHistory()
const [error, setError] = useState()


    const [body,setBody] = useState({
        candidateId: "",
        candidateName: "",
        companyId: adminId,
        companyName: admin,
        interviewDate:"",
        phase: "",
        status: "",
        note: ""
    }
    )


    const validateForm = () => {
        if(body.interviewDate && body.phase && body.status && body.note){
            postReport()
        } else{
            setError("Fulfill all required fields")
        }
    }

    const postReport = () => {
        fetch("http://localhost:3333/api/reports",{
            method: "POST",
            body: JSON.stringify({...body, candidateId: props.chosenCandidate.id, candidateName: props.chosenCandidate.name}),
            headers:{"content-type": "application/json",
            "Authorization" : `Bearer ${token}`}
        })
        .then(fetchData)
        .then(history.push("/Admin"))
    }


    return <div id='CreateNew'>
    <div className={theme ? "newReport-light" : "newReport-dark"}>
            <p>2</p>
            <h2>Create new report:</h2>
          </div>
          <div id="createNew">
            <div className='form'>
            <div className='wrapDropdown'>
            <label>
                 <span>Date:</span>
                <input type="date" placeholder="" className='date' onChange={(event) => {
                    setBody({...body, interviewDate : event.target.value})
                }}></input>
            </label>
            <label>
                 <span>Status:</span>
                <select  name="Status" onChange={(event) => {
                    setBody({...body, status : event.target.value})
                }}>
                    <option disabled selected value>---</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Passed">Passed</option>
                    <option value="Declined">Declined</option>
                </select>
            </label>
            <label>
                <span>Phase:</span>
                 <select name="Phase" onChange={(event) => {
                    setBody({...body, phase : event.target.value})
                }}>
                   <option disabled selected value>---</option>
                   <option value="Final">CV</option>
                    <option value="HR">HR</option>
                    <option value="Technical">Technical</option>
                    <option value="Final">Final</option>
                </select>
            </label>
            </div>
            <label className='textarea'>
               <span>Report:</span>
                <textarea className="report" type="text" onChange={(event) => {
                    setBody({...body, note : event.target.value})
                }}></textarea>
            </label>
              <button onClick={() => {
                validateForm()
                props.checkChosenCandidateInfo()
              }}>Submit</button>
            </div>
        </div>
        <h2 className='required'>{error}</h2>
    </div>
}