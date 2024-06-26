import { Link } from "react-router-dom";

export default function LibrariesItems({btnFollow, library}) {

    const newFollow = () => {
        alert("add")
    }

    return <div className="col-12 col-md-6 col-lg-4">
        <div className="border rounded p-2">
            <div className="row gy-2 flex-column">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex align-items-center">
                                <Link to={library._id} style={{marginRight: '10px'}}>
                                <img src={library.logo} className="rounded-circle border-0" width="50px" height="50px" /></Link>
                                <div>
                                    <div style={{marginBottom: '-10px'}}><span className="text-capitalize" style={{fontSize: '14px', fontWeight: 'bold'}}>{library.name.length > 12 ? `${library.name.slice(0,12)}...` : library.name}</span></div>
                                    <div><span style={{fontSize: '11px'}}>{library.type.length > 15 ? `${library.type.slice(0,15)}...` : library.type }</span></div>
                                </div>
                            </div>
                        </div>
                        {btnFollow && <div className="col d-flex justify-content-end">
                            <button onClick={newFollow} className="btn btn-primary link-body-emphasis border-white-subtle border-light-subtle bg-transparent btn-sm" type="button">Follow</button>
                        </div>}
                    </div>
                </div>
                <div className="col">
                    <div className="bg-primary-subtle border rounded border-0" style={{height: '150px', overflow: 'hidden'}}>
                        {/* <img src={library.background} width="100%" height="100%" /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
}
