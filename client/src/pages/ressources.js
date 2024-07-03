import React, { useEffect, useState } from 'react'
import { ModalRessource } from '../components/elements/modal-ressources'
import EmptyItems from '../components/blocks/empty-items'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { RessourcesItems } from '../components/elements/ressources-items'
import { DeleteRessource } from '../components/elements/modal-delete-ressource'
import { useAuth0 } from '@auth0/auth0-react'

export const Ressources = () => {
  const {id} = useParams()
  const {user} = useAuth0()
  const [ressources, setRessources] = useState([])
  const [role, setRole] = useState(false)
  
  useEffect(() => {
    axios.get(`http://localhost:9000/role`, {
      params: { userId: user?.sub, libraryId: id }
    }).then((res) => {
      setRole(res.data)
    })
  }, []); 

  useEffect(() => {
    axios.get(`http://localhost:9000/ressources`, {
      params: {id: id}
    }).then((res) => {
      setRessources(res.data)
    })
  }, []);

  const [formUpdate, setFormUpdate] = useState({})
  const [tex, setTex] = useState(false)
  const odUpdate = (tex, ressource) => {
    setTex(tex)
    setFormUpdate(ressource)
  }
  return (
    <div>
      {ressources.length == 0 && <EmptyItems src={'../assets/img/empty.png'}>
        {role && <button className="btn btn-primary my-3 bg-transparent text-body border border-color-dark-subtle" type="button" data-bs-target="#modal-ressource" data-bs-toggle="modal">Create new ressource</button>}
      </EmptyItems>}
      <ModalRessource callUpdate={tex} formUpdate={formUpdate} updateItems={(ressources) => setRessources(ressources)} />
      {/* {ressources.length > 0 && <DeleteRessource/>} */}
      {ressources.length > 0 && <RessourcesItems onUpdate={odUpdate} role={role} ressources={ressources} onDelete={(ressources) => setRessources(ressources)} />}      {/* <DeleteRessource /> */}
    </div>
  )
}
