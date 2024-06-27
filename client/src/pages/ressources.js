import React from 'react'
import { ModalRessource } from '../components/elements/modal-ressources'
import EmptyItems from '../components/blocks/empty-items'

export const Ressources = () => {
  return (
    <div>
      <EmptyItems src={'../assets/img/empty.png'}>
        <button class="btn btn-primary my-3 bg-transparent text-body border border-color-dark-subtle" type="button" data-bs-target="#modal-ressource" data-bs-toggle="modal">Create new ressource</button>
      </EmptyItems>
      <ModalRessource />
    </div>
  )
}
