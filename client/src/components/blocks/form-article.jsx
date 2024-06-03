import { useNavigation } from "react-router-dom";
import Form from "../elements/form";
import Input from "../inputs/input";
import Selection from "../inputs/selection";
import Textarrea from "../inputs/textarea";
import { useState } from "react";


export default function FormArticle({article = null, navigate}) {

    const [form, setForm] = useState({title: '', type: '', description: '' })

    setForm(article);
    
    console.log(form);

    return <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="fw-bold" style={{marginBottom: '0px'}}>Form</h3>
                <button onClick={navigate} className="btn btn-primary btn-sm text-bg-light bg-transparent border-light-subtle" role="button">Back</button>
            </div>
            <Form>
                <Input 
                    className="form-control form-control-sm" 
                    id='title' 
                    type="text" 
                    placeholder="Title"
                    label="Title"
                    // value={}
                     />

                <Selection label = "Type" id="type" />
                <Textarrea className="mb-3" label="Description" id="desc" placeholder="Your description"></Textarrea>
                <button className="btn btn-primary btn-sm border rounded" type="submit">Save</button>
            </Form>
        </>
}