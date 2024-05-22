export default function Textarrea({label="label", placeholder = "your text", id = 'text'}) {
    return <div className="mb-3">
            <label className="form-label" htmlFor={id} style={{marginBottom: '4px'}}>{label}</label>
            <textarea className="form-control" id={id} style={{resize: 'none',height: '120px'}} placeholder={placeholder} ></textarea>
        </div>
}