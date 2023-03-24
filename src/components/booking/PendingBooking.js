import { useNavigate } from "react-router-dom"

export const PendingBooking = () => {

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
                <div className="statusUpdate">Your request is pending.
                    {reviewRequestButton()}</div>

        </>
    )
}