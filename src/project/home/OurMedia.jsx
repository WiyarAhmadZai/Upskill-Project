import video from "../images/671218a312747ac394420992_Video-transcode.mp4";
function Media(){
    return(
        <>
            <div className="p-5">
                <div className="text-center py-2">
                    <label className="text-[12px] text-green-500 bg-green-100 fw-bold p-1 ">Our Media</label>
                </div>
                <h1 className="text-center fw-bold text-[1rem] md:text-[1.5rem] ">Teaching Our Students</h1>
                <p className="text-[10px] md:text-[14px] text-gray-500 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quasi fugiat accusamus quo vel laboriosam, debitis adipisci blanditiis. Porro ipsam maxime aliquam ullam vitae a perspiciatis soluta laboriosam commodi illo!</p>
            </div>
            <video src={video} controls autoPlay loop muted className="px-4 rounded container"></video>
        </>
    )
}
export default Media;