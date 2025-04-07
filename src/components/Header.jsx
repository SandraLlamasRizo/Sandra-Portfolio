import CircularText from "../TextAnimations/CircularText/CircularText";


function Header() {
    
    return <div className=" header">
        <header className="mx-auto flex lg:flex-row flex-wrap items-center justify-center md:justify-between py-4 mb-0 border-b gap-3 px-4">
        <div className="flex-1 w-fit">
            <CircularText text="SAN*WEB*DEV*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class" />
        </div>
        <ul className="flex-1 flex flex-wrap flex-row justify-center content-center gap-4">
            <li> <a className="text-lg font-medium text-gray-600 hover:text-purple-500 cursor-pointer active">Portfolio</a></li>
            <li> <a className="text-lg font-medium text-gray-600 hover:text-purple-500 cursor-pointer ">Projects</a></li>
            <li> <a className="text-lg font-medium text-gray-600 hover:text-purple-500 cursor-pointer ">About</a></li>
            <li> <a className="text-lg font-medium text-gray-600 hover:text-purple-500 cursor-pointer ">Resume</a></li>
        </ul>
        <div className="flex-1 text-center">
            <button type="button" className="border border-gray-600 text-gray-600 px-4 py-2 rounded hover:bg-black hover:text-white transition cursor-pointer">Let's talk</button>
        </div>
    </header>
    </div>
}

export default Header;