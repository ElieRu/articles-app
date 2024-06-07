export default function Input ({className = 'form-control',style = null, type="text", name="name", label="null", placeholder="Placeholder", value = null, onChange = null}) {
    
    return <div className="mb-2">
            <label>{label}</label>
            <input className={className} style={style} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
}