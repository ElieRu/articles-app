import React from 'react'

export const DeleteRessource = () => {
  return (
    <>
    <div id="modal-delete-ressource" classname="modal fade" role="dialog" tabindex="-1">
        <div classname="modal-dialog" role="document">
            <div classname="modal-content">
                <div classname="modal-header border-0">
                    <h4 classname="modal-title">Delete</h4>
                </div>
                <div classname="modal-body">
                    <p>Would you like to delete this ressource ?</p>
                </div>
                <div classname="modal-footer border-0">
                    <button classname="btn btn-light btn-sm bg-transparent border-1" type="button" data-bs-dismiss="modal">Close</button>
                    <button classname="btn btn-primary btn-sm" type="button">Delete</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
