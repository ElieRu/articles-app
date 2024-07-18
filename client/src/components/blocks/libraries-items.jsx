import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";


export default function LibrariesItems({btnFollow, deleteId, updateItems, library}) {
    const { isAuthenticated, user } = useAuth0();
    const [follower, setFollower] = useState({
        libraryId: "",
        user_picture: '',
        user_name: '',
        user_email: '',
        userId: ''
    })

    useEffect(() => {
        setFollower({
            libraryId: "",
            user_picture: user?.picture,
            user_name: user?.name,
            user_email: user?.email,
            userId: user?.sub
        })
    }, [user]);

    const [reflesh, setReflesh] = useState(false);

    const { loginWithRedirect } = useAuth0();
    const redirectLogin = () => {
        loginWithRedirect()
    }

    const newFollow = (libraryId) => {
        follower.libraryId = libraryId
        setReflesh(true)
        axios.post(`http://localhost:9000/followers`, follower).then((res) => {
            if (res.data) {
                setTimeout(() => {
                    updateItems()
                    setReflesh(false)
                }, 1000);
            } else {
                setReflesh(false)
            }
        })
    }

    const getLibraryId = (id) => {
        deleteId(id)
    }

    return <div className="col-12 col-md-6 col-lg-4">
        <div className="border rounded p-2">
            <div className="row gy-2 flex-column">
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <div className="d-flex align-items-center">
                                <Link to={`/libraries/${library._id}`} style={{marginRight: '10px'}}>
                                <img src={library.logo} className="rounded-circle border-0" width="50px" height="50px" /></Link>
                                <div>
                                    <div style={{marginBottom: '-10px'}}><span className="text-capitalize" style={{fontSize: '14px', fontWeight: 'bold'}}>{library.name.length > 12 ? `${library.name.slice(0,12)}...` : library.name}</span></div>
                                    <div><span style={{fontSize: '11px'}}>{library.type.length > 15 ? `${library.type.slice(0,15)}...` : library.type }</span></div>
                                </div>
                            </div>
                        </div>
                        {btnFollow && <div className="col-4 d-flex justify-content-end">
                            <button disabled={library.following || reflesh ? true : false} onClick={isAuthenticated ? () => newFollow(library._id) : () => redirectLogin() } className="btn btn-primary link-body-emphasis border-white-subtle border-light-subtle bg-transparent btn-sm" type="button">
                                <span className="d-flex align-items-center">{library.following ? 'Following' : 'Follow'}{reflesh && <span style={{marginLeft: '5px'}} className="spinner-border spinner-border-sm" role="status"></span>}</span>
                            </button>
                        </div>}
                        {!btnFollow && <div className="col-4 d-flex justify-content-end">
                            <div class="dropdown">
                                <button class="btn btn-primary btn-sm link-body-emphasis bg-transparent border-0" aria-expanded="false" data-bs-toggle="dropdown" type="button" style={{paddingRight: '10px',paddingLeft: '10px'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="-192 0 512 512" width="1em" height="1em" fill="currentColor">
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                </svg></button>
                                <div class="dropdown-menu" style={{overflow: 'hidden'}}>
                                    <a class="dropdown-item" style={{cursor: 'pointer'}} data-bs-target="#create-library" data-bs-toggle="modal">Update</a>
                                    <a class="dropdown-item" style={{cursor: 'pointer'}} onClick={() => getLibraryId(library._id)} data-bs-target="#modal-delete-library" data-bs-toggle="modal">Delete</a>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="col">
                    <div className="bg-primary-subtle border rounded border-0" style={{position: 'relative', height: '150px', overflow: 'hidden'}}>
                        {/* <img src={library.background} width="100%" height="100%" /> */}
                        <div style={{position: 'absolute', bottom: '20px', right: '25px'}}>
                            <span style={{fontSize: '11px'}}>{library.followers.length} Follower{library.followers.length > 1 ? 's' : ''}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
