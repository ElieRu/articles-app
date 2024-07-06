import { Link } from "react-router-dom";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DropdownUserInfos () {
  const {isAuthenticated, user} = useAuth0()
  // Must delete the duplication of this function...
  const [libraries, setLibraries] = useState([])
  useEffect(() => {
      axios.get(`http://localhost:9000/libraries`, {
        params: {userId: user?.sub}
      }).then((res) => {
        setLibraries(res.data)
      })
  }, [user]);

    return <div class="dropdown d-none d-md-block">
    <a
      class="link-body-emphasis d-flex align-items-center text-decoration-none"
      aria-expanded="false"
      data-bs-toggle="dropdown"
      role="button"
    >
      <img
        style={{ width: "35px", marginRight: "10px" }}
        className="border rounded-circle img-profile"
        src={isAuthenticated ? user.picture : "assets/img/profile.png"}
      />
      <div>
        <div><span style={{fontSize: '13px'}}>{isAuthenticated ? user.name : 'Not connected' }</span></div>
        {isAuthenticated && <div style={{marginTop: '-10px'}}><span style={{fontSize: '11px'}}>Library</span></div> }
      </div>
    </a>
    <div style={{overflow: 'hidden'}} class="dropdown-menu shadow text-small"
      // data-popper-placement="top-start"
    >
      {isAuthenticated && <Link to={'profile'} class="dropdown-item" >Profile</Link> }
      {isAuthenticated && <Link to={'my-libraries'} class="dropdown-item" >My libraries</Link>}
      {isAuthenticated && <Link to={'articles'} class="dropdown-item" >My articles</Link> }
      {isAuthenticated && <Link to={'settings'} class="dropdown-item" >Settings</Link> }
      {isAuthenticated && <div class="dropdown-divider"></div> }
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  </div>
}