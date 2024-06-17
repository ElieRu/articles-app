import { useState } from "react";
import Input from "../inputs/input";
import Selection from "../inputs/selection";
import Form from "./form";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export default function CreateLibrary({libraries}) {
  const {isLoading, user} = useAuth0();
  const items = [
      {label: "Library's Type", value: ''},
      {label: "Public Library", value: "Public Library"},
      {label: "Academic Library", value: "Academic Library"},
      {label: "School Library", value: "School Library"},
      {label: "Special Collection Library", value: "Special Collection Library"},
  ];

  // const 

  const [form, setForm] = useState({
    name: "", 
    type: "",
    userId: ""
  })

  const handleSubmit = (e) => {
      e.preventDefault()
      setForm({...form, userId: user.sub});
      axios.post(`http://localhost:9000/libraries`, form)
      .then((res) => {
        libraries(res)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
              <button type="submit" className="btn btn-primary btn-sm">Save</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
