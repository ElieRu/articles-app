export default function InputLabel({label = 'label', className = 'form-control', type = 'text', id = 'id', placeholder= "title"}) {
    return <div className="mb-3">
                <label className="form-label" htmlFor={id} style={{marginBottom: '4px'}}>{label}</label>
                <input className={className} type={type} id={id} placeholder={placeholder} />
            </div>
}