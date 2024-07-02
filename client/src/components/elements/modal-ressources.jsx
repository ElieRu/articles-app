import React, { useEffect, useRef, useState } from 'react'
import Form from './form'
import Input from '../inputs/input'
import Selection from '../inputs/selection'
import Textarrea from '../inputs/textarea'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export const ModalRessource = ({onUpdate}) => {
    const {id} = useParams()
    const {user} = useAuth0()
    const gender = [
        {label: 'Select the book\'s gender', value: ''},
        {label: 'Fiction', value: 'Fiction'},
        {label: 'Non-Fiction', value: 'Non-Fiction'},
        {label: 'Romance', value: 'Romance'},
        {label: 'Mystery', value: 'Mystery'},
    ]

    const language = [
        {label: 'Select the book\'s language', value: ''},
        {label: 'English', value: 'English'},
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

    const [ressources, setRessources] = useState([])
    const [errMsg, setErrMsg] = useState({})

    const closeBtn = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault ()
        axios.post(`http://localhost:9000/ressources`, form).then((res) => {
            if (res.data.errors) {
                // console.log(res.data.errors)
                setErrMsg(res.data.errors)
            } else {
                setForm({
                    title: "",
                    author: "",
                    volume: "",
                    gender: "",
                    editor: "",
                    language: "",
                    resume: "",
                    book_cover: "",
                    url: ""
                })
                onUpdate(res.data)
                closeBtn.current.click()
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleClose = () => {
        setErrMsg('')
    }

  return (
    <>
        <div id="modal-ressource" className="modal fade" role="dialog" tabindex="-1">
            <div className="modal-dialog modal-lg modal-fullscreen-xl-down" role="document">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h4 className="modal-title">Create New Ressource</h4>
                        <button ref={closeBtn} onClick={handleClose} className="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <Form method="post" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className='my-2'>
                                        <Input label='Title' id={'title'} placeholder='Title' value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
                                        {errMsg.title && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.title.message}</span></div>}
                                    </div>
                                    <div className='my-2'>
                                        <Input label='Author' id={'author'} placeholder='Author' value={form.author} onChange={e => setForm({...form, author: e.target.value})} />
                                        {errMsg.author && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.author.message}</span></div>}
                                    </div>
                                    <div className='my-2'>
                                        <Input label='Volume' id={'volume'} placeholder='Volume (Optional)' type='number' min={1} step={1} value={form.volume} onChange={e => setForm({...form, volume: e.target.value})} />
                                        {errMsg.volume && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.volume.message}</span></div>}
                                    </div>
                                    <div className='my-2'>
                                        <Selection id={'gender'} label='Gender' items={gender} value={form.gender} onChange={e => setForm({...form, gender: e.target.value})} />
                                        {errMsg.gender && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.gender.message}</span></div>}
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className='my-2'>
                                        <Input label='Editor' id={'editor'} placeholder='Editor (Optional)' value={form.editor} onChange={e => setForm({...form, editor: e.target.value})} />
                                        {errMsg.editor && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.editor.message}</span></div>}
                                    </div>
                                    <div className='my-2'>
                                        <Selection label='Language' id={'language'} items={language} value={form.language} onChange={e => setForm({...form, language: e.target.value})} />
                                        {errMsg.language && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.language.message}</span></div>}
                                    </div>
                                    <div className='my-2'>
                                        <Input label='Book Cover (Optional)' id={'cover_book'} placeholder='Book Cover (Optional)' type='file' value={form.book_cover} onChange={e => setForm({...form, book_cover: e.target.value})} />
                                        {errMsg.cover_book && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.cover_book.message}</span></div>}
                                        </div>
                                    <div className='my-2'>
                                        <Input label='Url' id={'url'} placeholder='Url (Optional)' type='url' value={form.url} onChange={e => setForm({...form, url: e.target.value})} />
                                        {errMsg.url && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.url.message}</span></div>}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Textarrea id='resume' label='Resume' placeholder='Resume' value={form.resume} onChange={e => setForm({...form, resume: e.target.value})}></Textarrea>
                                {errMsg.resume && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.resume.message}</span></div>}
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
