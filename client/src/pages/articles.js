import { Link, Outlet, useNavigate } from "react-router-dom";
import ArticleComponent from "../components/blocks/article";
import Column from "../components/elements/column";
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

export const Articles = () => {

    const navigate = useNavigate()
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9000/articles`).then((res) => {
            setArticles(res.data)
        })
    }, []);

    // alert(articles);
    
    return (
    <section className="py-5">
        <div className="container">
            <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="fw-bold" style={{marginBottom: '0px'}}>Form</h3>
                    <button onClick={() => navigate(-1)} className="btn btn-primary btn-sm text-bg-light bg-transparent border-light-subtle" role="button">Back</button>
                </div>
                <Form>
                    <Input className="form-control form-control-sm" id='title' type="text" placeholder="Title" />
                    <Selection label = "Type" id="type" />
                    <Textarrea className="mb-3" label="Description" id="desc" placeholder="Your description"></Textarrea>
                    <button className="btn btn-primary btn-sm border rounded" type="submit">Save</button>
                </Form>
            </div>
            <div>
                
                <Search/>
                
                <Link to={'admin'}>admin link</Link>

                <Outlet/>

                <Row>
                    {articles.map((article, i) => <Link key={i} to={'3'} >{article.title}</Link>)}
                    {/* {articles.map((article, i) => <ArticleComponent key={i} article={article} />)} */}
                </Row>
                
                <Paginatiom />
                
            </div>
        </div>
    </section>
  )
}
