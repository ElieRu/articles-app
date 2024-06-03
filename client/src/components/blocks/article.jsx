import { Link, useParams } from "react-router-dom";
import Column from "../elements/column";

export default function ArticleComponent ({article, children}) {
    
    return <Column className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <Link to={`/articles/${article._id}`}>
                    {children}
                    <img className="rounded img-fluid shadow w-100 fit-cover" src="assets/img/products/1.jpg" style={{height: '250px'}} />
                </Link>
                <div className="py-4">
                    <h4 className="fw-bold">{article.title}</h4>
                    <p className="text-muted" style={{marginBottom: '0px',fontSize: '13px'}}p> {article.description}</p>
                </div>
            </Column>
}