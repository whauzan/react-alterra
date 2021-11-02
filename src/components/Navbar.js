import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/img/logo-ALTA@2x.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow-sm">
            <div className="container">
                <a className="navbar-brand d-flex" href="#">
                    <img src={logo} width={100} alt="Sample Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto text-center">
                        <Link 
                            to="/"
                            className="nav-link active"
                            aria-current="page"
                            href="index.html"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/"
                            className="nav-link"
                            href="index.html"
                        >
                            About
                        </Link>
                        <Link 
                            to="/"
                            className="nav-link"
                            href="index.html"
                        >
                            Experience
                        </Link>
                        <Link 
                            to="/contact_us"
                            className="nav-link"
                            target="_blank"
                            href="contact_us.html"
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}