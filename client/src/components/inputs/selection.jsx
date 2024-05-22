export default function Selection({label = 'label', id = null, items = []}) {
    return <div className="mb-3">
                <label className="form-label" forHtml={id} style={{marginBottom: '4px'}}>{label}</label>
                <select className="form-select form-select-sm" id={id} >
                    <optgroup label="This is a group">
                        {items.map((item, i) => (<option key={i} value={item}>{item}</option>))}
                    </optgroup>
                </select>
            </div>
}