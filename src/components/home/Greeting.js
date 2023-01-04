import { useEffect, useState } from "react"
import { AdminModal } from "./AdminModal"
import { StaffModal } from "./StaffModal"
import { ClientModal } from "./ClientModal"
//import { useParams } from "react-router-dom"
//import { AdminGreeting } from "./AdminGreeting"
//import { StaffGreeting } from "./StaffGreeting"
//import { ClientGreeting } from "./ClientGreeting"
import "./About.css"

export const Greeting = () => {

    //const {staffId} = useParams()
    const [users, setUsers] = useState({})
    const [requests, setRequests] = useState([])
    const [pendingRequests, setPendingRequests] = useState([])

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    useEffect(() => {
        fetch(`http://localhost:8088/staff?_expand=user`)
            .then(response => response.json())
            .then(userInfo => {
                const singleStaff = userInfo[0]
                setUsers(singleStaff)
            })
    }, [users])

    useEffect(() => {
        fetch(`http://localhost:8088/requests?isPending=true`)
            .then(response => response.json())
            .then(pending => {
                setPendingRequests(pending)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8088/requests`)
            .then(response => response.json())
            .then((requestArray) => {
                setRequests(requestArray)
            })
    }, [])

    if (fatbackUserObject.admin) {
        return <AdminModal users={users} pendingRequests={pendingRequests} />
    } else if (fatbackUserObject.staff) {
        return <StaffModal users={users} currentUser={fatbackUserObject}/>
    } else if (!fatbackUserObject.staff) {
        return <ClientModal users={users} requests={requests} currentUser={fatbackUserObject} pendingRequests={pendingRequests}/>
    }

    // if (fatbackUserObject.admin) {
    //     return <AdminGreeting users={users} />
    // } else if (fatbackUserObject.staff) {
    //     return <StaffGreeting users={users} />
    // } else if (!fatbackUserObject.staff) {
    //     return <ClientGreeting />
    // }
}