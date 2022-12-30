import { Greeting } from "./Greeting"

import "./About.css"

export const Home = () => {

    // const [pendingRequests, setPendingRequests] = useState([])

    // const localFatBackUser = localStorage.getItem("fatback_user")
    // const fatbackUserObject = JSON.parse(localFatBackUser)

    // useEffect(() => {
    //     fetch(`http://localhost:8088/requests?isPending=true`)
    //         .then(response => response.json())
    //         .then(userInfo => {
    //             setPendingRequests(userInfo)
    //         })
    // }, [])

    return <>
        <div className="title-container">
            <h1 id="title-main">FatBack Studio</h1>
            <img className="title-image" src="https://res.cloudinary.com/dgwi6xvfl/image/upload/v1671727628/FatBack/backgroundimage_tj7vmd.jpg" alt="guitar" />

            < Greeting />
        </div>

       



    </>
}






