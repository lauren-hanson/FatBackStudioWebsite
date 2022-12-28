import { useNavigate } from "react-router-dom"

export const AcceptBooking = () => {

    const navigate = useNavigate()

    const reviewRequestButton = () => {

        return <button className="reviewRequestButton"
            onClick={() => {
                navigate(`/myrequest`)
            }}>
            Review Your Request
        </button>
    }

    return (
        <>
            <div className="statusUpdate">
                <p>Your request has been accepted! <br></br>We'll be in contact soon.</p>
                {reviewRequestButton()}
            </div>

        </>
    )
}