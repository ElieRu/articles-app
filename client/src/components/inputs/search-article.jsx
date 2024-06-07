import Row from "../elements/row";
import Search from "./input-search";

export default function SearchArticle ({search, onChange, onFilter}) {

    let types = [
        {label: 'All', value: ''},
        {label: 'Expository', value: 'Expository'},
        {label: 'Narrative', value: 'Narrative'}
    ];

    return <Row className="row mb-4">
                <div class="col-md-8 d-none d-md-block"></div>
                <div class="col-md-4 mb-2">
                    <div class="border rounded d-flex p-1">
                        {/* <Search className="border-0 shadow-none form-control" value={search} border={false} shadow={false} onChange={e => setSearch(e.target.value)} />  */}
                        <Search className="border-0 shadow-none form-control" value={search} border={false} shadow={false} onChange={onChange} /> 
                        <div class="dropdown">
                            <button class="btn btn-primary d-flex justify-content-center align-items-center" aria-expanded="false" data-bs-toggle="dropdown" type="button" style={{width: '46px',height: '46px',padding: '0px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                    <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"></path>
                                </svg>
                            </button>
                            <div class="dropdown-menu">
                                {types.map((type, i) => <button key={i} class="dropdown-item" onClick={() => onFilter(type.value)}>{type.label}</button>)}
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
}

