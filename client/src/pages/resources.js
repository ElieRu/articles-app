import React, { useEffect, useState } from 'react'
import { ModalResource } from '../components/elements/modal-resources'
import EmptyItems from '../components/blocks/empty-items'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ResourcesItems } from '../components/elements/resources-items'
import { DeleteResource } from '../components/elements/modal-delete-resource'
import { useAuth0 } from '@auth0/auth0-react'

export const Resources = () => {
  const {id} = useParams()
  const {user} = useAuth0()
  const [resources, setResources] = useState([])
  const [role, setRole] = useState(false)
  
  useEffect(() => {
    axios.get(`http://localhost:9000/role`, {
      params: { userId: user?.sub, libraryId: id }
    }).then((res) => {
      setRole(res.data)
    })
  }, [user, id]); 

  useEffect(() => {
    axios.get(`http://localhost:9000/resources`, {
      params: {id: id}
    }).then((res) => {
      setResources(res.data)
    })
  }, [id]);

  const [formUpdate, setFormUpdate] = useState({})
  const [switchBtn, setSwitchBtn] = useState(false)

  const onUpdate = (get_switch, resource) => {
    setSwitchBtn(get_switch)
    setFormUpdate(resource)
  }

  const [selection, setSelection] = useState('')
  const onFilter = (value) => {
    setSelection(value)
  }

  let goBack = useNavigate(-1)

  return (
    <div>
      {resources.length == 0 && <EmptyItems src={'/assets/img/empty.png'}>
        {role && <button className="btn btn-primary my-3 bg-transparent text-body border border-color-dark-subtle" type="button" data-bs-target="#modal-resource" data-bs-toggle="modal">Create new resource</button>}
        {!role && <button style={{marginTop: '10px'}} className='btn btn-body border' onClick={() => goBack(-1)}>Return back</button>}
      </EmptyItems>}
      <ModalResource switchBtn={switchBtn} formUpdate={formUpdate} updateItems={(resources) => setResources(resources)} />
      {resources.length > 0 && <ResourcesItems selection={selection} onFilter={onFilter} onUpdate={onUpdate} role={role} resources={resources} onDelete={(resources) => setResources(resources)} />}      {/* <DeleteResource /> */}
    </div>
  )
}
