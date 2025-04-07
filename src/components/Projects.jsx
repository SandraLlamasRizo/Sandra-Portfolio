

function Projects() {
    
    return <>
        <section className="min-h-screen flex flex-col items-start p-10 xl:max-w-9/10 2xl:max-w-8/10 m-auto">
            <h1 className="text-4xl font-bold my-10 text-start px-3 xl:text-7xl">PROJECTS</h1>
            <section className="grid grid-cols-1 w-full gap-10 my-10">
                <div className="rounded-lg xl:rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-5 w-full bg-gray-50">
                    <img src="/Sandra-Portfolio/iMac-CRM.png" alt="" className="col-span-3"/>
                    <div className="col-span-2 text-gray-700 p-6 flex flex-col justify-center items-center gap-5">
                        <h5 className="text-5xl font-bold text-center xl:text-7">CRM-people</h5>
                        <p></p>
                        <p className="text-lg xl:text-4xl">Frontend developer</p>
                        <p className="text-lg xl:text-4xl"><small>REACT - JavaScript</small></p>
                        <button type="button" className="border border-gray-600 xl:border-2 text-gray-600 px-4 py-2 rounded hover:bg-purple-700 hover:text-white transition cursor-pointer xl:text-4xl xl:px-8 xl:py-4 xl:rounded-xl mt-5">See more</button>
                    </div>
                </div>
                <div className="rounded-lg xl:rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-5 w-full bg-gray-50">
                    <div className="col-span-2 text-gray-700 p-6 flex flex-col justify-center items-center gap-5">
                        <h5 className="text-5xl font-bold text-center xl:text-7">Daily Sandra Gazette</h5>
                        <p></p>
                        <p className="text-lg xl:text-4xl">Frontend developer</p>
                        <p className="text-lg xl:text-4xl"><small>Angular- JavaScript</small></p>
                        <button type="button" className="border border-gray-600 xl:border-2 text-gray-600 px-4 py-2 rounded hover:bg-purple-700 hover:text-white transition cursor-pointer xl:text-4xl xl:px-8 xl:py-4 xl:rounded-xl mt-5">See more</button>
                    </div>
                    <img src="/Sandra-Portfolio/iMac-DailySandraGazette.png" alt="" className="col-span-3"/>
                </div>
                <div className="rounded-lg xl:rounded-2xl 2xl:rounded-4xl shadow-lg grid grid-cols-1 md:grid-cols-5 w-full bg-gray-50">
                    <img src="/Sandra-Portfolio/iMac-ThriftShop.png" alt="" className="col-span-3"/>
                    <div className="col-span-2 text-gray-700 p-6 flex flex-col justify-center items-center gap-5">
                        <h5 className="text-5xl font-bold text-center xl:text-7">Thrift Shop</h5>
                        <p></p>
                        <p className="text-lg xl:text-4xl">Frontend developer</p>
                        <p className="text-lg xl:text-4xl"><small>JavaScript - CSS - HTML</small></p>
                        <button type="button" className="border border-gray-600 xl:border-2 text-gray-600 px-4 py-2 rounded hover:bg-purple-700 hover:text-white transition cursor-pointer xl:text-4xl xl:px-8 xl:py-4 xl:rounded-xl mt-5">See more</button>
                    </div>
                </div>
                <div className="rounded-lg xl:rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-5 w-full bg-gray-50">
                    <div className="col-span-2 text-gray-700 p-6 flex flex-col justify-center items-center gap-5">
                        <h5 className="text-5xl font-bold text-center xl:text-7">Hamburgueseria Rovers</h5>
                        <p></p>
                        <p className="text-lg xl:text-4xl">Frontend developer</p>
                        <p className="text-lg xl:text-4xl"><small>HTML - CSS</small></p>
                        <button type="button" className="border border-gray-600 xl:border-2 text-gray-600 px-4 py-2 rounded hover:bg-purple-700 hover:text-white transition cursor-pointer xl:text-4xl xl:px-8 xl:py-4 xl:rounded-xl mt-5">See more</button>
                    </div>
                    <img src="/Sandra-Portfolio/iMac-HamburgueseriaRovers.png" alt="" className="col-span-3"/>
                </div>
                <div className="rounded-lg xl:rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-5 w-full bg-gray-50">
                    <img src="/Sandra-Portfolio/iphone14Pro-Aeroyogui.png" alt="" className="col-span-3 max-h-[2000px]"/>
                    <div className="col-span-2 text-gray-700 p-6 flex flex-col justify-center items-center gap-5 xl:gap-20">
                        <h5 className="text-5xl font-bold text-center xl:text-7">Aero Yogui</h5>
                        <p></p>
                        <p className="text-lg xl:text-4xl">UX/UI Designer</p>
                        <p className="text-lg xl:text-4xl"><small>Figma</small></p>
                        <button type="button" className="border border-gray-600 xl:border-2 text-gray-600 px-4 py-2 rounded hover:bg-purple-700 hover:text-white transition cursor-pointer xl:text-4xl xl:px-8 xl:py-4 xl:rounded-xl mt-5">See more</button>
                    </div>
                </div>
            </section>
            
        </section>
    </>
}

export default Projects;