import img1 from "../images/24bbeb53.png"
import img2 from "../images/1b43a7fb.png"
import img3 from "../images/74dbfdc9.png"
import img4 from "../images/0be29580.png"
import img5 from "../images/11afee22.png"
import face1 from "../images/Face (1).png"
import face2 from "../images/Face (2).png"
import face3 from "../images/Face (3).png"


import Cards from "./Card"
import Landscape from "./LandScapeCard"

function Hero(){
    return(
        <>
            <div className="mt-[6rem] pl-4">
                <h2 className="fw-bold text-[1rem] md:text-[1.3rem] motion-preset-typewriter-[24]  ">Most Searched Topics</h2>
                <div className="grid grid-cols-4 mt-2 gap-x-16 gap-y-2 sm:grid-cols-6 sm:w-[40%] sm:gap-x-24 md:grid-cols-6 w-[60%] md:w-[40%] md:gap-x-20 lg:gap-x-0">
                    <button className="border-gray-400 border-1 rounded text-gray-400 text-center text-[12px] w-[4rem] fw-bold py-1 hover:bg-cyan-950 duration-[400ms] ">Ui/Ux</button>
                    <button className="border-gray-400 border-1 rounded text-gray-400 text-center text-[12px] w-[4rem] fw-bold py-1 hover:bg-cyan-950 duration-[400ms] ">Ui/Ux</button>
                    <button className="border-gray-400 border-1 rounded text-gray-400 text-center text-[12px] w-[4rem] fw-bold py-1 hover:bg-cyan-950 duration-[400ms] ">Ui/Ux</button>
                    <button className="border-gray-400 border-1 rounded text-gray-400 text-center text-[12px] w-[4rem] fw-bold py-1 hover:bg-cyan-950 duration-[400ms] ">Ui/Ux</button>
                    <button className="border-gray-400 border-1 rounded text-gray-400 text-center text-[12px] w-[4rem] fw-bold py-1 hover:bg-cyan-950 duration-[400ms] ">Ui/Ux</button>
                    <button className="border-gray-400 border-1 rounded text-gray-400 text-center text-[12px] w-[4rem] fw-bold py-1 hover:bg-cyan-950 duration-[400ms] ">Ui/Ux</button>
                </div>

                <h2 className="fw-bold text-[1rem] md:text-[1.3rem] mt-5 pl-8 motion-rotate-in-45 motion-ease-spring-bouncy">Based Selling Course
                    <span className="text-gray-600 ml-3 text-[1rem]">|</span> 
                    <span className="text-blue-400 ml-3 text-[10px] fw-bold md:text-[12px] motion">SEE ALL</span>
                </h2>
            </div>
            {/* fisrt section of cards */}
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-5 mt-4">
                <Cards img={img1} header="Photoshop complete Guide from Zero to hero" para="By: Mr.Wiyar" star="4.5"/>
                <Cards img={img2} header="Creating interactive dashboard with Python" para="By: Khalid" star="5.0"/>
                <Cards img={img3} header="Creating interactive dashboard with Python" para="By: Samad" star="4.3"/>
                <Cards img={img4} header="Creating interactive dashboard with Python" para="Qader" star="4.7"/>
                <Cards img={img5} header="Creating interactive dashboard with Python" para="Tufan" star="5.0"/>
                
            </div>

            {/* Second section of cards */}
            <h2 className="fw-bold text-[1rem] md:text-[1.3rem] mt-5 pl-12">New Courses in <span className="text-blue-400 ">Upskill</span>
                    <span className="text-gray-600 ml-3 text-[1rem]">|</span> 
                    <span className="text-blue-400 ml-3 text-[10px] fw-bold md:text-[12px]">SEE ALL</span>
            </h2>
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-5 mt-4">
                <Cards img={img1} header="Photoshop complete Guide from Zero to hero" para="By: Mr.Wiyar" star="4.5"/>
                <Cards img={img2} header="Creating interactive dashboard with Python" para="By: Khalid" star="5.0"/>
                <Cards img={img3} header="Creating interactive dashboard with Python" para="By: Samad" star="4.3"/>
                <Cards img={img4} header="Creating interactive dashboard with Python" para="Qader" star="4.7"/>
                <Cards img={img5} header="Creating interactive dashboard with Python" para="Tufan" star="5.0"/>
                
            </div>

            {/* THird section of cards */}
            <h2 className="fw-bold text-[1rem] md:text-[1.3rem] mt-5 pl-12">Most Readable Articles in  
                <span className="text-blue-400 "> Upskill</span>
                <span className="text-yellow-400"> Read</span>
                    <span className="text-gray-600 ml-3 text-[1rem]">|</span> 
                    <span className="text-blue-400 ml-3 text-[10px] fw-bold md:text-[12px]">SEE ALL</span>
            </h2>
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-5 mt-4">
                <Cards img={img1} header="Photoshop complete Guide from Zero to hero" para="By: Mr.Wiyar" star="4.5"/>
                <Cards img={img2} header="Creating interactive dashboard with Python" para="By: Khalid" star="5.0"/>
                <Cards img={img3} header="Creating interactive dashboard with Python" para="By: Samad" star="4.3"/>
                <Cards img={img4} header="Creating interactive dashboard with Python" para="Qader" star="4.7"/>
                <Cards img={img5} header="Creating interactive dashboard with Python" para="Tufan" star="5.0"/>
                
            </div>

            {/* Fourth section of cards */}
            <h2 className="fw-bold text-[1rem] md:text-[1.3rem] mt-5 pl-12">Most Readable Articles in  
                <span className="text-blue-400 "> Upskill</span>
                <span className="text-yellow-400"> Read</span>
                    <span className="text-gray-600 ml-3 text-[1rem]">|</span> 
                    <span className="text-blue-400 ml-3 text-[10px] fw-bold md:text-[12px]">SEE ALL</span>
            </h2>
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-5 mt-4">
                <Cards img={img1} header="Photoshop complete Guide from Zero to hero" para="By: Mr.Wiyar" star="4.5"/>
                <Cards img={img2} header="Creating interactive dashboard with Python" para="By: Khalid" star="5.0"/>
                <Cards img={img3} header="Creating interactive dashboard with Python" para="By: Samad" star="4.3"/>
                <Cards img={img4} header="Creating interactive dashboard with Python" para="Qader" star="4.7"/>
                <Cards img={img5} header="Creating interactive dashboard with Python" para="Tufan" star="5.0"/>
                
            </div>


            <div>
            <h2 className="fw-bold text-[1rem] md:text-[1.3rem] mt-5 pl-10">New Courses in 
                    <span className="text-blue-400 "> Upskill</span>
                    <span className="text-gray-600 ml-3 text-[1rem]">|</span> 
                    <span className="text-blue-400 ml-3 text-[10px] fw-bold md:text-[12px]">SEE ALL PEOPLE</span>
            </h2>
            <div className="grid gap-2 grid-cols-1 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 ml-3 items-center justify-center">
                <Landscape img={face1}/>
                <Landscape img={face2}/>
                <Landscape img={face3}/>
                <Landscape img={face1}/>
                <Landscape img={face2}/>
                <Landscape img={face3}/>
                <Landscape img={face1}/>
                <Landscape img={face2}/>
                <Landscape img={face3}/>
            </div>
            </div>



            
        </>
    )
}
 export default Hero