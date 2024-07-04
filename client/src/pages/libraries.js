import React, { useEffect, useRef, useState } from 'react'
import EmptyItems from '../components/blocks/empty-items'
import CreateLibrary from '../components/elements/modal-create-library'
import axios from 'axios';
import LibrariesItems from '../components/blocks/libraries-items';
import SearchWithDropdown from '../components/inputs/search-article';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

export const Libraries = () => {
  const { user } = useAuth0()
  const [libraries, setLibraries] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:9000/libraries`, {
      params: {
        all_libraries: true,
        userId: user?.sub}
      })
    .then((res) => {
      setLibraries(res.data)
    })
  }, [user]);
    
  let libraries_types = [
    {label: "Get all", value: ''},
    {label: "Public Library", value: "Public Library"},
    {label: "Academic Library", value: "Academic Library"},
    {label: "School Library", value: "School Library"},
    {label: "Special Collection Library", value: "Special Collection Library"},
  ]

  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('')
  const onFilter = (value) => {
    setSelect(value)
  }

  const [load, setLoad] = useState('none')
  const nextPage = (e) => {
    e.preventDefault();
    setLoad('inline-block')
    setTimeout(() => {
      alert("next load...")
    }, 1000);
  }

  return (<div>
          {libraries.length > 0 ? 
          <div>
            <SearchWithDropdown types={libraries_types} search={search} onChange={e => setSearch(e.target.value)} onFilter={onFilter} >
            </SearchWithDropdown> 
          <div class="row gy-3">
            {libraries.filter((library) => {
              return search.toLowerCase() === ''
                ? library
                : library.name.toLowerCase().includes(search);
              }).filter((library) => {
                return select === ''
                  ? library
                  : library.type.includes(select);
              }).map((library, i) => (<LibrariesItems btnFollow={true} library={library} key={i}></LibrariesItems>))}
              
              {libraries.length && <div className='mt-5 d-flex justify-content-center'>
                <Link onClick={nextPage} className='btn btn-primary'>
                  <span>See more</span>
                  <span style={{marginLeft: '10px', display: load}} class="spinner-border spinner-border-sm" role="status"></span>
                </Link>
              </div>}

            </div>
          </div> : 
          <div>
            <EmptyItems src={'assets/img/empty-library.png'} msg={"You don't have any library."} >
              {/* <button disabled={isLoading ? true : false} ref={btnHideRef} data-bs-target="#create-library" data-bs-toggle="modal" style={{marginTop: '20px'}} className='btn btn-primary btn-sm'>Create a new library</button> */}
            </EmptyItems>
          </div>}
          {/* <CreateLibrary onUpdateItems={ (libraries) => setLibraries(libraries) } /> */}
      </div>
    )
  }
