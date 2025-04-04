import RotatingText from "../TextAnimations/RotatingText/RotatingText";

function Hero() {
    
    return <>
        <section className="hero-section border-bottom d-flex ">
            <div className="h-100 flex-wrap flex-col align-items-center align-content-center">
                    <h1 className="display-1 hero-text pt-4 fw-bolder">Hi, I'm San! </h1>
                    <p className="lead fs-5 fs-md-4 fs-lg-3 active">Frontend Developer | UX/UI Designer</p>
                <p className="fs-3 fs-md-4 fs-lg-5 pb-5">Bringing ideas to life through code & design✨</p>
                <div className="text-wrap d-flex flex-row align-items-center justify-content-center gap-3 mt-5 pt-5">
                    <h2 className="fs-3 fs-md-4 fs-lg-5">I love to </h2>
                    <div className="px-3 purple text-white display-6">
                    <RotatingText
                        texts={['Create✨', 'Design🎨', 'Code👩🏻‍💻', 'Learn📚', 'Think💡']}
                        mainClassName="overflow-hidden w-fit fs-3 fs-md-4 fs-lg-5"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                    </div>
                </div>         
            </div>
        </section>
    </>
}

export default Hero;