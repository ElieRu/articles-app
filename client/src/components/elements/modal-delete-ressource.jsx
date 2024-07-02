import axios from 'axios'
import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'

export const DeleteRessource = ({ressourceId, onDelete}) => {
    const closeBtn = useRef(null)
    const {id} = useParams()

    const handleDelete = () => {
        axios.delete(`http://localhost:9000/ressources/${ressourceId}`, { params: {libraryId: id} })
        .then((res) => {
            closeBtn.current.click()
            onDelete(res.data)            
        })
    }
  return (
    <>
        <div id="modal-delete-ressource" className="modal fade" role="dialog" tabindex="-1">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h4 className="modal-title">Delete Ressource</h4>
                        <button ref={closeBtn} className="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <p>Would you like to delete this resource ?</p>
                    </div>
                    <div className="modal-footer border-0">
                        <button className="btn btn-light btn-sm bg-transparent border-1" type="button" data-bs-dismiss="modal">Close</button>
                        <button onClick={handleDelete} className="btn btn-primary btn-sm" type="button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
