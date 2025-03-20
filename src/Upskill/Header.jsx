import { FaBell, FaMessage  } from "react-icons/fa6";
import { useState } from "react";
import logo from "../images/New Logo-07 2.png"
import { FaSearch } from "react-icons/fa";
import img from "../images/Avatar.png"
function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    return(
        <>
        
        <nav className={`z-20 fixed top-0 right-0 left-0  px-4 py-2 radius-bottom `}>
            <div className="  flex justify-between items-center">
        
                <div className="flex justify-center">
                    {/* header logo */}
                    <a href="#home" ><img src={logo} alt="" className="w-[100%] mt-2  " /></a>
                    <div className="hidden md:flex  space-x-4 pl-10 ">
                        <a href="#home" className={`text-md font-semibold md:text-[11px] lg:text-[1rem] text-gray-950 fw-bold no-underline block px-1 py-3 hover:text-gray-800 `}>Explore Courses</a>
                        <a href="#about" className={`text-md font-semibold md:text-[11px] lg:text-[1rem] text-gray-950 fw-bold no-underline block px-1 py-3 hover:text-gray-800 `}>Upskill Plus</a>
                        <a href="#classes" className={`text-md font-semibold md:text-[11px] lg:text-[1rem] text-gray-950 fw-bold no-underline block px-1 py-3 hover:text-gray-800 `}>Teach</a>
                       
                    
                    </div>
                </div>
        
        
                <div className="flex">
                    <div className="hidden md:flex space-x-4 ">
                        {/* Nav anchors */}
                        <div className="flex  items-center">
                            <div className="hidden lg:flex items-center center border-gray-400 border-1 rounded">
                                <input type="text" placeholder="What do you want to learn?" className="bg-gray-200 outline-none border-none px-3 py-1 focus:outline-none fw-bold text-[12px]"/>
                                <FaSearch className="bg-blue-500 text-gray-50 text-[2rem] p-2 "/>
                            </div>
                            <span className="hidden lg:inline text-gray-600 ml-3 text-[1rem]">|</span>
                            <FaBell className="bg-blue-200 text-blue-600 text-[14px] w-[100%] h-[100%] px-[10px] rounded ml-2"/>
                            <FaMessage className="bg-blue-200 text-blue-600 text-[14px] w-[100%] h-[100%] px-[10px] rounded ml-2"/>
                            <img src={img} alt="Profile" className="ml-2 float-right"/>

                        </div>
                    </div>  
                    <button className="mx-2 ">
                        
                    </button>
                    <button onClick={toggleMenu} className="md:hidden text-2xl text-Black focus:outline-none">
                        {isOpen ? <h4 className="pt-2">X</h4> : ' ☰'}
                    </button>
                    
                </div>
            </div>

            <div className={`py-4 w-[25%] ${isOpen ? 'block' : 'hidden'} md:hidden`}>
       
                <a href="#demos" className={`text-md font-semibold text-[12px] text-green-950 no-underline block py-3 hover:text-green-800`}>Explore Courses</a>
                <a href="#about" className={`text-md font-semibold text-[12px] text-green-950 no-underline block px-1 py-3 hover:text-green-800`}>Upskill Plus</a>
                <a href="#classes" className={`text-md font-semibold text-[12px] text-green-950 no-underline block px-1 py-3 hover:text-green-800`}>Teach</a>
                
        
            </div>
        </nav>
        </>
    )
}
export default Header;