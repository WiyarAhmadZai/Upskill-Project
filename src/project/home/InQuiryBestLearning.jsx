import img1 from "../images/technologi img 1.jpg";
import img2 from "../images/technology img2.jpg";
function Inquiry(){
    return(
        <>
            <div className="container px-5 py-2 shadow rounded ">
                <h4 className="text-[12px] md:text-[1rem] text-green-950 font-sans">Unlocking the power of Inquiry-Based Learning</h4>
                <p className="text-[10px] md:text-[12px] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, perspiciatis placeat. Sequi libero vero quia dolor, maiores officia consequuntur dolores?</p>
                <a href="#" className="text-green-500 text-[12px] text-decoration-none fw-bold">More Info</a>
            </div>
            {/* main container */}
            <div className="container flex flex-col md:flex-row gap-4 px-3 my-5"> 
                {/* first card */}
                <div className="flex gap-x-3 bg-gray-100 ">
                    <div className="w-[100%] overflow-hidden">
                        <img src={img1} alt="" className="w-[100%] h-[100%] scale-[1] hover:scale-[1.1] duration-[300ms]"/>
                    </div>
                    <div className="p-3 w-[100%]">
                        <h2 className="text-[1rem] text-green-950 font-sans">Harnessing Technology for Effective Learning</h2>
                        <p className="text-[10px] md:text-[10px] text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio consequatur repellat fugiat dolores. Itaque id praesentium ipsa blanditiis accusantium tempore ut suscipit molestiae, unde deserunt.</p>
                        <a href="#" className="text-green-500 text-[12px] text-decoration-none fw-bold">Read More</a>
                    </div>
                </div>
                {/* second card */}
                <div className="flex gap-x-3 bg-gray-100 ">
                    <div className="w-[100%] overflow-hidden">
                        <img src={img2} alt="" className="w-[100%] h-[100%] scale-[1] hover:scale-[1.1] duration-[300ms] " />
                    </div>
                    <div className="p-3 w-[100%]">
                        <h2 className="text-[1rem] text-green-950 font-sans">Harnessing Technology for Effective Learning</h2>
                        <p className="text-[10px] md:text-[10px] text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio consequatur repellat fugiat dolores. Itaque id praesentium ipsa blanditiis accusantium tempore ut suscipit molestiae, unde deserunt.</p>
                        <a href="#" className="text-green-500 text-[12px] text-decoration-none fw-bold">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Inquiry;