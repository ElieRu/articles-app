import { Link } from "react-router-dom";

export default function LibrariesItems({library}) {
    return <div className="mb-3">
            <div className="border rounded d-flex justify-content-between p-3 border">
                <div className="d-flex align-items-center">
                    <Link to={library._id} style={{marginRight: '15px'}}>
                        <img src="assets/img/library.jpg" style={{borderRadius: '100%'}} width="50px" height="50px" />
                    </Link>
                    <div>
                        <div><Link to={library._id}><span className="text-capitalize fs-4 fw-bold text-decoration-underline">{library.name}</span></Link></div>
                        <div style={{marginTop: '-10px'}}><span style={{fontSize: '13px'}}>{library.type} (30)</span></div>
                        <div></div>
                    </div>
                </div>
                {/* <div className="dropdown d-flex"> */}
                    {/* <button className="btn btn-primary bg-body-secondary border rounded" aria-expanded="false" data-bs-toggle="dropdown" type="button" style={{width: '50px', height: '50px',padding: '0px'}}><svg className="fs-4 text-dark-emphasis" xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                        <path d="M448 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32zm0 256c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 192c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM448 448c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z"></path>
                        </svg>
                    </button>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/">Update</Link>
                        <Link className="dropdown-item" to="/">Delete</Link>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
}