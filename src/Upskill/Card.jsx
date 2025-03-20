import { FaLine, FaStar } from "react-icons/fa6";

/* eslint-disable react/prop-types */
function Cards(props){
    return(
        <>
            <div className="w-[100%] motion-translate-x-in-100 motion-translate-y-in-75 ">
                <div className="overflow-hidden relative">
                <img src={props.img} alt=""  className="w-[100%] rounded scale-[1] hover:scale-[1.05] duration-[400ms]"/>
                <div className="flex justify-between absolute bottom-0 w-[100%] px-1">
                    <h2 className="flex gap-x-1 fw-bold bg-[rgba(0,0,0,0.1)] px-2 text-white"><FaStar className="text-yellow-500"/> <span>{props.star}</span></h2>
                    <h2 className="flex gap-x-1 fw-bold bg-[rgba(0,0,0,0.1)] px-2 text-white"><FaLine className="text-yellow-500"/> <span>Artical</span></h2>

                </div>
                </div>
                <div className="card-content">
                    <h2 className="pt-3 fw-bold text-[14px] md:text-[1rem] px-2">{props.header}</h2>
                    <p className="text-gray-500 text-[12px] md:text-[14px] px-2">{props.para}</p>
                </div>
            </div>
        </>
    )
}
export default Cards;