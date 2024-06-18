import React, { useEffect, useState } from 'react'
import EmptyItems from '../components/blocks/empty-items'
import CreateLibrary from '../components/elements/modal-create-library'
import axios from 'axios';
import LibrariesItems from '../components/blocks/libraries-items';
import SearchWithDropdown from '../components/inputs/search-article';

export const Library = () => {
  const [libraries, setLibraries] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:9000/libraries`).then((res) => {
      setLibraries(res.data)
    })
  }, []);
  
  let libraries_types = [
    {label: "Library's Type", value: ''},
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

  return (
    <section className="py-5">
        <div className='container'>

          <SearchWithDropdown types={libraries_types} search={search} onChange={e => setSearch(e.target.value)} onFilter={onFilter} >
            <button data-bs-target="#create-library" data-bs-toggle="modal" className='btn btn-primary' style={{marginLeft: "10px", width: '46px',height: '46px',padding: '0px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
            </button>
          </SearchWithDropdown>
          
          {libraries.map((library, i) => (<LibrariesItems library={library} key={i}></LibrariesItems>))}
        </div>


        {!libraries.length > 0 && <EmptyItems src={'assets/img/empty-library.png'} msg={"You don't have any library."} >
            <button data-bs-target="#create-library" data-bs-toggle="modal" style={{marginTop: '20px'}} className='btn btn-primary btn-sm'>Create a new library</button>
        </EmptyItems>}
        <CreateLibrary libraries={(libraries) => setLibraries(libraries)} />
    </section>
  )
}
