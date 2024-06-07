export default function Column ({className, children}) {
    // const customClassName = className !== '' ? className : 'col'
    console.log(className);
    return <div className={className} style={{overflow: 'hidden'}}>
        {children}
    </div>
}