import { useNavigate } from "react-router-dom";
import Form from "../components/elements/form";
import Input from "../components/inputs/input";
import Search from "../components/inputs/input-search";
import Paginatiom from "../components/elements/pagination";
import Row from "../components/elements/row";
import Selection from "../components/inputs/selection";
import Textarrea from "../components/inputs/textarea";

import React, { useEffect, useState } from 'react'
import axios from "axios";
import ArticleWithDropdown from "../components/blocks/article-with-dropdown";
import DeleteModal from "../components/blocks/delete-modal";
import EmptyArticles from "../components/blocks/empty-articles";
import Column from "../components/elements/column";

export const Articles = () => {

    const navigate = useNavigate()
    const [articles, setArticles] = useState([]);
    let [article, setArticle] = useState('')
    let [form, setForm] = useState({ title: '', type: '', description: '' })

    // All
    useEffect(() => {
        axios.get(`http://localhost:9000/articles`).then((res) => {
            setArticles(res.data);
        })
    }, []);

    // Create
    let [formCreated, setFormCreated] = useState(false)
    let [formError, setFormError] = useState(false)
    const onCreated = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:9000/articles`, form).then((res) => {
            setArticles(res.data);
            form.title = '';
            form.type = '';
            form.description = '';
            setFormError(false)
            setFormCreated(true)
        }).catch((err) => {
            setFormError(err.response.data);
            form.title = '';
            form.type = '';
            form.description = '';
            setFormCreated(false);
        })
    }

    // Delete
    const onDelete = () => {
        axios.delete(`http://localhost:9000/articles/${article._id}`).then((res) => {
            setArticles(res.data)
        });
    }

    // Update
    const [action, setAction] = useState(true)
    const onUpdate = (article) => {
        setForm(article)
        setAction(false)
    }

    // 
    const [formUpdated, setFormUpdated] = useState(false)
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:9000/articles/${form._id}`, form).then((res) => {
            setArticles(res.data);
            form.title = '';
            form.type = '';
            form.description = '';
            setFormUpdated(true)
        })
    }

    // search
    let [search, setSearch] = useState('')
    let [select, setSelect] = useState('')
    
    const handleFilter = (value) => {
        setSelect(value)
    }
    
    return (<section className="py-5">
                <div className="container">
                    <div className="mb-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="fw-bold" style={{marginBottom: '0px'}}>Form</h3>
                            <button onClick={() => navigate(-1)} className="btn btn-primary btn-sm text-bg-light bg-transparent border-light-subtle" role="button">Back</button>
                        </div>
                        <Form onSubmit={ action ? onCreated : handleUpdate }>
                            <div>
                                <Input className="form-control form-control-sm" id='title' type="text" label="Title" placeholder="Title"
                                    value={form.title}
                                    onChange={(e) => setForm({...form, title: e.target.value})} />
                            </div>
                                                            
                            <Selection label = "Type" id="type"
                                value={form.type}
                                onChange={(e) => setForm({...form, type: e.target.value})} />

                            <Textarrea className="mb-3" label="Description" id="desc" placeholder="Your description"
                                value={form.description}
                                onChange={(e) => setForm({...form, description: e.target.value})} ></Textarrea>
                            
                            <div style={{display: formError ? 'block' : 'none'}} class="bg-danger-subtle border rounded p-2 mb-2"><span class="fs-6">Invalid form</span></div>
                            <div style={{display: formCreated ? 'block' : 'none'}} class="bg-primary-subtle border rounded p-2 mb-2"><span class="fs-6">Article created</span></div>
                            <div style={{display: formUpdated ? 'block' : 'none'}} class="bg-success-subtle border rounded p-2 mb-2"><span class="fs-6">Article updated</span></div>
                            <button className="btn btn-primary btn-sm border rounded" type="submit">{action ? 'Save' : 'Update'}</button>
                        </Form>
                    </div>
                    {!articles.length == 0 ? <div>
                        <Row className="row mb-4">
                            <div class="col-md-8 d-none d-md-block"></div>
                            <div class="col-md-4 mb-2">
                                <div class="border rounded d-flex p-1">
                                    <Search className="border-0 shadow-none form-control" value={search} border={false} shadow={false} onChange={e => setSearch(e.target.value)} /> 
                                    <div class="dropdown">
                                        <button class="btn btn-primary d-flex justify-content-center align-items-center" aria-expanded="false" data-bs-toggle="dropdown" type="button" style={{width: '46px',height: '46px',padding: '0px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                                <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"></path>
                                            </svg>
                                        </button>
                                        <div class="dropdown-menu">
                                            <button class="dropdown-item" onClick={() => handleFilter('')}>All</button>
                                            <button class="dropdown-item" onClick={() => handleFilter('Expository')}>Expository</button>
                                            <button class="dropdown-item" onClick={() => handleFilter('Persuasive')}>Persuasive</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row>
                            {articles.filter((article) => {
                                return search.toLowerCase() === ''
                                    ? article
                                    : article.title.toLowerCase().includes(search);
                            }).filter((article) => {
                                return select === ''
                                ? article
                                : article.type.includes(select);
                            }).map((article, i) => <ArticleWithDropdown key={i} article={article} onUpdate={onUpdate} myDelete={() => setArticle(article) } />)}
                        </Row>
                        {articles.length >= 10 && <Paginatiom />}
                    </div> : <EmptyArticles/> }
                </div>
                <DeleteModal onDelete={onDelete} ></DeleteModal>
            </section>
    )
}
