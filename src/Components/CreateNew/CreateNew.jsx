import React, { Component } from 'react';
import './CreateNew.scss'
import { Link } from 'react-router-dom';

export const CreateNew = (props) => {


    return <div id='CreateNew'>
    <div className="newReport">
            <p>2</p>
            <h2>Create new report:</h2>
          </div>
          <div id="createNew">
            <div className='form'>
            <div className='wrapDropdown'>
            <label>
                 <span>Date:</span>
                <input type="date" placeholder="" className='date'></input>
            </label>
            <label>
                 <span>Status:</span>
                <select  name="Status">
                    <option disabled hidden>Status</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Passed">Passed</option>
                    <option value="Declined">Declined</option>
                </select>
            </label>
            <label>
                <span>Phase:</span>
                 <select name="Phase">
                   <option disabled hidden>Phase</option>
                   <option value="Final">CV</option>
                    <option value="HR">HR</option>
                    <option value="Technical">Technical</option>
                    <option value="Final">Final</option>
                </select>
            </label>
            </div>
            <label className='textarea'>
               <span>Report:</span>
                <textarea className="report" type="text"></textarea>
            </label>
            <Link to="/Admin">  <button>Submit</button></Link>
            </div>
        </div>
    </div>
}