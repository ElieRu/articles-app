
export default function EmptyItems ({src, children=null, msg=null}) {
    return <div class="d-flex justify-content-center my-5 align-items-center" style={{height: '400px'}}>
            <div class="row d-flex justify-content-center">
                <div class="col-7 d-flex flex-column" style={{textAlign: 'center'}}>
                    <img class="mb-3" style={{margin: 'center'}} src={src} width="100%" />
                    {!msg && <span style={{fontSize: '13px'}}>The list is empty</span>}
                    {msg && <span style={{fontSize: '13px'}}>{msg}</span>}
                    {children}
                </div>
            </div>
        </div>
}
