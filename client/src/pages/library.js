import React, { useEffect, useState } from 'react'
import EmptyItems from '../components/blocks/empty-items'
import CreateLibrary from '../components/elements/modal-create-library'
import axios from 'axios';

export const Library = () => {
  const [libraries, setLibraries] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:9000/libraries`).then((res) => {
      setLibraries(res.data)
    })
  }, []);
  
  // const getLibraries = () => {}

  return (
    <section className="py-5">
        <ul>
          {libraries.map((library, i) => (<li key={i}>{library.name}</li>))}
        </ul>
        {!libraries.length > 0 && <EmptyItems src={'assets/img/empty-library.png'} msg={"You don't have any library."} >
            <button data-bs-target="#create-library" data-bs-toggle="modal" style={{marginTop: '20px'}} className='btn btn-primary btn-sm'>Create a new library</button>
        </EmptyItems>}
        <CreateLibrary libraries={(libraries) => setLibraries(libraries)} />
    </section>
  )
}
