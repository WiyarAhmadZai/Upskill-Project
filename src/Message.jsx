// eslint-disable-next-line no-unused-vars
import React from "react"
import Card from "react-bootstrap/Card"
import Conrainer from "react-bootstrap/Container";

const Message = ({course, duration, teacherName})=>{
    return(
        <Conrainer style={{PaddingTop:"23px"}}>
            <Card>
                <Card.Body>
                    <div>
                        <h1>Course Name: {course}</h1>
                        <h2> Course Duration : {duration} Days</h2>
                        <h2> Teacher Name : {teacherName}</h2>
                    </div>
                </Card.Body>
            </Card>
        </Conrainer>
    )
}
export default Message;