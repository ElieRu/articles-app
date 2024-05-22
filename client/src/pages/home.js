import Column from "../components/elements/column"
import Paginatiom from "../components/elements/pagination"
import Row from "../components/elements/row"
import Search from "../components/elements/input-search"
import ArticleComponent from "../components/elements/article-component"
import { useNavigate } from "react-router-dom"

import React from 'react'

export const Home = () => {
  return (
    <section className="py-5">
        <div className="container py-2">
            <Search/>

            <Row className="row">
                <Column className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <ArticleComponent/>
                </Column>
            </Row>

            <Paginatiom/>
        </div>
    </section>
  )
}

