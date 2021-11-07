import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css';
import { Link } from 'react-router-dom';

function AboutAuthor() {
    return (
        <>
        <Navbar/>
            <div className="about-wrapper">
                <h1>About Author</h1>
                <p>This app was developed by whauzan, a self-taught web developer and technical writer.</p>
                <Link to={`/`} className='btn'>Return to Home</Link>
            </div>
        </>
    )
}

export default AboutAuthor
