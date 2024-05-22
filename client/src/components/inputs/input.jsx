export default function Input ({className = 'form-control',style = null, type="text", name="name", placeholder="Placeholder"}) {
    return <div className="mb-2">
            <input className={className} style={style} type={type} name={name} placeholder={placeholder} />
        </div>
}