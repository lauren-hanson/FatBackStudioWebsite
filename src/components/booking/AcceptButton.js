import { useState, useEffect } from "react"
import "./Requests.css"

export const AcceptButton = ({ id }) => {

    const [requests, setRequest] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(
        () => {
            fetch(`http://localhost:8088/requests?_expand=genre&_sort=startDate`)
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
            isPending: false,
        }

        fetch(`http://localhost:8088/requests/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestAcceptStatusForAPI)
        })
            .then(response => response.json())

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