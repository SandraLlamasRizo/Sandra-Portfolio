import TiltedCard from "../Cards/TiltedCard/TiltedCard";
import ScrollFloat from "../TextAnimations/ScrollFloat/ScrollFloat";
import RotatingText from "../TextAnimations/RotatingText/RotatingText";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function Home() {
    
    return <>
        <div className="flex flex-col min-h-screen">
        <Hero />
        <Projects/>

        </div>
        
    </>
}

export default Home;