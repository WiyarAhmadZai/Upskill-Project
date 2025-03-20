import img from "../images/icon-star.svg";
function Testimonial(){
    return(
        <>
            <div className="text-center py-4">
                    <label className="text-[12px] text-green-500 bg-green-100 fw-bold p-1 ">Our Classes</label>
            </div>
                <h1 className="text-center fw-bold text-[1.5rem] md:text-[1.7rem] ">Choose Your Class</h1>
            {/* main container */}
            <div className="container grid grid-cols-2 justify-center md:grid-cols-3 py-3 px-28">
                {/* first card */}
                <div className="p-4 rounded text-gray-500 hover:bg-green-950 duration-[400ms]  hover:text-gray-50">
                    <div className="flex py-3">
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                    </div>
                    <p className="text-[10px] md:text-[12px]">Lorem, ipsum dolor.</p>
                    <p className="text-[10px] md:text-[12px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quos esse aut praesentium quibusdam, architecto quia ducimus temporibus</p>
                    <p className="text-[10px] md:text-[12px]">Lorem, ipsum dolor.</p>
                </div>
                {/* second card */}
                <div className="p-4 rounded text-gray-500 hover:bg-green-950 duration-[400ms]  hover:text-gray-50">
                    <div className="flex py-3">
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                    </div>
                    <p className="text-[10px] md:text-[12px]">Lorem, ipsum dolor.</p>
                    <p className="text-[10px] md:text-[12px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quos esse aut praesentium quibusdam, architecto quia ducimus temporibus</p>
                    <p className="text-[10px] md:text-[12px]">Lorem, ipsum dolor.</p>
                </div>
                {/* third Card */}
                <div className="p-4 rounded text-gray-500 hover:bg-green-950 duration-[400ms]  hover:text-gray-50">
                    <div className="flex py-3">
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                    </div>
                    <p className="text-[10px] md:text-[12px]">Lorem, ipsum dolor.</p>
                    <p className="text-[10px] md:text-[12px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quos esse aut praesentium quibusdam, architecto quia ducimus temporibus</p>
                    <p className="text-[10px] md:text-[12px]">Lorem, ipsum dolor.</p>
                </div>
            </div>

           
        </>
    )
}
export default Testimonial;