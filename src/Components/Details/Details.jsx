import React, { useContext } from 'react';
import './Details.scss'
import { adminCtx } from '../../context';


export const Details = (props) => {
    const singleCandidate = useContext(adminCtx).singleCandidate

    return <div id='Details'>
    <div className='candidateInfo'>
                <div className='candidateDetails'>
                <h2><span>Full Name:</span> {singleCandidate.name}</h2>
                <h2><span>Date of Birth:</span> {singleCandidate.birthday}</h2>
                <h2><span>E-mail:</span> {singleCandidate.email}</h2>
                <h2><span>Education:</span> {singleCandidate.education}</h2>
                </div>
                <div>
                    <img className='detailsImg' src={singleCandidate.images} alt="" />
                </div>
            </div>
    </div>
}