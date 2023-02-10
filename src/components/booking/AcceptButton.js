import { useState, useEffect } from "react"
//import { useNavigate } from "react-router-dom"
import "./Requests.css"

export const AcceptButton = ({ id, refresh, setRefresh }) => {

    const [requests, setRequest] = useState([])
    //const [refresh, setRefresh] = useState(true)


    //const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/requests?_expand=genre`)
                .then(response => response.json())
                .then((requestInfo) => {
                    setRequest(requestInfo)
                })
        }, [, refresh]
    )

    const acceptRequestButton = (event) => {
        event.preventDefault()

        const requestAcceptStatusForAPI = {
            isAccepted: true,
            isPending: false
        }

        fetch(`http://localhost:8088/requests/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestAcceptStatusForAPI)
        })

            .then(
                setRefresh(!refresh)
            )

    }

    // function refreshPage() {
    //     window.location.reload(false)
    // }

    return (
        <>
            <button
                onClick={(clickEvent) => {
                    acceptRequestButton(clickEvent)
                    // refreshPage()
                }}
                className="acceptButton">
                Accept Request
            </button>
        </>
    )
}