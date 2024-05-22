import { useNavigate } from "react-router-dom";

export default function DescriptionComponent ({article}) {
    const {title, type, description} = article;

    let goBack = useNavigate()

    return <>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="fw-bold" style={{marginBottom: '0px'}}>Description</h3>
                <button onClick={() => goBack(-1) } className="btn btn-primary btn-sm link-body-emphasis bg-transparent border-light-subtle" role="button">Back</button>
            </div>
            <div className="mb-5">
                <div className="mb-3">
                    <h4 className="fw-bold">{title}</h4><span className="badge bg-primary">{type}</span>
                    <p>{description}</p>
                </div>
            </div>
        </>
}