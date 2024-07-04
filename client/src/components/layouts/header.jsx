
import { NavLink, Link, useNavigate, redirect } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Menu from "../elements/menu";
import DropdownUserInfos from "../elements/dropdown-user-infos";
import { useTheme } from "../../utils/ThemeContext";


export default function Header() {
    const { isAuthenticated, user } = useAuth0();
    
    function ThemeSwither () {
        const {toggleTheme} = useTheme()
        return <button className="btn btn-primary btn-sm" onClick={toggleTheme}>TM</button>
    }

    const {theme} = useTheme()
    return <nav className="navbar navbar-expand-md sticky-top navbar-shrink py-3 navbar-light" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-window-dock">
                                <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></path>
                                <path d="M14 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM2 14h12a1 1 0 0 0 1-1V5H1v8a1 1 0 0 0 1 1M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1z"></path>
                            </svg></span><span>Articles</span></Link>                            
                        <button data-bs-toggle="collapse" className="navbar-toggler d-none" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/libraries">Libraries</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                        </ul>
                        <DropdownUserInfos isAuthenticated={isAuthenticated} user={user} type={!isAuthenticated ? 'dropstart' : 'dropdown'} />
                    </div>

                    {/* <div> */}
                        {/* <ThemeSwither /> */}
                        {/* <button className="btn btn-primary bg-transparent border d-md-none rounded-0 border-0" type="button" data-bs-target="#offcanvas-menu" data-bs-toggle="offcanvas" style={{padding: '7px'}}>
                            <svg className="fs-1 text-body-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                <path d="M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z"></path>
                            </svg>
                        </button> */}
                    {/* </div> */}
                </div>
                <Menu isAuthenticated={isAuthenticated} user={user} />
            </nav>
}
