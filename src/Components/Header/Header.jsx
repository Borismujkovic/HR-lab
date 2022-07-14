import React, { Component } from 'react';
import './Header.scss'

export const Header = (props) => {


    return <div id='Header'>

        <img className='header-img' src="https://iconape.com/wp-content/files/qa/334838/png/334838.png" alt="" />
    
    <div className='header-btns'>
        <button className='theme'>Switch Theme</button>
        <button className='logout'>Logout</button>
    </div>
    </div>
}