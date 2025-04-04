import CircularText from "../TextAnimations/CircularText/CircularText";


function Header() {
    
    return <div className=" header">
        <header className="container-lg d-flex flex-lg-row flex-wrap align-items-center justify-content-center justify-content-md-between py-1 mb-0 border-bottom gap-3 container-fluid">
        <div>
            <CircularText text="SAN*WEB*DEV*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class" />
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item"> <a className="nav-link active">Portfolio</a></li>
            <li className="nav-item"> <a className="nav-link link-dark">Projects</a></li>
            <li className="nav-item"> <a className="nav-link link-dark">About</a></li>
            <li className="nav-item"> <a className="nav-link link-dark">Resume</a></li>
        </ul>
        <div className="col-md-auto text-end">
            <button type="button" className="btn btn-outline-dark me-2">Let's talk</button>
        </div>
    </header>
    </div>
}

export default Header;