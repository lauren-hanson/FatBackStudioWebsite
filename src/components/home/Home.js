import { Greeting } from "./Greeting"
import "./About.css"

export const Home = () => {

    return <>   
        <div className="title-container">
            <Greeting />
            <img className="title-image" src="https://res.cloudinary.com/dgwi6xvfl/image/upload/v1671727628/FatBack/backgroundimage_tj7vmd.jpg" alt="guitar" />
        </div>
    </>
}






