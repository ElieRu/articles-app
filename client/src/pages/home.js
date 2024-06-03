import Column from "../components/elements/column"
import Paginatiom from "../components/elements/pagination"
import Row from "../components/elements/row"
import Search from "../components/inputs/input-search"
import ArticleComponent from "../components/blocks/article"
import { useNavigate } from "react-router-dom"

import React from 'react'

export const Home = () => {
  return (
    <section className="py-5">
        <div className="container py-2">
            <Search/>

            <Row className="row">
                <ArticleComponent/>
            </Row>

            <Paginatiom/>
        </div>
    </section>
  )
}

