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
            </div>
        </div>
}