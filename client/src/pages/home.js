import Paginatiom from "../components/elements/pagination"
import Row from "../components/elements/row"
import Search from "../components/inputs/input-search"
import ArticleComponent from "../components/blocks/article"

import React, { useContext, useState } from 'react'
import EmptyItems from "../components/blocks/empty-items"

import SearchWithDropdown from "../components/inputs/search-article"
import { ThemeContext } from "../utils/ThemeContext"

export const Home = () => {

  const [articles, setArticles] = useState([])

  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('')
  const onFilter = (value) => {
    setSelect(value)
  }

  function ThemeSwither () {
    const {toggleTheme} = useContext(ThemeContext)
    return <button onClick={toggleTheme}>Change the theme</button>
  }

  return (
    <section className="py-5">
      <ThemeSwither />
      {articles.length > 0 ? <div className="container py-2">
          <SearchWithDropdown search={search} onChange={e => setSearch(e.target.value)} onFilter={onFilter} />
            <Row className="row">
              {/* <ArticleComponent/> */}
            </Row>
          <Paginatiom/>
        </div> : <EmptyItems src={'assets/img/empty.png'} />}
    </section>
  )
}

