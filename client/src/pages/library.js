import React from 'react'
import EmptyItems from '../components/blocks/empty-items'
import CreateLibrary from '../components/elements/modal-create-library'

export const Library = () => {
  return (
    <section className="py-5">
        <CreateLibrary />
        <EmptyItems src={'assets/img/empty-library.png'} msg={"You don't have any library."} >
            <button data-bs-target="#create-library" data-bs-toggle="modal" style={{marginTop: '20px'}} className='btn btn-primary btn-sm'>Create a new library</button>
        </EmptyItems>        
    </section>
  )
}
