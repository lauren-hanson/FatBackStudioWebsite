import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const ClientNavBar = () => {
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
                <Link className="navbar_link" to="/aboutFatBack">About</Link>
            </li>
            <li className="navbar_item active">
                <Link className="navbar_link" to="/gallery">Gallery</Link>
            </li>
            <li className="navbar_item active">
                <Link className="navbar_link" to="/artists">Artists</Link>
            </li>
            <li className="navbar_item active">
                <Link className="navbar_link" to="/reserve">Book Now</Link>
            </li>
            

            {
                localStorage.getItem("fatback_user")
                    ? <li className="navbar_item navbar_logout">
                        <Link className="navbar_link" to="" onClick={() => {
                            refreshPage()
                            localStorage.removeItem("fatback_user")
                            navigate("*", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
                }
        </ul>
    )
}
