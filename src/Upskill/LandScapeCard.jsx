/* eslint-disable react/prop-types */
function Landscape(props){
    return(
        <>
            <div className="flex gap-x-3 w-[100%] items-center container">
                <div>
                    <img src={props.img} alt="" className="rounded-lg w-[90%]" />
                </div>
                <div>
                    <h2 className="text-[9px]">Arlene McCoy</h2>
                    <p className="text-[8px]">Instructor</p>
                </div>
                <div>
                    <button className="border-gray-400 border-1 rounded text-gray-400 text-center text-[12px] w-[4rem] fw-bold py-1 hover:bg-cyan-950 duration-[400ms] ">Connect</button>
                </div>

            </div>
        </>
    )
}
export default Landscape;