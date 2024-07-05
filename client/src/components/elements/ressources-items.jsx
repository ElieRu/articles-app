import React, { useState } from 'react'
import SearchWithDropdown from '../inputs/search-article'
import { DeleteRessource } from './modal-delete-ressource'
import { Link } from 'react-router-dom'

export const RessourcesItems = ({role, ressources, onFilter, selection, onDelete, onUpdate}) => {
    const ressources_genders = [
        {label: "Select Gender", value: ""},
        {label: "Fiction", value: "Fiction"},
        {label: "Non-Fiction", value: "Non-Fiction"},
        {label: "Romance", value: "Romance"},
        {label: "Mystery", value: "Mystery"},
    ]
    const [search, setSearch] = useState('')
    
    const [ressourceId, setRressourceId] = useState('')
    const handleDelete = (id) => {
        setRressourceId(id)
    }

    return (<>
        <SearchWithDropdown types={ressources_genders} search={search} onChange={e => setSearch(e.target.value)} onFilter={onFilter} >
            {role && <button onClick={() => onUpdate(false)} data-bs-target="#modal-ressource" data-bs-toggle="modal" className='btn btn-primary' style={{marginLeft: "10px", width: '46px',height: '46px',padding: '0px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                </svg>
            </button>}
        </SearchWithDropdown>
        <div className="row gy-3">
            {ressources.filter((ressource) => {
                return search.toLowerCase() === ''
                    ? ressource
                    : ressource.title.toLowerCase().includes(search);
            }).filter((ressource) => {
                return selection.toLowerCase() === ''
                    ? ressource
                    : ressource.gender.toLowerCase().includes(selection)
            }).map((ressource, i) => <div className="col-6 col-md-4 col-lg-3" key={i}>
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
                                    {role && <div>
                                        <button onClick={() => handleDelete(ressource._id)} data-bs-target="#modal-delete-ressource" data-bs-toggle="modal" className="btn btn-primary btn-sm bg-body border-0" type="button" style={{padding: '0px',width: '35px',height: '35px'}}>
                                            <svg class="text-body-emphasis" xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                            <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path>
                                            </svg>
                                        </button>
                                        {/* <button className="btn btn-primary btn-sm link-body-emphasis bg-transparent border-0" aria-expanded="false" data-bs-toggle="dropdown" type="button" style={{paddingRight: '10px',paddingLeft: '10px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-192 0 512 512" width="1em" height="1em" fill="currentColor">
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                        </svg>
                                        </button>
                                        <div className="dropdown-menu" style={{overflow: 'hidden'}}>
                                            <a className="dropdown-item" onClick={() => onUpdate(true, ressource)} data-bs-target="#modal-ressource" data-bs-toggle="modal" style={{cursor: 'pointer'}}>Update</a>
                                        </div> */}
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className="col border-0">
                            <div className="border rounded border-0" style={{height: '200px',overflow: 'hidden'}}>
                                <Link to={`ressource?ressourceId=${ressource._id}&title=${ressource.title}&author=${ressource.author}&volume=${ressource.volume}&gender=${ressource.gender}&editor=${ressource.editor}&language=${ressource.language}&url=${ressource.url}&resume=${ressource.resume}`}>
                                    <img src="../../assets/img/default-cover.webp" width="100%" height="100%" style={{cursor: 'pointer'}} />
                                </Link>
                            </div>
                                {/* data-bs-target="#modal-overview-ressource" data-bs-toggle="modal" */}
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
        <DeleteRessource onDelete={onDelete} ressourceId={ressourceId} />
    </>
    )
}
