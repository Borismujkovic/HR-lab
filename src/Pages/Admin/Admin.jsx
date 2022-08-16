import React, { Component, useContext, useState } from 'react';
import './Admin.scss'
import { Header } from '../../Components/Header/Header'
import { ReportList } from '../../Components/ReportList/ReportList';
import { Modal } from '../../Components/Modal/Modal';
import {EditModal} from '../../Components/EditModal/EditModal'
import { Link } from 'react-router-dom';
import { adminCtx } from '../../context';

export const Admin = () => {
    const {reports} = useContext(adminCtx)
    const {admin} = useContext(adminCtx)
    const [search, setSearch] = useState('')
    const {modalOpen} = useContext(adminCtx)
    const [editModalOpen, setEditModalOpen] = useState(false)
    

    const openEditModal = () => {
        setEditModalOpen(!editModalOpen)
    }

    const searchCandidate = (event) => {
        setSearch(event.target.value)
    } 

    const filteredReports = reports.filter(f => 
        f.candidateName.toLowerCase().includes(search.toLowerCase())
        )

    return <div id="Admin">
    {editModalOpen && <EditModal openEditModal={openEditModal} />}
    {modalOpen && <Modal />}
    <Header />
    <div className='admin-search'>
        <div>
            <Link to="/admin/Admin"><button className='admin-btn'>Admin Page</button></Link>
            <Link to="/admin/NewReport"><button className='new-btn'>New Report</button></Link>
        </div>
            <div>
            <img className='search-icon' src="https://freesvg.org/storage/img/thumb/search_ideogram.png" alt="" />
            <input type="search" onChange={searchCandidate}/>
            </div>
    </div>
    <main>
        {filteredReports.map(e => {
            if(e.companyName == admin){
               return <ReportList singleReport={e} openEditModal={openEditModal}/>
            }
})}
    
    </main>
    </div>
}