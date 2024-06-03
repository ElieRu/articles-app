const { default: ArticleComponent } = require("./article");


export default function ArticleWithDropdown({children}) {
    return <ArticleComponent>
        <div className="dropdown" style={{position: 'absolute',marginTop: '10px',marginLeft: '10px'}}>
            <button className="btn btn-primary border-light" aria-expanded="false" data-bs-toggle="dropdown" type="button" style={{background: 'transparent',paddingRight: '15px',paddingLeft: '15px'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="-192 0 512 512" width="1em" height="1em" fill="currentColor">
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
                    </svg></button>
                <div className="dropdown-menu border-0 shadow-sm" style={{overflow: 'hidden'}}><a className="dropdown-item" href="#">Update</a><a className="dropdown-item" href="#">Delete</a></div>
        </div>
    </ArticleComponent>
}

