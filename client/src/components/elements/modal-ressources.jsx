import React, { useEffect, useState } from 'react'
import Form from './form'
import Input from '../inputs/input'
import Selection from '../inputs/selection'
import Textarrea from '../inputs/textarea'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export const ModalRessource = () => {
    const {id} = useParams()
    const {user} = useAuth0()
    const gender = [
        {label: 'Select the book\'s gender', value: ''},
        {label: 'value 1', value: 'value 1'},
        {label: 'value 2', value: 'value 2'},
    ]

    const language = [
        {label: 'Select the book\'s langauge', value: ''},
        {label: 'Egnlish', value: 'Egnlish'},
        {label: 'French', value: 'French'},
        {label: 'Other', value: 'Other'},
    ]

    const [form, setForm] = useState({
        title: "",
        author: "",
        volume: "",
        gender: "",
        editor: "",
        language: "",
        resume: "",
        book_cover: "",
        url: "",
        libraryId: id,
        userId: user?.sub
    })

    const handleSubmit = (e) => {
        e.preventDefault ()
        // axios.post(`http://localhost/ressources`, form).then((res) => {
            
        // })
    }
  return (
    <>
    <div id="modal-ressource" className="modal fade" role="dialog" tabindex="-1">
        <div className="modal-dialog modal-lg modal-fullscreen-xl-down" role="document">
            <div className="modal-content">
                <div className="modal-header border-0">
                    <h4 className="modal-title">Create New Ressource</h4><button className="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <Form method="post" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className='my-2'>
                                    <Input label='Title' id={'title'} placeholder='Title' value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
                                </div>
                                <div className='my-2'>
                                    <Input label='Author' id={'author'} placeholder='Author' value={form.author} onChange={e => setForm({...form, author: e.target.value})} />
                                </div>
                                <div className='my-2'>
                                    <Input label='Volume' id={'volume'} placeholder='Volume' type='number' min={1} value={form.volume} onChange={e => setForm({...form, volume: e.target.value})} />
                                </div>
                                <div className='my-2'>
                                    <Selection id={'gender'} label='Gender' items={gender} value={form.gender} onChange={e => setForm({...form, gender: e.target.value})} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className='my-2'>
                                    <Input label='Editor' id={'editor'} placeholder='Editor (Optional)' value={form.editor} onChange={e => setForm({...form, editor: e.target.value})} />
                                </div>
                                <div className='my-2'>
                                    <Selection label='Language' id={'language'} items={language} value={form.language} onChange={e => setForm({...form, language: e.target.value})} />
                                </div>
                                <div className='my-2'>
                                    <Input label='Book Cover' id={'cover_book'} placeholder='Book Cover (Optional)' type='file' value={form.book_cover} onChange={e => setForm({...form, book_cover: e.target.value})} />
                                </div>
                                <div className='my-2'>
                                    <Input label='Url' id={'url'} placeholder='Url (Optional)' type='url' value={form.url} onChange={e => setForm({...form, url: e.target.value})} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Textarrea id='resume' label='Resume' placeholder='Resume' value={form.resume} onChange={e => setForm({...form, resume: e.target.value})}></Textarrea>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
