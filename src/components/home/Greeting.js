import { useEffect, useState } from "react"
import "./About.css"

export const Greeting = () => {

    const [users, setUsers] = useState([])

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    useEffect(() => {
        fetch(`http://localhost:8088/users?isStaff=true`)
            .then(response => response.json())
            .then(userInfo => {
                setUsers(userInfo)
            })
    }, [users])

    return (
        <div className="greeting">
            {fatbackUserObject.staff ?
                "Admin View" : "" 
                // `Welcome ${users.fullName}` : ""
            }
        </div>
    )
}