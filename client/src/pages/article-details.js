import DescriptionComponent from "../components/elements/description";
import Column from "../components/elements/column";
import Comment from "../components/blocks/comment";
import Row from "../components/elements/row";
import Form from "../components/elements/form";


import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Outlet } from "react-router-dom";
import FormArticle from "../components/blocks/form-article";
import axios from "axios";

export const ArticleDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [article, setArticle] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:9000/articles/${id}`).then((res) => {
            setArticle(res.data)
        })
    }, []);

    // console.log(article)

    return (<section className="py-5">
            <div className="container">
                <FormArticle navigate={() => {navigate(-1)}} article={article} />
                <DescriptionComponent article={article} />
                
                <Row className="row flex-column-reverse flex-md-row">
                    <Column className="col-12 col-md-8">
                        <h3 className="fw-bold">Comments (12)</h3>
                        <Row className="row">
                            <Column className="col">
                                {/* <Comment/> */}
                            </Column>
                        </Row>
                    </Column>
                    <Column className="col-12 col-md-4 mb-4">
                        <Form>
                            <div className="mb-3">
                                <textarea className="form-control mb-2" id="comment" style={{resize: 'none',height: '120px'}} placeholder="Your comment"></textarea>
                                <button className="btn btn-primary btn-sm link-primary border rounded border-primary" type="submit" style={{background: 'transparent'}}>Comment</button>
                            </div>
                        </Form>
                    </Column>
                </Row>
            </div>
        </section>
    )}



