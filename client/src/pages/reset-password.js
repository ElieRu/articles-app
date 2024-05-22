import Form from "../components/elements/form";
import Input from "../components/inputs/input";

import React from 'react'

export const ResetPassword = () => {
  return (
    <body style={{height: '100%',position: 'absolute',width: '100%'}}>
        <section className="d-flex align-items-center py-5" style={{width: '100%',height: '100%'}}>
            <div className="container py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-xl-4">
                        <div className="card">
                            <div className="card-body text-center d-flex flex-column align-items-center">
                                <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"></path>
                                    </svg></div>
                                <Form method="post" data-bs-theme="light">
                                    <Input type="password" name="password" placeholder="New password" />
                                    <Input type="password" name="confirmation_password" placeholder="Confirmation" />
                                    <div className="mb-3"><button className="btn btn-primary shadow d-block w-100" type="submit">Reset password</button></div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
  )
}

