function Classes(){
    return(
        <>
            <div className="bg-gray-100 my-4 p-4" id="classes">
                <div className="text-center py-2">
                    <label className="text-[12px] text-green-500 bg-green-100 fw-bold p-1 ">Our Classes</label>
                </div>
                <h1 className="text-center fw-bold text-[1rem] md:text-[1.5rem] ">Choose Your Class</h1>
                {/* classes table */}
                <table className="container bg-white">
                    {/* first row */}
                    <tr className="bg-green-50 ">
                        <td className="w-[70%] p-3 m-5">
                        <h1 className=" fw-bold text-[13px] md:text-[1.5rem] ">Creaive Writing</h1>
                        <p className="text-[6px] md:text-[12px] text-gray-500 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, officiis mollitia veritatis omnis accusamus eaque qui commodi laudantium odio ipsa ea similique molestias,</p>
                        </td>
                        <td className="0% text-right p-3 m-5">
                            <p className="text-[6px] md:text-[12px] text-gray-500 ">Mon-Fri: 12:00 - 14:30 <br /> Sunday: 17:00 - 19:30 </p>
                            
                        </td>
                    </tr>
                    {/* second row */}
                    <tr>
                        <td className="w-[70%] p-3 m-5">
                        <h1 className=" fw-bold text-[13px] md:text-[1.5rem] ">3d Graphics</h1>
                        <p className="text-[6px] md:text-[12px] text-gray-500 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, officiis mollitia veritatis omnis accusamus eaque qui commodi laudantium odio ipsa ea similique molestias,</p>
                        </td>
                        <td className="0% text-right p-3 m-5">
                            <p className="text-[6px] md:text-[12px] text-gray-500 ">Mon-Fri: 10:00 - 12:30 <br /> Sunday: 16:00 - 18:30 </p>
                            
                        </td>
                    </tr>
                    {/* third row */}
                    <tr className="bg-green-50 ">
                        <td className="w-[70%] p-3 m-5">
                        <h1 className=" fw-bold text-[13px] md:text-[1.5rem] ">Art and Desiegn</h1>
                        <p className="text-[6px] md:text-[12px] text-gray-500 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, officiis mollitia veritatis omnis accusamus eaque qui commodi laudantium odio ipsa ea similique molestias,</p>
                        </td>
                        <td className="0% text-right p-3 m-5">
                            <p className="text-[6px] md:text-[12px] text-gray-500 ">Mon-Thu: 10:00 - 12:30 <br /> Friday: 17:00 - 19:30 </p>
                            
                        </td>
                    </tr>
                    {/* fourth row */}
                    <tr>
                        <td className="w-[70%] p-3 m-5">
                        <h1 className=" fw-bold text-[13px] md:text-[1.5rem] ">Programming</h1>
                        <p className="text-[6px] md:text-[12px] text-gray-500 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, officiis mollitia veritatis omnis accusamus eaque qui commodi laudantium odio ipsa ea similique molestias,</p>
                        </td>
                        <td className="0% text-right p-3 m-5">
                            <p className="text-[6px] md:text-[12px] text-gray-500 ">Mon-Fri: 12:00 - 14:30 <br /> Sunday: 17:00 - 19:30 </p>
                            
                        </td>
                    </tr>
                    {/* fifth row */}
                    <tr className="bg-green-50 ">
                        <td className="w-[70%] p-3 m-5">
                        <h1 className=" fw-bold text-[13px] md:text-[1.5rem] ">Computer Science</h1>
                        <p className="text-[6px] md:text-[12px] text-gray-500 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, officiis mollitia veritatis omnis accusamus eaque qui commodi laudantium odio ipsa ea similique molestias,</p>
                        </td>
                        <td className="0% text-right p-3 m-5">
                            <p className="text-[6px] md:text-[12px] text-gray-500 ">Mon-Fri: 10:00 - 10:30 <br /> Sunday: 17:00 - 19:30 </p>
                            
                        </td>
                    </tr>
                </table>
                <div className="text-center">
                    <button className="text-white w-[100px] p-2  mt-3 bg-green-900 text-[10px] hover:bg-green-600 fw-bold transition duration-[300ms] rounded">Read More</button>
                </div>
            </div>
        </>
    )
}
export default Classes;