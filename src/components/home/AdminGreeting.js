import { useEffect, useState } from "react"
//import { ModalWindow } from "./ModalTest"
//import {PopUpTest} from "./PopUpTest"

export const AdminGreeting = ({ users }) => {

    const [requests, setRequests] = useState([])
    const [pendingRequests, setPendingRequests] = useState([])
    const [refresh, setRefresh] = useState(true)

    // const localFatBackUser = localStorage.getItem("fatback_user")
    // const fatbackUserObject = JSON.parse(localFatBackUser)

    const windowAlert = () => {

        if (requests.isPending=true) {
            return alert(
                `Welcome. You have new pending requests.`
                // `Welcome ${users.fullName}. You have ${pendingRequests.length} pending requests.`
                )
        } else {
            return alert("Welcome. You have no pending requests")
        }

        // {
        //     requests.isPending=true ?
        //         alert(
        //             `Welcome ${users.fullName}. You have ${pendingRequests.length} pending requests.`)
        //         : alert("Welcome. You have no pending requests")
        // }



    }

    const getAllPendingRequests = () => {
        fetch(`http://localhost:8088/requests?isPending=true`)
            .then(response => response.json())
            .then((requestInfo) => {
                setPendingRequests(requestInfo)
            })
    }


    useEffect(() => {

        fetch('http://localhost:8088/requests')

            .then(response => response.json())


            .then((pendingRequest => {
                setRequests(pendingRequest)
            }))

            .then(() => {
                getAllPendingRequests()
            })


            .then(() => {
                setRefresh(!refresh)
            })

            .then(() => { 
                windowAlert()
            })


    },
        [])



}
