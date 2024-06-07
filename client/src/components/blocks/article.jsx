import { Link, useParams } from "react-router-dom";
import Column from "../elements/column";

export default function ArticleComponent ({article = null, children}) {
    
    return <Column className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="bg-white border-0" >
                    {children}
                    <div>
                        <img className="rounded img-fluid shadow w-100 fit-cover" src="assets/img/products/1.jpg" style={{height: '250px'}} />
                        
                    </div>
                    <button>More</button>
                </div>
                <div className="py-3">
                    <h5 className="fw-bold text-capitalize">{article.title.length > 15 ? article.title.slice(1,15)+'...' : article.title}</h5>
                    <p className="text-muted text-capitalize" style={{marginBottom: '0px',fontSize: '13px'}}p> {article.description.length > 30 ? article.description.slice(0,30)+'...' : article.description}</p>
                </div>
            </Column>
}