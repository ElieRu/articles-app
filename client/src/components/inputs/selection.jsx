export default function Selection({label = 'label', items, id = null, value=null, onChange}) {

    return <div className="mb-2">
            <label className="form-label" htmlFor={id} style={{fontSize: '13px', marginLeft: '10px'}} >{label}</label>
            <select className="form-select form-select-sm" id={id} value={value} style={{height: '44px'}} onChange={onChange}>
                {items.map((item, i) => (<option key={i} disabled={i==0 ? true : false} value={item.value}>{item.label}</option>))}
            </select>
        </div>
    }
