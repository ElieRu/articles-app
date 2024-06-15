export default function Input ({className = 'form-control', disabled=false, style = null, type="text", name="name", label="null", placeholder="Placeholder", value = null, onChange = null}) {
    
    return <div className="text-start">
            <label className="form-label cursor-pointer" style={{fontSize: '13px', marginLeft: '10px'}}>{label}</label>
            <input className={className} disabled={disabled} style={style} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
}