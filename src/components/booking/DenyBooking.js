import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Requests.css"

export const DenyBooking = ({ requests, refresh, setRefresh }) => {

   
    const navigate = useNavigate()

    const requestReset = () => {
        //if (!fatbackUserObject.staff) 
        return <button
            onClick={() => {
                fetch(`http://localhost:8088/requests/${requests.id}`, {
                    method: "DELETE"
                })

                    // .then(() => {
                    //     setTimeout(() => navigate("/reserve"), 3000);
                    // })


                    .then(
                        setRefresh(!refresh)
                    )

                    .then(
                        navigate("/reserve")
                    )


            }}
            className="requestResetButton">
            Try again?</button>
    }


    return (
        <>
            <div className="statusUpdate">Your request has been denied. <br></br>{requests?.notes}</div>

            {requestReset()}
        </>
    )
}