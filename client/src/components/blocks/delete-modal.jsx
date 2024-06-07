

export default function DeleteModal ({onDelete}) {

    return <div id="delete-modal" className="modal fade" role="dialog" tabindex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Delete</h4><button className="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <p>Would you like to delete this article?</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-light btn-sm bg-transparent border-1" type="button" data-bs-dismiss="modal">Close</button>
                            <button data-bs-target='#delete-modal' data-bs-toggle='modal' onClick={onDelete} className="btn btn-primary btn-sm" type="button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
}