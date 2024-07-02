import React, { useState } from 'react'
import SearchWithDropdown from '../inputs/search-article'
import { DeleteRessource } from './modal-delete-ressource'

export const RessourcesItems = ({role, ressources, onDelete}) => {
    const ressources_genders = [
        {label: "Select Gender", value: ""},
        {label: "Fiction", value: "Fiction"},
        {label: "Non-Fiction", value: "Non-Fiction"},
        {label: "Romance", value: "Romance"},
        {label: "Mystery", value: "Mystery"},
    ]
    const [search, setSearch] = useState('')
    const onFilter = () => {}

    const [ressourceId, setRressourceId] = useState('')
    const handleDelete = (id) => {
        setRressourceId(id)
    }

    return (<>
        <SearchWithDropdown types={ressources_genders} search={search} onChange={e => setSearch(e.target.value)} onFilter={onFilter} >
            {role && <button data-bs-target="#modal-ressource" data-bs-toggle="modal" className='btn btn-primary' style={{marginLeft: "10px", width: '46px',height: '46px',padding: '0px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
            </button>}
        </SearchWithDropdown>
        <div className="row gy-3">
            {ressources.map((ressource, i) => <div className="col-6 col-md-4 col-lg-3" key={i}>
                <div className="border rounded p-2">
                    <div className="row gy-2 flex-column">
                        <div className="col">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <div style={{marginBottom: '-2px'}} className='text-capitalize'><span style={{fontSize: '14px',fontWeight: 'bold'}}>{ressource.title}</span></div>
                                            <div><span style={{fontSize: '11px'}}>{ressource.gender}</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 d-flex justify-content-end">
                                    {role && <div className="dropdown">
                                        <button className="btn btn-primary btn-sm link-body-emphasis bg-transparent border-0" aria-expanded="false" data-bs-toggle="dropdown" type="button" style={{paddingRight: '10px',paddingLeft: '10px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-192 0 512 512" width="1em" height="1em" fill="currentColor">
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                        </svg>
                                        </button>
                                        <div className="dropdown-menu" style={{overflow: 'hidden'}}>
                                            <a className="dropdown-item" data-bs-target="#modal-ressource" data-bs-toggle="modal" style={{cursor: 'pointer'}}>Update</a>
                                            <a className="dropdown-item" onClick={() => handleDelete(ressource._id)} data-bs-target="#modal-delete-ressource" data-bs-toggle="modal" style={{cursor: 'pointer'}}>Delete</a>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className="col border-0">
                            <div className="border rounded border-0" style={{height: '200px',overflow: 'hidden'}}><img src="default-cover.webp" width="100%" height="100%" data-bs-target="#modal-overview-ressource" data-bs-toggle="modal" style={{cursor: 'pointer'}} /></div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
        <DeleteRessource onDelete={onDelete} ressourceId={ressourceId} />
    </>
    )
}
