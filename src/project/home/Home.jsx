import {FaSalesforce, FaShop,  } from "react-icons/fa6"
import Header from "../header/header";
import Hero from "./Hero";
import Programs from "./OurPrograms";
import About from "./About";
import Media from "./OurMedia";
import Classes from "./Classes";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Inquiry from "./InQuiryBestLearning";
import Footer from "./Footer";

const Home =()=>{
    return(
        <>
            {/* absolute buttons */}
            <div className="hidden md:block md:fixed  md:bottom-[70px] md:right-[20px] z-20">
                <button className="flex gap-x-2 items-center bg-blue-700 text-white px-2 py-1 rounded outline-none font-sans fw-bold text-[12px] z-20 my-2"> <FaShop/> Buy this Templete </button>
                <button className=" flex gap-x-2 items-center bg-white text-blue-700 px-2 py-1 rounded outline-gray-400 font-sans fw-bold text-[12px]  hover:text-black transition duration-[200ms] z-20 "> <FaSalesforce className="text-black"/> Buy this Templete </button>
            </div>
            {/* end of absolote buttons */}
            <Header/> <br /> <br /> <br /> <br /> <br /> <br />
            <Hero/>
            <Programs/>
            <About/>
            <Media/>
            <Classes/>
            <Testimonial/>
            <Team/>
            <Inquiry/>
            <Footer/>
            
        </>
    )
}
export default Home;