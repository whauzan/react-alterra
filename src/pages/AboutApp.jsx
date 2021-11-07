import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css';
import { Link } from 'react-router-dom';

function AboutApp() {
    return (
        <>
        <Navbar/>
            <div className="about-wrapper">
                <h1>About App</h1>
                <p>In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.</p>
                <Link to={`/`} className='btn'>Return to Home</Link>
            </div>
        </>
    )
}

export default AboutApp
