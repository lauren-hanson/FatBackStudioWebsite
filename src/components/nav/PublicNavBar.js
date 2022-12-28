import { Link } from "react-router-dom"
import "./NavBar.css"

export const PublicNavBar = () => {

    //const navigate = useNavigate()

    return (
        <ul className="navbar">
                        
            <li className="navbar_item active">
                <Link className="navbar_link" to="/">Home</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to="/aboutFatBack">About</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to="/artists">Artists</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to="/gallery">Gallery</Link>
            </li>

            <li className="navbar_item active">
                <Link className="navbar_link" to="/login">Sign In</Link>
            </li>

        </ul>

    )
}





{/* {
            localStorage.getItem("fatback_user")
                ? <li className="navbar_item navbar_logout">
                    <Link className="navbar_link" to="" onClick={() => {
                        localStorage.removeItem("fatback_user")
                        navigate("/", {replace: true})
                    }}>Logout</Link>
                </li>
                : ""
        }  */}