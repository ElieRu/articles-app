import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const ProfileLibrary = ({library}) => {
  return (
    <div className="bg-primary-subtle border rounded border-0 d-flex p-3 mb-4" style={{height: '300px'}}>
        <div className="row g-0 flex-column" style={{width: '100%'}}>
            <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <label className="form-label" style={{marginRight: '10px',cursor: 'pointer'}} htmlFor="profile-img">
                        <img id="profile-img" className="rounded-circle border-0" src={`../../${library.logo}`} width="50px" height="50px" />
                    </label>
                    <div>
                        <div style={{marginBottom: '-5px'}}><span className='text-capitalize' style={{fontSize: '14px',fontWeight: 'bold'}}>{library.name}</span></div><span style={{fontSize: '11px'}}>{library.type}</span>
                    </div><input id="profile-img" type="file" style={{display: 'none'}} accept="image/*" required />
                </div>
                <div><label className="form-label text-light bg-primary border rounded border-0 d-flex justify-content-center align-items-center" style={{width: '35px',height: '35px',margin: '0px',cursor: 'pointer'}} htmlFor="background-img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                            <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                        </svg></label><input id="background-img" type="file" style={{display: 'none'}} accept="image/*" required /></div>
            </div>
            <div className="col d-flex justify-content-center align-items-end">
                <div style={{width: '100%'}}>
                    <div className="row g-0 d-flex justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="row">
                                <div className="col-4 d-flex justify-content-center" style={{paddingRight: '0px',paddingLeft: '0px'}}>
                                    <NavLink to={'resources'} className={({isActive}) => isActive ? "btn btn-primary btn-sm" : "btn btn-primary btn-sm fw-normal link-body-emphasis bg-transparent border-0"} type="button" style={{width: '100%',paddingRight: '0px',paddingLeft: '0px'}}>Resources</NavLink></div>
                                <div className="col-4 d-flex justify-content-center" style={{paddingRight: '0px',paddingLeft: '0px'}}>
                                    <NavLink to={'followers'} className={({isActive}) => isActive ? "btn btn-primary btn-sm" : "btn btn-primary btn-sm fw-normal link-body-emphasis bg-transparent border-0"} type="button" style={{width: '100%',paddingRight: '0px',paddingLeft: '0px'}}>Followers</NavLink></div>
                                <div className="col-4 d-flex justify-content-center" style={{paddingRight: '0px',paddingLeft: '0px'}}>
                                    <NavLink to={'about'} className={({isActive}) => isActive ? "btn btn-primary btn-sm" : "btn btn-primary btn-sm fw-normal link-body-emphasis bg-transparent border-0"} type="button" style={{width: '100%',paddingRight: '0px',paddingLeft: '0px'}}>About</NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
