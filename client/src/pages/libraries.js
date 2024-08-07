import React, { useEffect, useRef, useState } from 'react'
import EmptyItems from '../components/blocks/empty-items'
import CreateLibrary from '../components/elements/modal-create-library'
import axios from 'axios';
import LibrariesItems from '../components/blocks/libraries-items';
import SearchWithDropdown from '../components/inputs/search-article';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../components/blocks/loading';

const Libraries = () => {
  const { user } = useAuth0()
  const [libraries, setLibraries] = useState([]);
  const [load, setLoad] = useState(true)
  const [showEmpt, setShowEmpt] = useState(false)
  const [showItems, setShowItems] = useState(false)
  
  useEffect(() => {
    axios.get(`http://localhost:9000/libraries`, {
      params: {
        all_libraries: true,
        userId: user?.sub}
      }).then((res) => {
      setTimeout(() => {
        setLoad(false)
        if (res.data.length > 0) {
          setShowItems(true)
          setLibraries(res.data)
        } else {
          setShowEmpt(true)
        }
      }, 1000);      
    })
  }, [user, setLibraries]);

  const updateItems = () => {
    axios.get(`http://localhost:9000/libraries`, {
      params: {
        all_libraries: true,
        userId: user?.sub}
      }).then((res) => {
        setLoad(false)
        if (res.data.length > 0) {
          setShowItems(true)
          setLibraries(res.data)
        } else {
          setShowEmpt(true)
        }
    })
  }
    
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
  
  const nextPage = (e) => {
    e.preventDefault();
    setLoad('inline-block')
    setTimeout(() => {
      alert("next load...")
    }, 1000);
  }

  let goBack = useNavigate(-1)

  return (<>
          {load && <Loading/>}          
          {showItems && <div>
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
                }).map((library, i) => (<LibrariesItems updateItems={updateItems} btnFollow={true} library={library} key={i}></LibrariesItems>))}
            </div>
          </div> }
          {showEmpt && <EmptyItems src={'/assets/img/empty-library.png'} msg={"You don't have any library."} >
            {/* <button disabled={isLoading ? true : false} ref={btnHideRef} data-bs-target="#create-library" data-bs-toggle="modal" style={{marginTop: '20px'}} className='btn btn-primary btn-sm'>Create a new library</button> */}
          </EmptyItems>}
      </>
    )
  }


  export default Libraries