export default function Paginatiom() {
    return <nav className="d-flex justify-content-center">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" aria-label="Previous" href="#"><span aria-hidden="true">«</span></a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" aria-label="Next" href="#"><span aria-hidden="true">»</span></a></li>
                </ul>
            </nav>
}