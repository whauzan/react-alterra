import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [dropAbout, setDropAbout] = useState(false);
    const showDropAbout = () => setDropAbout(!dropAbout);

    return (
        <>
            <div className="menu">
                <GiHamburgerMenu onClick={showSidebar}/>
            </div>
            <div className={sidebar ? 'navside active' : 'navside'}>
                <div className="menu white">
                    <AiOutlineClose onClick={showSidebar}/>
                </div>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={``} onClick={showDropAbout}>About
                            <div className={dropAbout ? 'dropAbout active' : 'dropAbout'}>
                                <ul>
                                    <li>
                                        <Link to={`/about-app`}>About App</Link>
                                    </li>
                                    <li>
                                        <Link to={`/about-author`}>About Author</Link>
                                    </li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
        
    )
}

export default Navbar
