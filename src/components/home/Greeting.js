import { useEffect, useState } from "react"
import { AdminGreeting } from "./AdminGreeting"
import { StaffGreeting } from "./StaffGreeting"
import "./About.css"

export const Greeting = () => {

    const [users, setUsers] = useState([])
 
    // const [requests, setRequests] = useState([])
    // const [pendingRequests, setPendingRequests] = useState([])

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    useEffect(() => {
        fetch(`http://localhost:8088/users?isStaff=true`)
            .then(response => response.json())
            .then(userInfo => {
                setUsers(userInfo)
            })
    }, [])

    // useEffect(() => {
    //     fetch(`http://localhost:8088/requests`)
    //         .then(response => response.json())
    //         .then(userInfo => {
    //             setRequests(userInfo)
    //         })

    // }, [])

    // const getAllPendingRequests = () => {
    //     fetch(`http://localhost:8088/requests?isPending=true`)
    //         .then(response => response.json())
    //         .then((requestInfo) => {
    //             setPendingRequests(requestInfo)
    //         })
    // }

    // const windowAlert = () => {
    //     {
    //         fatbackUserObject.admin ?
    //             window.alert(
    //                 `Welcome. You have ${pendingRequests.length} pending requests.`)
    //             : window.alert("Welcome. You have no pending requests")
    //     }

    // }


    // useEffect(() => {

    //     fetch('http://localhost:8088/requests')
    //         .then(response => response.json())
    //         .then((pendingRequest => { 
    //             setRequests(pendingRequest)
    //         }))

    //         .then(() => {
    //             getAllPendingRequests()
    //         })

    //         .then(() => {
    //             windowAlert()
    //         }
    //         )
    // },
    //     [])



    if (fatbackUserObject.admin) {
        return <AdminGreeting users={users}/>
    } else if (fatbackUserObject.staff) {
        return <StaffGreeting users={users}/>
    }

}