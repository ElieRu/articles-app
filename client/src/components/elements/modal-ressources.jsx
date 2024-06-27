import React from 'react'
import Form from './form'
import Input from '../inputs/input'
import Selection from '../inputs/selection'
import Textarrea from '../inputs/textarea'

export const ModalRessource = () => {
  return (
    <>
    <div id="modal-ressource" className="modal fade" role="dialog" tabindex="-1">
    <div className="modal-dialog modal-lg modal-fullscreen-sm-down" role="document">
        <div className="modal-content">
            <div className="modal-header border-0">
                <h4 className="modal-title">Create New Ressource</h4><button className="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
                <Form method="post">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className='my-2'>
                                <Input label='Title' placeholder='Title' />
                            </div>
                            <div className='my-2'>
                                <Input label='Author' placeholder='Author' />
                            </div>
                            <div className='my-2'>
                                <Input label='Volume' placeholder='Volume' />
                            </div>
                            <div className='my-2'>
                                <Selection label='Gender' items={[]} />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className='my-2'>
                                <Input label='Editor' placeholder='Editor' />
                            </div>
                            <div className='my-2'>
                                <Selection label='Language' items={[]} />
                            </div>
                            <div className='my-2'>
                                <Input label='Book Cover' placeholder='Book Cover' />
                            </div>
                            <div className='my-2'>
                                <Input label='Url' placeholder='Url' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Textarrea label='Resume' placeholder='Resume'></Textarrea>
                    </div>
                    <div className="d-flex justify-content-center"><button className="btn btn-primary" type="button">Submit</button></div>
                </Form>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
