import RotatingText from "../TextAnimations/RotatingText/RotatingText";

function Hero() {
    
    return <>
        <section className="w-full min-h-screen border-b flex flex-col items-center justify-start pt-50 md:justify-center md:pt-0 gap-4 md:gap-10 md:items-center bg-[url('/Bg-phone.png')] md:bg-[url('/Bg-desktop.png')] bg-cover bg-bottom lg:bg-center bg-no-repeat md:pr-96">
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold pt-4">Hi, I'm San! </h1>
                    <p className="text-lg md:text-xl xl:text-3xl text-purple-700 font-medium pb-5 xl:pb-10">Frontend Developer | UX/UI Designer</p>
                </div>
                <p className="text-xl md:text-2xl xl:text-5xl pb-5 xl:pb-20 text-center">Bringing ideas to life through code & design✨</p>
                <div className="flex flex-row items-center justify-center gap-3 mt-5 pt-5">
                    <h2 className="text-xl md:text-2xl xl:text-4xl">I love to</h2>
                    <div className="px-3 bg-purple-700 text-white rounded-2xl">
                    <RotatingText
                        texts={['Create✨', 'Design🎨', 'Code👩🏻‍💻', 'Learn📚', 'Think💡']}
                        mainClassName="overflow-hidden w-fit text-xl md:text-2xl xl:text-4xl p-1"
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
        </section>
    </>
}

export default Hero;