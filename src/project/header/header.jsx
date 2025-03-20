import { FaShop  } from "react-icons/fa6";
import { useState } from "react";
import logo from "../images/logo.svg"
function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    return(
        <>
        
        <nav className={`z-20 fixed top-0 right-0 left-0  px-4 py-2 radius-bottom shadow bg-gray-50 `}>
            <div className="  flex justify-between items-center">
        
                <div className="flex justify-center">
                    {/* header logo */}
                    <a href="#home" ><img src={logo} alt="" className="w-52 mt-2  " /></a>
                    <div className="hidden md:flex  space-x-4 pl-10 ">
                        <a href="#home" className={`text-md font-semibold md:text-[11px] lg:text-[1rem] text-green-950 no-underline block px-1 py-3 hover:text-green-800 `}>Demos</a>
                        <a href="#about" className={`text-md font-semibold md:text-[11px] lg:text-[1rem] text-green-950 no-underline block px-1 py-3 hover:text-green-800 `}>About Us</a>
                        <a href="#classes" className={`text-md font-semibold md:text-[11px] lg:text-[1rem] text-green-950 no-underline block px-1 py-3 hover:text-green-800 `}>Classes</a>
                        <a href="#programs" className={`text-md font-semibold md:text-[11px] lg:text-[1rem] text-green-950 no-underline block px-1 py-3 hover:text-green-800 `}>Programs</a>
                        <a href="#footer" className={`text-md font-semibold md:text-[11px] lg:text-[1rem] text-green-950 no-underline block px-1 py-3 hover:text-green-800 `}>All Pages</a>
                    
                    </div>
                </div>
        
        
                <div className="flex">
                <button className="mx-2 ">
                    <FaShop className="w-20"/>
                </button>
                <button onClick={toggleMenu} className="md:hidden text-2xl text-Black focus:outline-none">
                    {isOpen ? <h4 className="pt-2">X</h4> : ' ☰'}
                </button>
                <div className="hidden md:flex space-x-4 ">
                    {/* Nav anchors */}
                    <a href="#name" className="text-md font-semibold no-underline text-white h-100 w-100 bg-green-950 hover:bg-green-400 py-[20px]  px-[30px]   sm:hidden lg:block">Start Learning</a>
                </div>
                </div>
            </div>

            <div className={`py-4 w-[25%] ${isOpen ? 'block' : 'hidden'} md:hidden`}>
       
                <a href="#demos" className={`text-md font-semibold text-[12px] text-green-950 no-underline block py-3 hover:text-green-800`}>Demos</a>
                <a href="#about" className={`text-md font-semibold text-[12px] text-green-950 no-underline block px-1 py-3 hover:text-green-800`}>About Us</a>
                <a href="#classes" className={`text-md font-semibold text-[12px] text-green-950 no-underline block px-1 py-3 hover:text-green-800`}>Classes</a>
                <a href="#programs" className={`text-md font-semibold text-[12px] text-green-950 no-underline block px-1 py-3 hover:text-green-800`}>Programs</a>
                <a href="#all-pages" className={`text-md font-semibold text-[12px] text-green-950 no-underline block px-1 py-3 hover:text-green-800`}>All Pages</a>
        
            </div>
        </nav>
        </>
    )
}
export default Header;