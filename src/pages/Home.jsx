import TiltedCard from "../Cards/TiltedCard/TiltedCard";
import ScrollFloat from "../TextAnimations/ScrollFloat/ScrollFloat";
import RotatingText from "../TextAnimations/RotatingText/RotatingText";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function Home() {
    
    return <>
        <div className="mx-2 mx-xl-5 px-xl-5">
        <Hero />
        <Projects/>

        </div>
        
    </>
}

export default Home;