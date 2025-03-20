import img from "../images/about school img.webp"
function About(){
    return(
        <>
            <div className="container flex flex-col justify-center text-center gap-4 items-center md:flex-row my-5 md:text-left" id="about">
                <div className="p-5">
                    <div className="md:text-left px-4">
                        <label className="text-[12px]  text-green-500 bg-green-100 fw-bold p-1 ">About Us</label>
                    </div>
                    <h1 className="fw-bold pt-1 font-sans px-4 md:text-left lg:text-lg">About School</h1>
                    <p className="text-[10px] md:text-[14px] md:text-left text-gray-500 px-4 font-sans ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quaerat libero cum. Sit modi dolorum veritatis maxime molestias quam fugiat corrupti asperiores deserunt!</p>
                    <div className="flex flex-col md:flex-row text-left">
                        <div>
                            <ul className="list-disc">
                                <li className="text-[12px] text-gray-500 md:text-[14px]">
                                    Flexibilty
                                </li>
                                <li className="text-[12px] text-gray-500 md:text-[14px]">
                                    Vareities of courses
                                </li>
                                <li className="text-[12px] text-gray-500 md:text-[14px]">
                                    uses of technologies
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <ul className="list-disc">
                                <li className="text-[12px] text-gray-500 md:text-[14px]">
                                    Flexibilty
                                </li>
                                <li className="text-[12px] text-gray-500 md:text-[14px]">
                                    Vareities of courses
                                </li>
                                <li className="text-[12px] text-gray-500 md:text-[14px]">
                                    uses of technologies
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="md:text-left px-4">
                    <button className="text-white w-[100px] p-2  mt-3 bg-green-900 text-[10px] hover:bg-green-600 fw-bold transition duration-[300ms] rounded">More About US</button>
                    </div>
                </div>
                <div className="w-[90%] overflow-hidden rounded">
                    <img src={img} alt=""  className="  w-[100%] scale-[1] hover:scale-[1.2] duration-[300ms] "/>
                </div>
            </div> <br />
            <div className="container grid text-center gap-0 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-5">
                <div className="hover:border-b-2">
                    <h1 className="fw-bold pt-1 font-sans px-4 lg:text-lg">20+</h1>
                    <p className="text-[10px] md:text-[14px] text-gray-500 px-4 font-sans ">Profesional Teachers</p>
                </div>
                <div className="hover:border-b-2">
                    <h1 className="fw-bold pt-1 font-sans px-4 lg:text-lg">54</h1>
                    <p className="text-[10px] md:text-[14px] text-gray-500 px-4 font-sans ">Learnig Groups</p>
                </div>
                <div className="hover:border-b-2">
                    <h1 className="fw-bold pt-1 font-sans px-4 lg:text-lg">900+</h1>
                    <p className="text-[10px] md:text-[14px] text-gray-500 px-4 font-sans ">Happy Students</p>
                </div>
                <div className="hover:border-b-2">
                    <h1 className="fw-bold pt-1 font-sans px-4 lg:text-lg">8</h1>
                    <p className="text-[10px] md:text-[14px] text-gray-500 px-4 font-sans ">Special Classes</p>
                </div>
            </div>
        </>
    )
}
export default About;