import { useNavigate, Link } from "react-router-dom"

export const DenyBooking = ({requests}) => {

    return (
        <>
            <div className="statusUpdate">Your request has been denied. <br></br>{requests?.notes}</div>
            
            <p className="futureBookingText"><Link to="/reserve" id="link">Click here</Link> to book.</p>
        </>
    )
}