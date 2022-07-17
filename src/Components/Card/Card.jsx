import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Card.scss'
import { adminCtx } from '../../context';

export const Card = (props) => {
    const candidateInfo = useContext(adminCtx).candidateInfo
    

    return <div id='Card'>
        <Link to={`/Info/${props.singleCandidate.id}`} className="info-link">
        <div className='card-wrap' onClick={() => candidateInfo(props.singleCandidate)}>
        <img  src={props.singleCandidate.images} alt="" />
        <h2>{props.singleCandidate.name}</h2>
        </div>
        </Link>
    </div>
}