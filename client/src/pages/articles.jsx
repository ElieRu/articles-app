import ArticleComponent from "../components/elements/article-component";
import Column from "../components/elements/column";
import Form from "../components/elements/form";
import Input from "../components/elements/input";
import Search from "../components/elements/input-search";
import Paginatiom from "../components/elements/pagination";
import Row from "../components/elements/row";
import Selection from "../components/elements/selection";
import Textarrea from "../components/elements/textarea";

    export default function Articles () {
        return <section className="py-5">
        <div className="container">
            <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3 className="fw-bold" style={{marginBottom: '0px'}}>Form</h3>
                    <a className="btn btn-primary btn-sm text-bg-light bg-transparent border-light-subtle" role="button" href="/">Back</a>
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
                
                <Row>
                    <Column className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <ArticleComponent>
                            <div className="dropdown" style={{position: 'absolute',marginTop: '10px',marginLeft: '10px'}}>
                                <button className="btn btn-primary border-light" aria-expanded="false" data-bs-toggle="dropdown" type="button" style={{background: 'transparent',paddingRight: '15px',paddingLeft: '15px'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="-192 0 512 512" width="1em" height="1em" fill="currentColor">
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                                        </svg></button>
                                    <div className="dropdown-menu border-0 shadow-sm" style={{overflow: 'hidden'}}><a className="dropdown-item" href="#">Update</a><a className="dropdown-item" href="#">Delete</a></div>
                                </div>
                        </ArticleComponent>
                    </Column>
                </Row>
                
                <Paginatiom />
                
            </div>
        </div>
    </section>
    }