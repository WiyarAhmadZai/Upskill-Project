import img1 from "../images/program img 1.jpg";
import img2 from "../images//program img2.jpg";
import img3 from "../images/program img3.jpg";
function Programs(){
    return(
        <>
            <div className="p-5" id="programs">
                <h2 className="text-green-600 text-center text-[12px] md:text-[1rem]">Our Programs</h2>
                <h1 className="text-center fw-bold text-[1rem] md:text-[1.5rem] ">Our Popular Programs</h1>
                <p className="text-[10px] md:text-[14px] text-gray-500 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quasi fugiat accusamus quo vel laboriosam, debitis adipisci blanditiis. Porro ipsam maxime aliquam ullam vitae a perspiciatis soluta laboriosam commodi illo!</p>
            </div>
            {/* our Programs cards */}
            <div className="bg-gray-100 p-5 text-center">
                <div className="grid grid-cols-1 gap-4 justify-center my-4  md:grid-cols-2 lg:grid-cols-3">
                    <div className="text-center shadow bg-white rounded-bottom pb-3">
                        <div className="overflow-hidden">
                            <img src={img1} alt="" className="scale-[1] hover:scale-[1.1] duration-[300ms]"/>
                        </div>
                        <h1 className="text-[1rem] fw-bold mt-2 md:text-[1.5rem] ">Wisdom Program</h1>
                        <p className="text-[10px] md:text-[14px] text-gray-500 text-center px-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, expedita facere odit at, error dolore accusamus atque repellendus saepe quidem officia voluptatum sapiente</p>
                        <a href="#" className="text-green-500 text-decoration-none fw-bold">More Info</a>
                    </div>
                    <div className="text-center shadow bg-white rounded-bottom pb-3">
                        <div className="overflow-hidden">
                            <img src={img2} alt="" className="scale-[1] hover:scale-[1.1] duration-[300ms]"/>
                        </div>
                        <h1 className="text-[1rem] fw-bold mt-2 md:text-[1.5rem]">Wisdom Program</h1>
                        <p className="text-[10px] md:text-[14px] text-gray-500 text-center px-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, expedita facere odit at, error dolore accusamus atque repellendus saepe quidem officia voluptatum sapiente </p>
                        <a href="#" className="text-green-500 text-decoration-none fw-bold">More Info</a>
                    </div>
                    <div className="text-center shadow bg-white rounded-bottom  pb-3">
                        <div className="overflow-hidden">
                            <img src={img3} alt="" className="scale-[1] hover:scale-[1.1] duration-[300ms]"/>
                        </div>
                        <h1 className="text-[1rem] fw-bold mt-2 md:text-[1.5rem]">Wisdom Program</h1>
                        <p className="text-[10px] md:text-[14px] text-gray-500 text-center px-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, expedita facere odit at, error dolore accusamus atque repellendus saepe quidem officia voluptatum sapiente </p>
                        <a href="#" className="text-green-500 text-decoration-none fw-bold">More Info</a>
                    </div>
                </div>
                <button className="text-white w-[110px] bg-green-900  m-3 h-[2rem] hover:bg-green-600 fw-bold transition duration-[300ms] rounded"> View All</button>
            </div>
        </>
    )
}
export default Programs;