export default function Textarrea({label="label", placeholder = "your text", id = 'text', value = null, onChange = null}) {
    return <div className="mb-3">
            <label className="form-label" htmlFor={id} style={{marginBottom: '4px', fontSize: '13px', marginLeft: '10px'}}>{label}</label>
            <textarea className="form-control" id={id} style={{resize: 'none',height: '120px'}} placeholder={placeholder} value={value} onChange={onChange} ></textarea>
        </div>
}