import AwesomeIcon from "./AwesomeIcono";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    
    return <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-body-secondary">portfolio de San</p>
            <a className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">LOGO</a>
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a className="nav-link px-2 text-body-secondary"><AwesomeIcon icon={faLinkedinIn} /></a></li>
                <li className="nav-item"><a className="nav-link px-2 text-body-secondary"><AwesomeIcon icon={faGithub
                } /></a></li>
                <li className="nav-item"><a className="nav-link px-2 text-body-secondary">About</a></li>
                <li className="nav-item"><a className="nav-link px-2 text-body-secondary">Contact</a></li>
            </ul>
    </footer>

    </div>
}

export default Footer;