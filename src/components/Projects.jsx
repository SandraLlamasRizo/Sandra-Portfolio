

function Projects() {
    
    return <>
        <section className="min-h-screen flex flex-col items-start px-4 py-10">
            <h1 className="text-4xl font-bold mb-10 text-start">PROJECTS</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img src="/Sandra-Portfolio/CRM-people" className="w-full h-64 object-cover" alt="..."/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-6 flex flex-col justify-end">
                        <h5 className="text-2xl font-bold">CRM-people</h5>
                        <p className="text-sm">Frontend developer</p>
                        <p className="text-xs"><small>REACT - JavaScript</small></p>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </section>
            
        </section>
    </>
}

export default Projects;