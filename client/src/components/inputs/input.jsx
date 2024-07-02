export default function Input ({className = 'form-control', disabled=false, id=null, style = null, type="text", name="name", label="null", placeholder="Placeholder", value = null, onChange = null, min=null, max=null, step=null}) {
    
    return <div className="text-start">
            <label className="form-label cursor-pointer" htmlFor={id} style={{fontSize: '13px', marginLeft: '10px'}}>{label}</label>
            <input id={id} className={className} disabled={disabled} style={style} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} min={min} max={max} step={step} />
        </div>
}