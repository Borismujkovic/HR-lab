import React, { useContext, useState } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
import { adminCtx } from '../../context';


export const Header = (props) => {
const  toggleTheme  = useContext(adminCtx).toggleTheme

    return <div id='Header'>

        <Link to="/SinglePage"><img className='header-img' src="https://iconape.com/wp-content/files/qa/334838/png/334838.png" alt="" /></Link>
    
    <div className='header-btns'>
        <button className='theme' onClick={toggleTheme}>Switch Theme</button>
        <button className='logout'>Logout</button>
    </div>
    </div>
}