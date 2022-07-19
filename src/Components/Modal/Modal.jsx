import React, { useContext } from 'react';
import './Modal.scss'
import { adminCtx } from '../../context';

export const Modal = (props) => {
     const {toggleModal} = useContext(adminCtx)
     const {modalData} = useContext(adminCtx)
     const {theme} = useContext(adminCtx)


    return <div id={theme ? 'Modal-light' : 'Modal-dark'}>
    <div className='modal-content'>
                <button className='closeBtn' onClick={() => toggleModal()}>X</button>
                <div className='left'>
                   <img src="https://icon-library.com/images/profile-icon-white/profile-icon-white-3.jpg" alt="" className='userLogo'/>
                   <div className='personalInfo'>
                        <h2>{modalData.candidateName}</h2>
                   </div>
                </div>
                <div className='right'>
                    <div className='reportInfo'>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/2891/2891415.png" alt="" className="logo" />
                            <h4>{modalData.companyName}</h4>
                       </div>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/2693/2693507.png" alt="" className="logo" />
                            <h4>{modalData.interviewDate}</h4>
                       </div>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/4295/4295910.png" alt="" className="logo" />
                            <h4>{modalData.status}</h4>
                       </div>
                       <div className='reportInfoItem'>
                            <img src="https://cdn-icons-png.flaticon.com/512/5698/5698496.png" alt="" className="logo" />
                            <h4>{modalData.phase}</h4>
                       </div>
                    </div>
                    <div className='report'>
                        <p>{modalData.note}
                        </p>
                    </div>
                </div>
            </div>
    </div>
}