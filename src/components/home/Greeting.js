import { useEffect, useState } from "react"
import "./About.css"

export const Greeting = () => {

    //const [users, setUsers] = useState([])
    const [refresh, setRefresh] = useState(true)
    const [pendingRequests, setPendingRequests] = useState([])

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    // useEffect(() => {
    //     fetch(`http://localhost:8088/users?isStaff=true`)
    //         .then(response => response.json())
    //         .then(userInfo => {
    //             setUsers(userInfo)
    //         })
    // }, [])

    useEffect(() => {
        fetch(`http://localhost:8088/requests?isPending=true`)
            .then(response => response.json())
            .then(userInfo => {
                setPendingRequests(userInfo)
            })
           
    }, [, refresh])


    return (
        <div className="welcomeAlert">
        {fatbackUserObject.staff ?
            window.alert(
                `Welcome. You have ${pendingRequests.length} pending requests.`)
            : window.alert(`You have no pending requests.`)
        }
    </div>
    )
}