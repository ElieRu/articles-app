export default function Selection({label = 'label', id = null, value=null, onChange}) {

    let items = [
        {label: 'Select a type', value: ''}, 
        {label: 'Expository', value: 'Expository'}, 
        {label: 'Persuasive', value: 'Persuasive'}, 
        {label: 'Narrative', value: 'Narrative'},
        {label: 'Descriptive', value: 'Descriptive'}
    ]

    return <div className="mb-3">
            <label className="form-label" htmlFor={id} style={{marginBottom: '4px'}}>{label}</label>
            <select className="form-select form-select-sm" id={id} value={value} onChange={onChange}>
                {items.map((item, i) => (<option key={i} disabled={i==0 ? true : false} value={item.value}>{item.label}</option>))}
            </select>
        </div>
    }
