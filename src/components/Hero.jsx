import RotatingText from "../TextAnimations/RotatingText/RotatingText";

function Hero() {
    
    return <>
        <section className="w-full min-h-[calc(100vh-70px)] border-b flex justify-start px-5 lg:justify-center items-center bg-[url('/Background.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="h-full flex flex-col flex-wrap items-center content-center text-center">
                <h1 className="text-5xl md:text-6xl font-bold pt-4">Hi, I'm San! </h1>
                <p className="text-lg md:text-xl text-purple-700 font-medium">Frontend Developer | UX/UI Designer</p>
                <p className="text-xl md:text-2xl pb-5">Bringing ideas to life through code & design✨</p>
                <div className="flex flex-row items-center justify-center gap-3 mt-5 pt-5">
                    <h2 className="text-xl md:text-2xl">I love to</h2>
                    <div className="px-3 bg-purple-700 text-white text-3xl rounded-2xl">
                    <RotatingText
                        texts={['Create✨', 'Design🎨', 'Code👩🏻‍💻', 'Learn📚', 'Think💡']}
                        mainClassName="overflow-hidden w-fit text-xl md:text-2xl"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
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