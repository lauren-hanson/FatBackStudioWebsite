import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const StaffNavBar = () => {
    const navigate = useNavigate()

    function refreshPage() {
        window.location.reload(false)
    }


    return (
        <ul className="navbar">
            <li className="navbar_item active">
                <Link className="navbar_link" to="/">Home</Link>
            </li>


            <li className="navbar_item active">
                <Link className="navbar_link" to="/requests">Requests</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to="/schedule">Schedule</Link>
            </li>

            {/* <li className="navbar_item active">
                <Link className="navbar_link" to="/calendar">Calendar</Link>
            </li> */}
 
            <li className="navbar_item active">
                <Link className="navbar_link" to="/aboutFatBack">About</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to="/artists">Artists</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to="/gallery">Gallery</Link>
            </li>



            {
                localStorage.getItem("fatback_user")
                    ? <li className="navbar_item navbar_logout">
                        <Link className="navbar_link" to="" onClick={() => {
                            refreshPage()
                            localStorage.removeItem("fatback_user")
                            navigate("/")
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}
