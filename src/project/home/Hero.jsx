import home_img1 from "../images/header img1.webp";
import home_img2 from "../images/header img 2.webp";
function Hero(){
    return(
        <>
            <div className="flex justify-center text-center flex-col gap-5 sm:text-center lg:flex-row lg:text-left p-3" id="home">
                <div className="p-5 w-[90%] lg:text-left">
                    <h2 className="text-green-400 text-[12px] md:text-[1rem] py-2 ">Research Your Occupation</h2>
                    <h1  className="fw-bold text-[1.3rem] text-green-950 font-sans pb-5 md:text-[3.5rem] ">Explore Boundless <br /> Opportunities</h1>
                    <p className="text-green-950 text-[12px] ">Discover a world of learning at your fingertips with our online school. Our flexible and accessible platform offers high-quality education tailored to your needs. Lorem ipsum dolor, sit amet  </p>

                    <button className="text-white w-[140px] bg-green-600 py-2 px-3 m-3 h-[3.2rem] hover:bg-green-900 fw-bold transition duration-[300ms] rounded "> Choose Class</button>
                    <button className="text-white w-[140px] bg-green-900 py-2 m-3 h-[3.2rem] hover:bg-green-600 fw-bold transition duration-[300ms] rounded"> Get Started</button>
                </div>
                <div className="w-auto  relative text-center p-5 " >
                    <div className="overflow-hidden md:ml-28">
                        <img src={home_img1} className=" w-[90%] h-auto "/>
                    </div>
                    <div className="overflow-hidden">
                        <img src={home_img2} alt="" className="absolute w-[6rem] h-[9rem] left-[2rem] bottom-[2rem] sm:w-[9rem] sm:h-[12rem] sm:left-[3rem] sm:bottom-[3rem] md:left-[5rem] md:bottom-[2rem] border-5 rounded md:w-[13rem] md:h-[17rem] "/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero;