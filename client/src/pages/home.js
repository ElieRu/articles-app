import Paginatiom from "../components/elements/pagination"
import Row from "../components/elements/row"
import React, { useState } from 'react'
import EmptyItems from "../components/blocks/empty-items"
import SearchWithDropdown from "../components/inputs/search-article"
import { useAuth0 } from "@auth0/auth0-react";

export const Home = () => {
  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('')
  const onFilter = (value) => {
    setSelect(value)
  }

  const {isLoading, user} = useAuth0()

  return (
    <section className="py-5">
      {/* Contents : Articles, Resources and Some Libraries */}
      {articles.length > 0 ? <div className="container py-2">
          <SearchWithDropdown search={search} onChange={e => setSearch(e.target.value)} onFilter={onFilter} />
            <Row className="row">
              {/* <ArticleComponent/> */}
            </Row>
          <Paginatiom/>
        </div> : <EmptyItems src={'/assets/img/empty.png'} />}
    </section>
  )
}

