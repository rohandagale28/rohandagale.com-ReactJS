import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div>
                    <NavLink to="/" className="nav-list">
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/about" className="nav-list">
                        About
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/project" className="nav-list">
                        Project
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/contact" className="nav-list">
                        Contact
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/techstack" className="nav-list">
                        Tech Stack
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/disa" className="nav-list" style={{ cursor: "not-allowed" }}>
                        Disabled
                    </NavLink>
                </div>
            </div>
        </>
    )
}
