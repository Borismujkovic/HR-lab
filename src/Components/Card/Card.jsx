import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Card.scss'
import { adminCtx } from '../../context';

export const Card = (props) => {
    const {candidateInfo} = useContext(adminCtx)
    const {theme} = useContext(adminCtx)
    

    

    return <div id={theme ? 'Card-light' : "Card-dark"}>
        <Link to={`/Info/${props.singleCandidate.id}`} className="info-link">
        <div className='card-wrap' onClick={() => candidateInfo(props.singleCandidate)}>
        <img  src={props.singleCandidate.images} alt="" />
        <h2>{props.singleCandidate.name}</h2>
        </div>
        </Link>
    </div>
}