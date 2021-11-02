import React from 'react'
import { Link } from "react-router-dom";
import profile from '../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'

export default function HomeBody() {
    return (
        <section className="project">
            <div className="container">
                <div className="container-fluid bg"></div>
                <div className="row vh-100 justify-content-center text-center align-items-center">
                    <div className="col-lg-4 img">
                        <img src={profile} width={355} alt="" className="img-circle"/>
                    </div>
                    <div className="col-lg-6 text">
                        <div className="content mb-5">
                            <h4>Hi, my name is</h4>
                            <h1>Anne Sullivan</h1>
                            <h2>I build things for the web</h2>
                            <button className="btn btn-primary mt-3">
                                <Link
                                    to="/contact_us"
                                    target="_blank"
                                    href="contact_us.html"
                                >
                                    Get In Touch
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}