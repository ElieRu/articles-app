import React, { useEffect, useState } from 'react'
import Form from '../components/elements/form'
import Input from '../components/inputs/input'
import Selection from '../components/inputs/selection'
import Textarrea from '../components/inputs/textarea'
import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'

export const Resource = () => {
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
  const {isLoading, user} = useAuth0()
  const [role, setRole] = useState(false)
  const [query] = useSearchParams()
  
  useEffect(() => {
    axios.get(`http://localhost:9000/role`, {
      params: { userId: user?.sub, libraryId: id }
    }).then((res) => {
      setRole(res.data)
    })
  }, [role, user, id]); 

  const [form, setForm] = useState({
    title: query.get('title'),
    author: query.get('author'),
    volume: query.get('volume') == 'undefined' ? '' : parseInt(query.get('volume')),
    gender: query.get('gender'),
    editor: query.get('editor') == 'undefined' ? '' : query.get('editor'),
    language: query.get('language'),
    url: query.get('url') == 'undefined' ? '' : query.get('url'),
    resume: query.get('resume'),
    libraryId: id,
    userId: user?.sub
  })

  const [errMsg, setErrMsg] = useState({})
  const [load, setLoad] = useState(false)
  const handleUpdate = (e) => {
    e.preventDefault();
    setLoad(true)
    axios.put(`http://localhost:9000/resources/${query.get('resourceId')}`, form).then((res) => {
        setTimeout(() => {
            setLoad(false)
            if (res.data.errors) {
                setErrMsg(res.data.errors)
            } else {
                setForm(res.data)
                setErrMsg({})
            }
        }, 1000);
        
    })
  }
  
   const [comment, setComment] = useState({
        content: ""
    })
    
  const submit = (e) => {
    e.preventDefault()
    // comment.userId = user?.sub;
    // comment.userPicture = user?.picture;
    // comment.userName = user?.name;
    // comment.resourceId = query.get('resourceId');
    alert("comment")
    // axios.post(`http://localhost:9000/comments`, comment)
    // .then((res) => {
    //     alert('commented');
    // });
  }

  return (
    <div>
        <div className="row" style={{overflow: 'hidden'}}>
          <div className="col-12 col-md-4" style={{position: 'relative'}}>
              <div className="border rounded border-0" style={{overflow: 'hidden',height: '400px'}}>
                    <img src="/assets/img/default-cover.webp" width="100%" height="100%" />
                </div>
                <button class="btn btn-primary d-flex justify-content-center align-items-center" type="button" style={{padding: '0px',width: '40px',height: '40px',  position: 'absolute', top: '10px', right: '20px'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" style={{fontSize: '15px'}}>
                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
                    </svg>
                </button>
          </div>
          <div className="col-12 col-md-8">
              <div className="row">
                  <div className="col-12 col-sm-6">
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Title</span></div>
                          <div><span className=' text-capitalize'>{query.get('title') ? query.get('title') : 'Not Defined'}</span></div>
                      </div>
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Author</span></div>
                          <div><span className='text-capitalize'>{query.get('author') ? query.get('author') : 'Not Defined'}</span></div>
                      </div>
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Published</span></div>
                          <div><span>{query.get('published') ? query.get('published') : 'Not Defined'}</span></div>
                      </div>
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Volume</span></div>
                          <div><span>{!query.get('volume') || query.get('volume') === 'undefined' ? 'Not Defined' : query.get('volume') > 1 ? `${query.get('volume')} pages` : `${query.get('volume')} page` }</span></div>
                      </div>
                  </div>
                  <div className="col-12 col-sm-6">
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Gender</span></div>
                          <div><span>{query.get('gender') ? query.get('gender') : 'Not Defined'}</span></div>
                      </div>
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis text-capitalize" style={{fontSize: '12px'}}>Editor</span></div>
                          <div><span className='text-capitalize'>{(!query.get('editor')) || (query.get('editor') === 'undefined') ? 'Not Defined' : query.get('editor')}</span></div>
                      </div>
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Language</span></div>
                          <div><span>{query.get('language') ? query.get('language') : 'Not Defined'}</span></div>
                      </div>
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Url</span></div>
                          <div><span className={`text-${!query.get('url') || query.get('url') === 'undefined' ? 'capitalize' : 'lowercase'}`}>
                            {(!query.get('url')) || (query.get('url') === 'undefined') ? 'Not defined' : query.get('url')}</span></div>
                      </div>
                  </div>
                  <div className="col-12">
                      <div className="mb-2">
                          <div><span className="text-dark-emphasis" style={{fontSize: '12px'}}>Resume</span></div>
                          <div><span className='text-capitalize'>{query.get('resume') ? query.get('resume') : 'Not Defined'}</span></div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        {role && <Form method="post" onSubmit={handleUpdate}>
        <div style={{marginTop: '40px', marginBottom: '20px'}}><h1>Update Resource</h1></div>
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
                        <Input label='Volume' id={'volume'} placeholder='Volume' type='number' min={1} step={1} value={form.volume} onChange={e => setForm({...form, volume: e.target.value})} />
                        {errMsg.volume && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.volume.message}</span></div>}
                    </div>
                    <div className='my-2'>
                        <Selection id={'gender'} label='Gender' items={gender} value={form.gender} onChange={e => setForm({...form, gender: e.target.value})} />
                        {errMsg.gender && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.gender.message}</span></div>}
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className='my-2'>
                        <Input label='Editor' id={'editor'} placeholder='Editor' value={form.editor} onChange={e => setForm({...form, editor: e.target.value})} />
                        {errMsg.editor && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.editor.message}</span></div>}
                    </div>
                    <div className='my-2'>
                        <Selection label='Language' id={'language'} items={language} value={form.language} onChange={e => setForm({...form, language: e.target.value})} />
                        {errMsg.language && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.language.message}</span></div>}
                    </div>
                    <div className='my-2'>
                        <Input label='Book File' id={'book_file'} placeholder='Book Cover' type='file' value={form.book_cover} onChange={e => setForm({...form, book_cover: e.target.value})} />
                        {errMsg.book_file && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.book_file.message}</span></div>}
                    </div>
                    <div className='my-2'>
                        <Input label='Url' id={'url'} placeholder='Url' type='url' value={form.url} onChange={e => setForm({...form, url: e.target.value})} />
                        {errMsg.url && <div style={{marginTop: '0px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.url.message}</span></div>}
                    </div>
                </div>
            </div>
            <div>
                <Textarrea id='resume' label='Resume' placeholder='Resume' value={form.resume} onChange={e => setForm({...form, resume: e.target.value})}></Textarrea>
                {errMsg.resume && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.resume.message}</span></div>}
            </div>
            <div className="d-flex justify-content-start">
                <button disabled={load} className="btn btn-primary" type="submit">
                    Update Resource
                    {load && <span style={{marginLeft: '5px'}} class="spinner-border spinner-border-sm" role="status"></span>}
                </button>
            </div>
        </Form>}
        <div style={{marginTop: '30px', marginBottom: '30px'}}>
            <div>
            <div class="row">
                <div class="col-12 col-md-8">
                    <div className='border rounded'>
                        <Form onSubmit={submit}>
                            <div className='d-flex p-3'>
                                <textarea onChange={e => {setComment({content: e.target.value})}} style={{resize: 'none',height: '120px'}} className='form-control border-0 shadow-none' placeholder='Your Comment'></textarea>
                                <div className='d-flex flex-column justify-content-between'>
                                    <button disabled={isLoading} role='submit' className="btn btn-primary d-flex justify-content-center align-items-center" type="button" style={{padding: '0px',width: '40px',height: '40px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" style={{fontSize: '15px'}}>
                                            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Form>
                        {errMsg.resume && <div style={{marginTop: '-10px'}}><span className='text-danger' style={{marginLeft: '10px', fontSize: "12px"}}>{errMsg.resume.message}</span></div>}
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    Other resources...
                </div>
            </div>
                <div style={{margin: '20px 0px'}}>
                    <h3>5 comments</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
