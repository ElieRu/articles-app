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

export const Articles = () => {

    const navigate = useNavigate()
    const [articles, setArticles] = useState([]);
    let [article, setArticle] = useState('')
    let [form, setForm] = useState({
        title: '',
        type: '',
        description: ''
    })

    // All articles
    useEffect(() => {
        axios.get(`http://localhost:9000/articles`).then((res) => {
            setArticles(res.data)
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
    
    return (<section className="py-5">
                <div className="container">
                    <div className="mb-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="fw-bold" style={{marginBottom: '0px'}}>Form</h3>
                            <button onClick={() => navigate(-1)} className="btn btn-primary btn-sm text-bg-light bg-transparent border-light-subtle" role="button">Back</button>
                        </div>
                        <Form onSubmit={onCreated}>
                            <Input className="form-control form-control-sm" id='title' type="text" label="Title" placeholder="Title"
                                value={form.title}
                                onChange={(e) => setForm({...form, title: e.target.value})} />
                                                            
                            <Selection label = "Type" id="type"
                                value={form.type}
                                onChange={(e) => setForm({...form, type: e.target.value})} />

                            <Textarrea className="mb-3" label="Description" id="desc" placeholder="Your description"
                                value={form.description}
                                onChange={(e) => setForm({...form, description: e.target.value})} ></Textarrea>
                            
                            <div style={{display: formError ? 'block' : 'none'}} class="bg-danger-subtle border rounded p-2 mb-2"><span class="fs-6">Invalid form</span></div>
                            <div style={{display: formCreated ? 'block' : 'none'}} class="bg-primary-subtle border rounded p-2 mb-2"><span class="fs-6">Article created</span></div>
                            <button className="btn btn-primary btn-sm border rounded" type="submit">Save</button>
                        </Form>
                    </div>
                    <div>                        
                        <Search/>
                        <Row>
                            {articles.map((article, i) => <ArticleWithDropdown key={i} article={article} myDelete={(e) => setArticle(article) } />)}
                        </Row>
                        <Paginatiom />
                    </div>
                </div>
                <DeleteModal onDelete={onDelete} ></DeleteModal>
            </section>
        )
}
