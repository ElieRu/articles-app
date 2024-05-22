import { useNavigate } from "react-router-dom";
import ArticleComponent from "../components/blocks/article";
import Column from "../components/elements/column";
import Form from "../components/elements/form";
import Input from "../components/inputs/input";
import Row from "../components/elements/row";
import Statistics from "../components/elements/statistics";
import UserFormUpdate from "../components/elements/user-form-update";

import React from 'react'

export const Profile = () => {
    
    const navigate = useNavigate()

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
                <div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" className="fs-4" style={{marginRight: '10px'}}>
                                <path d="M432 48H208c-17.7 0-32 14.3-32 32V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V336h16c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zM48 448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V256H48V448zM64 128H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z"></path>
                            </svg>
                            <h3 className="fw-bold" style={{margin: '0px'}}>Articles</h3>
                        </div>
                            <button onClick={() => navigate('/articles')} className="btn btn-primary btn-sm link-body-emphasis border rounded border-dark-subtle d-flex align-items-center" role="button" style={{backgroundColor: 'transparent'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor" style={{marginRight: '5px'}}>
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                            </svg>Add new article</button>
                    </div>
                    <Row>
                        <Column className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <ArticleComponent/>
                        </Column>
                    </Row>
                </div>
            </div>
        </section>
  )
}
