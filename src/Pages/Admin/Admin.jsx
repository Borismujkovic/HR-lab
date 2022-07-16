import React, { Component, useContext, useState } from 'react';
import './Admin.scss'
import { Header } from '../../Components/Header/Header'
import { ReportList } from '../../Components/ReportList/ReportList';
import { Modal } from '../../Components/Modal/Modal';
import { Link } from 'react-router-dom';
import { adminCtx } from '../../context';

export const Admin = () => {
    const reports = useContext(adminCtx).reports
    const admin = useContext(adminCtx).admin
    const [search, setSearch] = useState('')
    const modalOpen = useContext(adminCtx).modalOpen
    

    const searchCandidate = (event) => {
        setSearch(event.target.value)
    } 

    const filteredReports = reports.filter(f => 
        f.candidateName.toLowerCase().includes(search.toLowerCase())
        )

    return <div id="Admin">
    {modalOpen && <Modal />}
    <Header />
    <div className='admin-search'>
        <div>
            <Link to="/Admin"><button className='admin-btn'>Admin Page</button></Link>
            <Link to="/NewReport"><button className='new-btn'>New Report</button></Link>
        </div>
            <div>
            <img className='search-icon' src="https://freesvg.org/storage/img/thumb/search_ideogram.png" alt="" />
            <input type="search" onChange={searchCandidate}/>
            </div>
    </div>
    <main>
        {filteredReports.map(e => {
            if(e.companyName == admin){
               return <ReportList singleReport={e}/>
            }
})}
    
    </main>
    </div>
}