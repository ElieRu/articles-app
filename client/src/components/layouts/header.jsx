
import { NavLink, Link, useNavigate, redirect } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import { useEffect, useState } from "react";

export default function Header() {
    
    const [myUser, setMyUser] = useState({});

    const { isAuthenticated, user } = useAuth0();
    // if (isAuthenticated) {
    //     useEffect(() => {
    //         setMyUser(user);
    //     }, []);
    // } 
    

    return <nav className="navbar navbar-expand-md sticky-top navbar-shrink py-3 navbar-light" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-window-dock">
                                <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></path>
                                <path d="M14 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM2 14h12a1 1 0 0 0 1-1V5H1v8a1 1 0 0 0 1 1M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1z"></path>
                            </svg></span><span>Articles</span></Link>
                            
                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/articles">Articles</NavLink></li>
                            { isAuthenticated ? <li className="nav-item"><NavLink className="nav-link" to="/profile">Profile</NavLink></li> : '' }
                            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                        </ul>
                        { isAuthenticated ? <LogoutButton/> : <LoginButton/> }
                        {/* <div className="dropdown no-arrow">
                            <a className="nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                                <span className="d-none d-lg-inline me-2 text-gray-600 small">{}</span>
                                <img className="border rounded-circle img-profile" src="" /></a>
                                <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                                    <a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i> Profile</a>
                                    <a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i> Settings</a>
                                    <a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i> Activity log</a>
                                    <div className="dropdown-divider">
                                </div>
                                    <a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i> Logout</a>
                                </div>
                        </div> */}
                    </div>
                </div>
            </nav>
}