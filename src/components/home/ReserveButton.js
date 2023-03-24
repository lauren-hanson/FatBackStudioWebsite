import { useNavigate } from "react-router-dom"

export const ReserveButton = () => {

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    let navigate = useNavigate()

    let handleNavigate = () => {
        fatbackUserObject
            ? navigate("/reserve", { state: "reserveButton" })
            : navigate("/register", { state: "reserveButton" })
    }

    return <button className="reserveButton"
        state={{ from: "reserveButton" }}
        onClick={() => { handleNavigate() }

        }>Book Now
    </button>
}