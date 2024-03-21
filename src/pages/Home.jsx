import Hero from "../component/Hero";
import image from '../assets/wave.svg'

const Home = () => {
    return (
        <div className="flex flex-col justify-center min-h-[calc(100vh-116px)] relative">
            <Hero></Hero>

            <img className=" absolute bottom-0 w-full" src={image} alt="" />
        </div>
    );
};

export default Home;