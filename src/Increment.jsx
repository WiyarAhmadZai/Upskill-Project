// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Increment = ()=>{
    const curTime = new Date().toLocaleTimeString();
    const [num, setNum]= useState(0);
    const [time, setTime] = useState();
    const [data, setData] = useState("Code")
// function for updating the clock
    const update =()=>{
        setTime(curTime)
    }

// function for setting data 
    const Change = ()=>{
        setData("Code with Mr.Wiyar");
    }
//  function for resetting the date to its first state
    const reChange = ()=>{
        setData("Code")
    }

    //setting the interval for clock
    setInterval(() => {
        update()
    }, 1000);
// function for incrementing the number
    const Increment = ()=>{
        setNum(num+1)
    }
// function for decrementing the number
    const Decrement = ()=>{
        if(num==0){
            alert("Zero can not Minus!")
        }else{
            setNum(num-1)
        }
    }
    //Reset Finction
    const Reset = ()=>{
        setNum(0)
    }
    return(
        <>
        <div className="container">
            <div>
            <h1>{num}</h1>
            <h1>{data}</h1>
            
                <button onClick={Increment}>Increment</button>
                <button onClick={Decrement}>Decrement</button>
                <button onClick={Reset}>Reset</button>
                <button onClick={Change} onDoubleClick={reChange}> Channge Text</button>
            
            </div>
        </div>
        <h6 style={{textAlign:"center"}}>{time}</h6>
        </>
    )
}
export default Increment;