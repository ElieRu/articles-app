import { Link } from "react-router-dom";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";

export default function DropdownUserInfos ({isAuthenticated, user, type}) {
    return <div class={type}>
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
        {isAuthenticated && <div><span style={{fontSize: '13px'}}>{user.name}</span></div> }
        {isAuthenticated && <div style={{marginTop: '-10px'}}><span style={{fontSize: '11px'}}>Library</span></div> }
      </div>
    </a>
    <div
        style={{overflow: 'hidden'}}
      class="dropdown-menu shadow text-small"
      data-popper-placement="top-start"
    >
      {isAuthenticated && <Link to={'profile'} class="dropdown-item">Profile</Link> }
      {isAuthenticated && <Link to={'library'} class="dropdown-item" href="#">Library</Link> }
      {isAuthenticated && <Link to={'settings'} class="dropdown-item" href="#">Settings</Link> }
      {isAuthenticated && <div class="dropdown-divider"></div> }
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  </div>
}