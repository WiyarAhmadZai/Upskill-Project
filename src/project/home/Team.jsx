import { FaFacebook, FaInstagram } from "react-icons/fa6"
import img1 from "../images/our teachers img 1.jpg"
import img2 from "../images/our teachers img2.jpg"
import img3 from "../images/our teachers img3.jpg"
import img4 from "../images/our teachers img4.jpg"
function Team(){
    return(
        <>
        <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center rounded p-5"> 
            {/* first card */}
            <div className="text-center shadow bg-white rounded-bottom pb-3 w-[100%]">
                <div className="overflow-hidden">
                    <img src={img1} alt="" className="scale-[1] hover:scale-[1.1] duration-[300ms]"/>
                </div>
                <h1 className="text-[14px] fw-bold mt-2  text-green-950">Wisdom Program</h1>
                
                <div className="flex justify-center gap-2  text-green-950 ">
                <a href=""><FaFacebook className="bg-blue-700 rounded-lg text-white text-[1.1rem]"/> </a>
                <a href=""><FaInstagram className="bg-orange-700 text-white rounded-lg text-[1.1rem]"/></a>
                </div>
            </div>
            {/* second Card */}
            <div className="text-center shadow bg-white rounded-bottom pb-3 w-[100%]">
                <div className="overflow-hidden">
                    <img src={img2} alt="" className="scale-[1] hover:scale-[1.1] duration-[300ms]"/>
                </div>
                <h1 className="text-[14px] fw-bold mt-2  text-green-950">Emily Smith</h1>
                
                <div className="flex justify-center gap-2  text-green-950 ">
                <a href=""><FaFacebook className="bg-blue-700 rounded-lg text-white text-[1.1rem]"/> </a>
                <a href=""><FaInstagram className="bg-orange-700 text-white rounded-lg text-[1.1rem]"/></a>
                </div>
            </div>
            {/* third Card */}
            <div className="text-center shadow bg-white rounded-bottom pb-3 w-[100%]">
                <div className="overflow-hidden">
                    <img src={img3} alt="" className="scale-[1] hover:scale-[1.1] duration-[300ms]"/>
                </div>
                <h1 className="text-[14px] fw-bold mt-2  text-green-950">Daniel Brown</h1>
                
                <div className="flex justify-center gap-2  text-green-950 ">
                <a href=""><FaFacebook className="bg-blue-700 rounded-lg text-white text-[1.1rem]"/> </a>
                <a href=""><FaInstagram className="bg-orange-700 text-white rounded-lg text-[1.1rem]"/></a>
                </div>
            </div>
            {/* Fourth Card */}
            <div className="text-center shadow bg-white rounded-bottom pb-3 w-[100%]">
                <div className="overflow-hidden">
                    <img src={img4} alt="" className="scale-[1] hover:scale-[1.1] duration-[300ms]"/>
                </div>
                <h1 className="text-[14px] fw-bold mt-2 text-green-950">Jasmine Rodriguez</h1>
                
                <div className="flex justify-center gap-2  text-green-950 ">
                <a href=""><FaFacebook className="bg-blue-700 rounded-lg text-white text-[1.1rem]"/> </a>
                <a href=""><FaInstagram className="bg-orange-700 text-white rounded-lg text-[1.1rem]"/></a>
                </div>
            </div>
        </div>
        <div className="text-center">
            <button className="text-white w-[100px] p-2 mb-4 bg-green-900 text-[10px] hover:bg-green-600 fw-bold transition duration-[300ms] rounded">View All</button>
        </div>
        </>
    )
}
export default Team;