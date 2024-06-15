import Column from "./column";
import Form from "./form";
import Row from "./row";

export default function Statistics () {
    return <>
                <Row className="row mb-3">
                    <Column className="col-12 mb-3">
                        <h2 className="fw-bold" style={{textAlign: 'left'}}>Statistics</h2>
                    </Column>
                    <Column>
                        <Row className="row mb-3" style={{padding: '0px',margin: '0px'}}>
                            <Column className="col">
                                <div className="text-start border rounded p-3">
                                    <div className="d-flex justify-content-between align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-heart">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"></path>
                                        </svg><span>Followers</span></div>
                                    <h3 className="fw-bold" style={{textAlign: 'right'}}>30</h3>
                                </div>
                            </Column>
                            <Column className="col">
                                <div className="text-start border rounded p-3">
                                    <div className="d-flex justify-content-between align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-heart">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"></path>
                                        </svg><span>Following</span></div>
                                    <h3 className="fw-bold" style={{textAlign: 'right'}}>30</h3>
                                </div>
                            </Column>
                            <Column className="col-12 mt-3">
                                <div className="text-start border rounded p-3">
                                    <div className="d-flex justify-content-between align-items-center"><button className="btn btn-primary btn-sm link-body-emphasis bg-transparent border rounded border-dark-subtle" type="button">Follow</button><span>Articles</span></div>
                                    <h3 className="fw-bold" style={{textAlign: 'right'}}>30</h3>
                                </div>
                            </Column>
                        </Row>
                    </Column>                    
                    <Column className="col-12 mb-3">
                        {/* <Form>
                            <textarea className="form-control form-control mb-2" placeholder="*bio" style={{resize: 'none',height: '130px'}}></textarea>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary btn-sm link-body-emphasis bg-transparent border rounded" type="submit">Change</button>
                            </div>
                        </Form> */}
                    </Column>
                </Row>
                <div className="mb-2" style={{textAlign: 'justify'}}></div>
            </>
}