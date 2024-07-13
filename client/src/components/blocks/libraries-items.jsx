import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";


export default function LibrariesItems({btnFollow, updateItems, library}) {
    const { isAuthenticated, user } = useAuth0();
    const [follower, setFollower] = useState({
        libraryId: "",
        user_picture: '',
        user_name: '',
        userId: ''
    })

    useEffect(() => {
        setFollower({
            libraryId: "",
            user_picture: user?.picture,
            user_name: user?.name,
            userId: user?.sub
        })
    }, [user]);

    const [reflesh, setReflesh] = useState(false)

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

    return <div className="col-12 col-md-6 col-lg-4">
        <div className="border rounded p-2">
            <div className="row gy-2 flex-column">
                <div className="col">
                    <div className="row">
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
                            <button disabled={library.following || reflesh ? true : false} onClick={() => newFollow(library._id)} className="btn btn-primary link-body-emphasis border-white-subtle border-light-subtle bg-transparent btn-sm" type="button">
                                <span className="d-flex align-items-center">{library.following ? 'Following' : 'Follow'}{reflesh && <span style={{marginLeft: '5px'}} className="spinner-border spinner-border-sm" role="status"></span>}</span>
                            </button>
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
