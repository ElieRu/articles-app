import Form from "./form";
import Input from "./input";

export default function UserFormUpdate () {
    return <div className="d-flex flex-column">
                <div className="d-flex justify-content-center">
                    <div class="d-flex justify-content-center align-items-center" style={{width: '130px',height: '130px',marginTop: '20px',marginBottom: '20px'}}>
                        <img class="rounded-circle border-0 shadow" style={{width: '130px',height: '130px'}} src="assets/img/profile.png" />
                        <label class="form-label bg-primary-subtle border rounded-circle border-0 shadow-sm" style={{padding: '8px',paddingTop: '4px',paddingBottom: '6px',position: 'absolute',marginTop: '90px',marginLeft: '84px'}} for="img">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                        <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                    </svg></label><input type="file" id="img" style={{display: 'none'}} accept="image/*" /></div>
                </div>
                <div>
                    <Form data-bs-theme="light">
                        <Input className="form-control form-control-sm" name="first_name" placeholder="First name" />
                        <Input className="form-control form-control-sm" name="last_name" placeholder="Last name" />
                        <Input className="form-control form-control-sm" type="email" name="email" placeholder="Email" />
                        <Input className="form-control form-control-sm" type="password" name="password" placeholder="Password" />
                        <Input className="form-control form-control-sm" type="password" name="confirmation_password" placeholder="Confirmation" />
                        <div className="mb-2"><button className="btn btn-primary btn-sm border rounded shadow d-block w-100" type="submit">Update</button></div>
                    </Form>
                    <button className="btn btn-primary btn-sm link-danger bg-transparent border rounded border-danger d-block w-100" type="button">Delete account</button>
                </div>
            </div>
}