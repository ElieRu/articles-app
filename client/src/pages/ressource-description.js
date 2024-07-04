import React, { useEffect, useState } from 'react'
import Form from '../components/elements/form'
import Input from '../components/inputs/input'
import Selection from '../components/inputs/selection'
import Textarrea from '../components/inputs/textarea'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'

export const Ressource = () => {
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

  const {id} = useParams()
  const {user} = useAuth0()
  const [role, setRole] = useState(false)
  
  useEffect(() => {
    axios.get(`http://localhost:9000/role`, {
      params: { userId: user?.sub, libraryId: id }
    }).then((res) => {
      setRole(res.data)
    })
  }, [role, user, id]); 

  const [form, setForm] = useState({
    title: "",
    author: "",
    gender: "",
    language: "",
    resume: "",
    libraryId: id,
    userId: user?.sub
  })

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("cann me!")
  }

  return (
    <div>
      <div className="row">
          <div className="col-12 col-md-6">
              <div className="border rounded border-0" style={{overflow: 'hidden',height: '400px'}}><img src="default-cover.webp" width="100%" height="100%" /></div>
          </div>
          <div className="col-12 col-md-6">
              <div className="row">
                  <div className="col-12 col-sm-6">
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Title</span></div>
                          <div><span>Text</span></div>
                      </div>
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Author</span></div>
                          <div><span>Text</span></div>
                      </div>
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Published</span></div>
                          <div><span>Text</span></div>
                      </div>
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Volume</span></div>
                          <div><span>Text</span></div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-6">
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Gender</span></div>
                          <div><span>Text</span></div>
                      </div>
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Editor</span></div>
                          <div><span>Text</span></div>
                      </div>
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Language</span></div>
                          <div><span>Text</span></div>
                      </div>
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Url</span></div>
                          <div><span>Text</span></div>
                      </div>
                  </div>
                  <div className="col-12">
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Resume</span></div>
                          <div><span>Text</span></div>
                      </div>
                  </div>
                  <div className="col">
                      <div><button className="btn btn-primary btn-sm" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -64 640 640" width="1em" height="1em" fill="currentColor">
                                  <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path>
                              </svg></button><button className="btn btn-primary btn-sm" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                  <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z"></path>
                              </svg></button></div>
                  </div>
              </div>
          </div>
      </div>
      {role && <Form method="post" onSubmit={handleUpdate}>
        <div className="row">
            <div className="col-12 col-md-6">
                <div className='my-2'>
                    <Input label='Title' id={'title'} placeholder='Title' value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
                    {/* {errMsg.title && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.title.message}</span></div>} */}
                </div>
                <div className='my-2'>
                    <Input label='Author' id={'author'} placeholder='Author' value={form.author} onChange={e => setForm({...form, author: e.target.value})} />
                    {/* {errMsg.author && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.author.message}</span></div>} */}
                </div>
                <div className='my-2'>
                    <Input label='Volume' id={'volume'} placeholder='Volume (Optional)' type='number' min={1} step={1} value={form.volume} onChange={e => setForm({...form, volume: e.target.value})} />
                    {/* {errMsg.volume && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.volume.message}</span></div>} */}
                </div>
                <div className='my-2'>
                    <Selection id={'gender'} label='Gender' items={gender} value={form.gender} onChange={e => setForm({...form, gender: e.target.value})} />
                    {/* {errMsg.gender && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.gender.message}</span></div>} */}
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className='my-2'>
                    <Input label='Editor' id={'editor'} placeholder='Editor (Optional)' value={form.editor} onChange={e => setForm({...form, editor: e.target.value})} />
                    {/* {errMsg.editor && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.editor.message}</span></div>} */}
                </div>
                <div className='my-2'>
                    <Selection label='Language' id={'language'} items={language} value={form.language} onChange={e => setForm({...form, language: e.target.value})} />
                    {/* {errMsg.language && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.language.message}</span></div>} */}
                </div>
                <div className='my-2'>
                    <Input label='Book Cover (Optional)' id={'cover_book'} placeholder='Book Cover (Optional)' type='file' value={form.book_cover} onChange={e => setForm({...form, book_cover: e.target.value})} />
                    {/* {errMsg.cover_book && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.cover_book.message}</span></div>} */}
                </div>
                <div className='my-2'>
                    <Input label='Url' id={'url'} placeholder='Url (Optional)' type='url' value={form.url} onChange={e => setForm({...form, url: e.target.value})} />
                    {/* {errMsg.url && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.url.message}</span></div>} */}
                </div>
            </div>
        </div>
        <div>
            <Textarrea id='resume' label='Resume' placeholder='Resume' value={form.resume} onChange={e => setForm({...form, resume: e.target.value})}></Textarrea>
            {/* {errMsg.resume && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.resume.message}</span></div>} */}
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" type="submit">Update</button>
        </div>
      </Form>}
    </div>
  )
}
