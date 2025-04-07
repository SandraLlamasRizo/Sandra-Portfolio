import CircularText from "../TextAnimations/CircularText/CircularText";
import AwesomeIcon from "./AwesomeIcono";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    
    return  <footer className="footer w-full lg:max-w-7/10 m-auto px-4 py-6 text-center flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 xl:text-xl">portfolio de San</p>
            <div className="flex items-center justify-center">
                <CircularText text="SAN*WEB*DEV*"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class" />
            </div>
            <ul className="flex justify-center gap-4 xl:text-xl">
                <li><a className="text-gray-500 hover:text-black"><AwesomeIcon icon={faLinkedinIn} /></a></li>
                <li><a className="text-gray-500 hover:text-black"><AwesomeIcon icon={faGithub
                } /></a></li>
                <li><a className="text-gray-500 hover:text-black cursor-pointer">About</a></li>
                <li><a className="text-gray-500 hover:text-black cursor-pointer">Contact</a></li>
            </ul>
    </footer>
}

export default Footer;