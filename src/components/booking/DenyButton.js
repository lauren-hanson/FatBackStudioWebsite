import { useState, useEffect } from "react"
import "./Requests.css"

export const DenyButton = ({ id }) => {

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
            .then(response => response.json())

            .then(
                setRefresh(!refresh)
            )

            .then(
               setRequest()
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