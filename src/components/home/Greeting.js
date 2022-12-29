import { useEffect, useState } from "react"
import "./About.css"

export const Greeting = () => {

    const [users, setUsers] = useState([])
    const [pendingRequests, setPendingRequests] = useState([])

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    useEffect(() => {
        fetch(`http://localhost:8088/users?isStaff=true`)
            .then(response => response.json())
            .then(userInfo => {
                setUsers(userInfo)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8088/requests?isPending=true`)
            .then(response => response.json())
            .then(userInfo => {
                setPendingRequests(userInfo)
            })
    }, [])



    return (
        <div className="greeting">
            {fatbackUserObject.staff && pendingRequests ?
                 `Welcome. You have 1 new request`: "" 
                
            }
        </div>
    )
}