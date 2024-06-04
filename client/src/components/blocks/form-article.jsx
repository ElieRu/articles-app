import { useNavigation } from "react-router-dom";
import Form from "../elements/form";
import Input from "../inputs/input";
import Selection from "../inputs/selection";
import Textarrea from "../inputs/textarea";
import { useState } from "react";


export default function FormArticle({article = null, navigate}) {

    const [form, setForm] = useState({
        title: article.title, 
        type: article.type, 
        description: article.description
    })

    console.log(article);
    
    const [items, setItems] = useState(['expository', 'persuasive', 'narrative', 'descriptive']);

    return <div className="mb-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="fw-bold" style={{marginBottom: '0px'}}>Form</h3>
                <button onClick={navigate} className="btn btn-primary btn-sm text-bg-light bg-transparent border-light-subtle" role="button">Back</button>
            </div>
            <Form>
                <Input className="form-control form-control-sm" id='title' type="text" placeholder="Title" label="Title" value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} />
                <Selection label = "Type" id="type" items={items} value={form.type} onChange={(e) => setForm({...form, type: e.target.value})} />
                <Textarrea className="mb-3" label="Description" id="desc" placeholder="Your description" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} />
                <button className="btn btn-primary btn-sm border rounded" type="submit">Save</button>
            </Form>
        </div>
}