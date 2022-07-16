import React, { useContext } from 'react';
import './Info.scss'
import { Header } from '../../Components/Header/Header'
import {Details} from '../../Components/Details/Details'
import { Modal } from '../../Components/Modal/Modal';
import {Footer} from '../../Components/Footer/Footer'
import {ReportListInfo} from '../../Components/ReportListInfo/ReportListInfo'
import { adminCtx } from '../../context';



export const Info = (props) => {

    const reports = useContext(adminCtx).reports
    const singleCandidate = useContext(adminCtx).singleCandidate
    const modalOpen = useContext(adminCtx).modalOpen



    return <div id='Info'>
    {modalOpen && <Modal />}
    <Header />
    <Details />
    {reports.map(e => {
        if(e.candidateName === singleCandidate.name){
            return <ReportListInfo singleReport={e}/>
        }
    })}
    <Footer />
    </div>
}