

function Header() {
    
    return <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <h5 className="col-md-3 mb-2 mb-md-0">SanDev</h5>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item"> <a className="nav-link active">Portfolio</a></li>
            <li className="nav-item"> <a className="nav-link link-dark">Projects</a></li>
            <li className="nav-item"> <a className="nav-link link-dark">Resume</a></li>
            <li className="nav-item"> <a className="nav-link link-dark">About</a></li>
        </ul>
        <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-dark me-2">Let's talk</button>
        </div>
    </header>
    </div>
}

export default Header;