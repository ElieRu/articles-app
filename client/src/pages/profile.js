import { useNavigate } from "react-router-dom";
import ArticleComponent from "../components/blocks/article";
import Column from "../components/elements/column";
import Form from "../components/elements/form";
import Input from "../components/inputs/input";
import Row from "../components/elements/row";
import Statistics from "../components/elements/statistics";
import UserFormUpdate from "../components/elements/user-form-update";

import React, { useState } from 'react'
import SearchArticle from "../components/inputs/search-article";
import EmptyArticles from "../components/blocks/empty-articles";

export const Profile = () => {
    
    const navigate = useNavigate()

    const [articles, setArticles] = useState([])

    const [search, setSearch] = useState('')
    const [select, setSelect] = useState('')
    const onFilter = (value) => {
        setSelect(value)
    }

    return (
        <section className="py-5">
            <div className="container">
                <Row className="row mb-4 mb-lg-5">
                    
                    <Column className="col-md-6 col-lg-4 text-center mx-auto mb-5">
                        <UserFormUpdate/>
                    </Column>

                    <Column className="col-md-6 col-lg-8 text-center mx-auto">
                        <Statistics/>
                    </Column>
                </Row>
                
                {articles.length > 0 ? <div>
                    <div className="row d-flex">
                        <div className='col-4'>
                            <SearchArticle search={search} onChange={e => setSearch(e.target.value)} onFilter={onFilter} />
                        </div>
                        <div className="col-4"></div>
                        <div className='col-4'>
                            <button onClick={() => navigate('/articles')} className="btn btn-primary btn-sm link-body-emphasis border rounded border-dark-subtle d-flex align-items-center" role="button" style={{backgroundColor: 'transparent'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor" style={{marginRight: '5px'}}>
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                </svg>Add new article
                            </button>
                        </div>
                    </div>
                    <Row>
                        <Column className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            {/* <ArticleComponent/> */}
                        </Column>
                    </Row>
                </div> : <EmptyArticles />}
            </div>
        </section>
  )
}
