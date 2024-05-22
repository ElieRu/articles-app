export default function ArticleComponent ({children}) {
    return <div>
                <a href="/article">
                    {children}
                    <img className="rounded img-fluid shadow w-100 fit-cover" src="assets/img/products/1.jpg" style={{height: '250px'}} />
                </a>
                <div className="py-4">
                    <h4 className="fw-bold">Lorem libero donec</h4>
                    <p className="text-muted" style={{marginBottom: '0px',fontSize: '13px'}}p> Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus...</p>
                </div>
            </div>
}