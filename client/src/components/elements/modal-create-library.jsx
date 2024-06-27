import { useEffect, useState } from "react";
import Input from "../inputs/input";
import Selection from "../inputs/selection";
import Form from "./form";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function CreateLibrary({onUpdateItems, onHideModal}) {
  
  const items = [
      {label: "Library's Type", value: ''},
      {label: "Public Library", value: "Public Library"},
      {label: "Academic Library", value: "Academic Library"},
      {label: "School Library", value: "School Library"},
      {label: "Special Collection Library", value: "Special Collection Library"},
  ];

  const [form, setForm] = useState({name: "", type: ""})
  const [validation, setValidation] = useState(false)
  const { user } = useAuth0()
  const [userId, setUserId] = useState('')
  const goTo = useNavigate()
  const {loginWithRedirect} = useAuth0()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:9000/libraries`, {...form, userId: user?.sub})
    .then((res) => {
      setForm({
        name: "",
        type: ""
      })
      onUpdateItems(res.data)
      setValidation(false)
      onHideModal(true)
      goTo(res.data._id)
    })
    .catch((err) => {
      console.log(err);
      setValidation(true)
      onHideModal(false)
    })
  }

  return (
    <div id="create-library" className="modal fade" role="dialog" tabindex="-1">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h4 className="modal-title">New Library</h4>
            <button
              className="btn-close"
              type="button"
              aria-label="Close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <Form onSubmit={handleSubmit}>
              <Input label="Library's name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Library's name" />
              <Selection label="Type" value={form.type} onChange={(e) => setForm({...form, type: e.target.value})} items={items} />
              <div style={{display: validation ? 'block' : 'none'}} class="bg-danger-subtle border rounded p-2 mb-2"><span class="fs-6">Invalid form</span></div>
              <button type="submit" className="btn btn-primary btn-sm">Save</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
