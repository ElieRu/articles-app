export default function Header() {
    return <nav className="navbar navbar-expand-md sticky-top navbar-shrink py-3 navbar-light" id="mainNav">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-window-dock">
                                <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></path>
                                <path d="M14 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM2 14h12a1 1 0 0 0 1-1V5H1v8a1 1 0 0 0 1 1M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1z"></path>
                            </svg></span><span>Articles</span></a>
                            
                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/articles">Articles</a></li>
                            <li className="nav-item"><a className="nav-link" href="/profile">Profile</a></li>
                        </ul><a className="btn btn-primary btn-sm link-primary bg-transparent" role="button" href="/login">Sign up</a>
                    </div>
                </div>
            </nav>
}