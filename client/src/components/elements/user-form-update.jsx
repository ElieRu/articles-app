import Form from "./form";
import Input from "../inputs/input";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

export default function UserFormUpdate ({follower}) {
    const { user, isLoading} = useAuth0();

    const [form, setForm] = useState({
        picture: user?.picture,
        family_name: user?.family_name,
        given_name: user?.given_name,
        email: user?.email,
        nickname: user?.nickname,
    })
    
    return <div className="d-flex flex-column">
                <div className="d-flex justify-content-center">
                    <div class="d-flex justify-content-center border align-items-center" style={{position: 'relative', borderRadius: '100%', width: '130px',height: '130px',marginTop: '20px',marginBottom: '20px'}}>
                        {isLoading ? <div style={{position: 'absolute', top: '43%'}}>
                            <span class="spinner-border spinner-border-sm" role="status"></span>
                        </div> : <img class="rounded-circle border-0 shadow" style={{width: '130px',height: '130px'}} src={user?.picture} /> }
                    </div>
                </div>
                <div>
                    <Form data-bs-theme="light">
                        <Input disabled={true} value={!isLoading ? user.family_name : '' } label="Firt Name" className="form-control form-control-sm" name="first_name" placeholder="First name" />
                        <Input disabled={true} value={!isLoading ? user.given_name : '' } label="Last Name" className="form-control form-control-sm" name="last_name" placeholder="Last name" />
                        <Input disabled={true} value={!isLoading ? user.email : '' } label="Email" className="form-control form-control-sm" type="email" name="email" placeholder="Email" />
                        <Input disabled={true} value={!isLoading ? user.nickname : '' } label="Nickname" className="form-control form-control-sm" type="text" name="password" placeholder="Password" />
                        <div className="mb-2" style={{marginTop: '15px'}}>
                            <button className="btn btn-primary btn-sm border rounded d-block w-100" disabled type="submit">
                                { isLoading ? <span class="spinner-border spinner-border-sm" role="status"></span> : 'Update' }
                            </button>
                        </div>
                    </Form>
                    {/* <button className="btn btn-primary btn-sm link-danger bg-transparent border rounded border-danger d-block w-100" type="button">Delete account</button> */}
                </div>
            </div>
}