import { useNavigate } from "react-router-dom";
import Form from "../components/elements/form";
import Input from "../components/inputs/input";
import Row from "../components/elements/row";
import Selection from "../components/inputs/selection";
import Textarrea from "../components/inputs/textarea";

import React, { useEffect, useState } from 'react'
import axios from "axios";
import ArticleWithDropdown from "../components/blocks/article-with-dropdown";
import DeleteModal from "../components/blocks/delete-modal";
import EmptyItems from "../components/blocks/empty-items";
import ReactPaginate from 'react-paginate';
import SearchWithDropdown from "../components/inputs/search-article";

export const Articles = () => {

    const navigate = useNavigate()
    const [articles, setArticles] = useState([]);
    let [article, setArticle] = useState('')
    let [form, setForm] = useState({ title: '', type: '', description: '' })

    let items = [
        {label: 'Select a type', value: ''}, 
        {label: 'Expository', value: 'Expository'}, 
        {label: 'Persuasive', value: 'Persuasive'}, 
        {label: 'Narrative', value: 'Narrative'},
        {label: 'Descriptive', value: 'Descriptive'}
    ]

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
    
    const onFilter = (value) => {
        setSelect(value)
    }

    // pagination
    const handlePageClick = () => {

    }

    let articles_types = [
        {label: 'All', value: ''},
        {label: 'Expository', value: 'Expository'},
        {label: 'Narrative', value: 'Narrative'}
    ];
    
    return (<section className="py-4">
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
                                                            
                            <Selection label = "Type" id="type" items={items}
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
                        <SearchWithDropdown search={search} types={items} onChange={e => setSearch(e.target.value)} onFilter={onFilter} >
                        </SearchWithDropdown>
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
                        
                        <ReactPaginate
                            previousLabel="previous"
                            nextLabel="next"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            pageCount={23}
                            pageRangeDisplayed={4}
                            marginPagesDisplayed={2}
                            // onPageChange={handlePageClick}
                            containerClassName="pagination justify-content-center"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            activeClassName="active"
                        />

                    </div> : <EmptyItems/> }
                </div>
                <DeleteModal onDelete={onDelete} ></DeleteModal>
            </section>
    )
}
