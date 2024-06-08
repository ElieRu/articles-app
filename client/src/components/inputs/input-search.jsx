import { useState } from "react"

export default function Search({className=null, border=true, shadow=true, value, onChange}) {
    const customiseClassName = className ? className : `form-control ${border ? 'border' : 'border-0'} ${shadow ? '' : 'shadow-none'}`
    return <input 
                type="text" 
                value={value} 
                onChange={onChange} 
                className={customiseClassName} 
                style={{width: '100%'}}
                placeholder="Search" />
}