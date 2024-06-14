import Paginatiom from "../components/elements/pagination"
import Row from "../components/elements/row"
import Search from "../components/inputs/input-search"
import ArticleComponent from "../components/blocks/article"

import React, { useEffect, useState } from 'react'
import SearchArticle from "../components/inputs/search-article"
import EmptyArticles from "../components/blocks/empty-articles"

import { useAuth0 } from "@auth0/auth0-react";

export const Home = () => {

  const [articles, setArticles] = useState([])

  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('')
  const onFilter = (value) => {
    setSelect(value)
  }

  return (
    <section className="py-5">
      {articles.length > 0 ? <div className="container py-2">
          <SearchArticle search={search} onChange={e => setSearch(e.target.value)} onFilter={onFilter} />
            <Row className="row">
              {/* <ArticleComponent/> */}
            </Row>
          <Paginatiom/>
        </div> : <EmptyArticles />}
    </section>
  )
}

