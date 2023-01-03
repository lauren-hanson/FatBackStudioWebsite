import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Title } from '../home/Title'
import "./BookingForm"


export const MyRequest = () => {

    const { requestId } = useParams()

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    const [requests, setRequest] = useState([])
    // const [client, setClients] = useState({})
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/requests?_expand=genre&userId=${fatbackUserObject.id}`)
                .then(response => response.json())
                .then((requestInfo) => {
                    setRequest(requestInfo)
                })
        }, []
    )


    const handleEditButtonClick = (event, request) => {
        event.preventDefault()

        navigate(`/myrequest/${request}`)
    }

    const getAllRequests = () => {
        fetch(`http://localhost:8088/requests?_expand=genre&userId=${fatbackUserObject.id}`)
            .then(response => response.json())
            .then((requestInfo) => {
                setRequest(requestInfo)
            })
    }

    const deleteButton = (id) => {
        //if (!fatbackUserObject.staff) 
        return <button
            onClick={() => {
                fetch(`http://localhost:8088/requests/${id}`, {
                    method: "DELETE"
                })
                    .then(() => {
                        getAllRequests()
                    })

                // .then(() => {
                //     setTimeout(() => navigate("/"), 3000);
                // })
            }}
            className="deleteRequestButton">
            Delete Request</button>
    }

    return (
        <div >
            <Title/>


            {requests.length ?
                <div className="request" key={`requests--${requests.id}`}>
                    <h2 className="requestHeader">My Request</h2>
                    {requests.map(request => {
                        return (<>
                            <div id="myrequest" key={requestId}>
                                <div>Band Name: {request?.bandName}</div>
                                <div>Phone Number: {request?.phoneNumber}</div>
                                <div>Start Date: {request?.startDate}</div>
                                <div>End Date: {request?.endDate}</div>
                                <div>No. of Songs: {request?.numOfSongs}</div>
                                <div>Genre: {request?.genre?.type}</div>

                                <div className="radioReview">Musicians:
                                    {request.musicianRequest === true ?
                                        <div> Yes</div> :
                                        <div> No</div>
                                    }

                                </div>

                                <div className="radioReview">Session Musicians:
                                    {request.sessionMusicians === true ?
                                        <div> Yes</div> :
                                        <div> No</div>
                                    }

                                </div>

                                <div className="radioReview">Photos:
                                    {request.photoRequest === true ?
                                        <div> Yes</div> :
                                        <div> No</div>
                                    }

                                </div>

                                <div className="radioReview">Video Request:
                                    {request.videoRequest === true ?
                                        <div>Yes</div> :
                                        <div>No</div>
                                    }

                                </div>


                                {request.isAccepted ?
                                    <div className="checkMark"> ✅ </div> :
                                    <div className="buttonContainer">
                                        <button
                                            onClick={(clickEvent) => { handleEditButtonClick(clickEvent, request.id) }}
                                            className="editRequestButton">
                                            Edit Request
                                        </button>

                                        {deleteButton(request.id)}

                                    </div>
                                }
                            </div>
                        </>)
                    })}
                </div> :

                <div>NO REQUESTS...</div>

            }

        </div >

    )
}