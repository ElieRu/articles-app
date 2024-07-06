import React, { useCallback, useEffect, useRef, useState } from 'react'
import Form from './form'
import Input from '../inputs/input'
import Selection from '../inputs/selection'
import Textarrea from '../inputs/textarea'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export const ModalResource = ({formUpdate, updateItems}) => {
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
        gender: "",
        language: "",
        resume: "",
        libraryId: id,
        userId: user?.sub
    })

    const [errMsg, setErrMsg] = useState({})
    const closeBtn = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault ()
        axios.post(`http://localhost:9000/resources`, form).then((res) => {
            if (res.data.errors) {
                setErrMsg(res.data.errors)
            } else {
                setForm({
                    title: "",
                    author: "",
                    gender: "",
                    language: "",
                    resume: ""
                })
                updateItems(res.data)
                closeBtn.current.click()
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    // const handleUpdate = (e) => {
    //     e.preventDefault()
    //     axios.put(`http://localhost:9000/resources/${formUpdate._id}`, form).then((res) => {
    //         if (res.data.errors) {
    //             setErrMsg(res.data.errors)
    //         } else {
    //             updateItems(res.data)
    //             closeBtn.current.click()
    //         }
    //         // Must valid the form...
    //     }).catch((err) => {})
    // }

    const handleClose = () => {
        setErrMsg('')
        setForm({
            title: "",
            author: "",
            gender: "",
            language: "",
            resume: "",
        })
    }

    return (
        <>
            <div id="modal-resource" className="modal fade" role="dialog" tabindex="-1">
                <div className="modal-dialog modal-md modal-fullscreen-sm-down" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h4 className="modal-title">Create New Resource</h4>
                            <button ref={closeBtn} onClick={handleClose} className="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <Form method="post" onSubmit={handleSubmit}>
                                <div className='my-2'>
                                    <Input label='Title' id={'title'} placeholder='Title' value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
                                    {errMsg.title && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.title.message}</span></div>}
                                </div>
                                <div className='my-2'>
                                    <Input label='Author' id={'author'} placeholder='Author' value={form.author} onChange={e => setForm({...form, author: e.target.value})} />
                                    {errMsg.author && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.author.message}</span></div>}
                                </div>
                                <div className='my-2'>
                                    <Selection id={'gender'} label='Gender' items={gender} value={form.gender} onChange={e => setForm({...form, gender: e.target.value})} />
                                    {errMsg.gender && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.gender.message}</span></div>}
                                </div>
                                <div className='my-2'>
                                    <Selection label='Language' id={'language'} items={language} value={form.language} onChange={e => setForm({...form, language: e.target.value})} />
                                    {errMsg.language && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.language.message}</span></div>}
                                </div>
                                <div className='my-2'>
                                    <Textarrea id='resume' label='Resume' placeholder='Resume' value={form.resume} onChange={e => setForm({...form, resume: e.target.value})}></Textarrea>
                                    {errMsg.resume && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.resume.message}</span></div>}
                                </div>                                
                                <div className="d-flex justify-content-start">
                                    <button className="btn btn-primary" type="submit">New Resource</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
