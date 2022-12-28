//import { useEffect, useState } from "react"
import "./About.css"

export const Greeting = () => {


    //const [staffMembers, setStaff] = useState([])

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    // useEffect(() => {
    //     fetch(`http://localhost:8088/users`)
    //         .then(response => response.json())
    //         .then(staffInfo => {
    //             setStaff(staffInfo)
    //         })
    // }, [])

    return (
        <div className="greeting">
            {fatbackUserObject.staff ?
                <>Welcome {fatbackUserObject.fullName}</> : ""}
        </div>
    )
}