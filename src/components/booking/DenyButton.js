import { useState, useEffect } from "react"
import "./Requests.css"

export const DenyButton = ({ id, refresh, setRefresh }) => {

    const [requests, setDeniedRequest] = useState([])
    //const [refresh, setRefresh] = useState(true)

    useEffect(
        () => {
            fetch(`http://localhost:8088/requests?_expand=genre`)
                .then(response => response.json())
                .then((requestInfo) => {
                    setDeniedRequest(requestInfo)
                })
        }, [, refresh]
    )

    const denyRequest = (event) => {
        event.preventDefault()

        const requestDenyStatusForAPI = {
            isDenied: true,
            isPending: false,
        }

        return fetch(`http://localhost:8088/requests/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestDenyStatusForAPI)
        })
            //.then(response => response.json())

            .then(
                setRefresh(!refresh)
            )
    }

    return (
        <>
            <button
                onClick={(clickEvent) => {

                    denyRequest(clickEvent)

                }}
                className="denyButton" >
                Deny Request
            </button>

        </>
    )
}