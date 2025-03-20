import { FaFacebook, FaInstagram, FaLinkedinIn, FaTelegram, FaYahoo, FaYoutube } from "react-icons/fa6";

function Footer(){
    return(
        <>
            <div className="container-fluid p-3 bg-cyan-900" id="footer">
                <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2">
                    {/* Advanced logo and para dev */}
                    <div className="px-3">
                        <h2 className="text-gray-50 mt-4 text-[1.2rem] fw-bold ">AdvancEd</h2>
                        <p className="text-[10px] md:text-[12px] text-gray-300 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dignissimos voluptates nemo nulla quo at vitae doloribus deserunt laudantium unde aliquam ad!</p>
                        <a href="#" className="text-green-500 text-[12px] text-decoration-none fw-bold">More About Us</a>
                    </div>
                    <div className="px-3">
                        {/* footer anchors */}
                        <div className="flex gap-4  mt-3">
                            <a href="#about" className="text-gray-50 text-decoration-none fw-bold text-[12px] md:text-[1rem] hover:text-green-400 duration-[200ms]">About Us</a>
                            <a href="#classes" className="text-gray-50 text-decoration-none fw-bold text-[12px] md:text-[1rem] hover:text-green-400 duration-[200ms]">Classes</a>
                            <a href="#" className="text-gray-50 text-decoration-none fw-bold text-[12px] md:text-[1rem] hover:text-green-400 duration-[200ms]">Shop</a>
                            <a href="#" className="text-gray-50 text-decoration-none fw-bold text-[12px] md:text-[1rem] hover:text-green-400 duration-[200ms]">Blog</a>
                            <a href="#contact" className="text-gray-50 text-decoration-none fw-bold text-[12px] md:text-[1rem] hover:text-green-400 duration-[200ms]">Contact</a>
                        </div>
                        {/* Contact Devs */}
                        <div className="flex gap-x-5">
                            {/* first contact dev */}
                            <div>
                                <h2 className="text-gray-50 mt-4 text-[12px] fw-bold md:text-[1rem]">Contact Us</h2>
                                <a href="#" className="text-green-500 text-[12px] text-decoration-none fw-bold">+93 77 69 92 603</a> <br />
                                <a href="#" className="text-green-500 text-[12px] text-decoration-none fw-bold">mrwiyarahmadzai@gmail.com</a>
                            </div>
                            {/* second contact dev */}
                            <div>
                                <h2 className="text-gray-50 mt-4 text-[12px] fw-bold md:text-[1rem]">Contact Us</h2>
                                <a href="#" className="text-green-500 text-[12px] text-decoration-none fw-bold">+93 77 69 92 603</a> <br />
                                <a href="#" className="text-green-500 text-[12px] text-decoration-none fw-bold">mrwiyarahmadzai@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around text-center flex-col md:flex-row py-5">
                    <div className="flex justify-center gap-x-4 text-white">
                        <FaLinkedinIn className="text-[2rem] text-white bg:text-blue-700  hover:translate-y-[-10px] duration-[300ms]"/>
                        <FaFacebook className="text-[2rem] text-blue-700 bg-white rounded-[100%] hover:translate-y-[-10px] duration-[300ms]"/>
                        <FaInstagram className="text-[2rem] bg-white rounded-[100%] text-orange-600 hover:translate-y-[-10px] duration-[300ms]"/>
                        <FaYahoo className="text-[2rem] text-orange-600 bg-white rounded-[100%] hover:translate-y-[-10px] duration-[300ms]"/>
                        <FaTelegram className="text-[2rem] bg-white rounded-[100%] text-blue-700 hover:translate-y-[-10px] duration-[300ms]"/>
                        <FaYoutube className="text-[2rem] text-red-700 hover:translate-y-[-10px] duration-[300ms]"/>
                    </div>
                    <div>
                        <p className="text-[10px] md:text-[1rem] fw-bold text-gray-300 font-sans my-3">All Copyright ©️ Reserved BY Mr.Wiyar MWAD Company and Software Team</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;