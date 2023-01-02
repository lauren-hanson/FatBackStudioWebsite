import { PublicStaffList } from "../staff/PublicStaffList"
import { Title } from '../home/Title'
//import { ReserveButton } from "./ReserveButton"
import "./About.css"

export const PublicAbout = () => { 

    return ( 
        <>
        <Title/>
        <h3 className="aboutHeader">About FatBack</h3>
        <div className="about"> 
        Fatback Sound has always been a hidden gem in Music City. Over the years many legends have recorded here. This private studio has played a large role in music and now we feel its time to share it with you.
        </div>
        <PublicStaffList /> 
        </>
    )
}