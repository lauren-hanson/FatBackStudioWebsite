import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AcceptDenyContainer } from "./AcceptDenyContainer.js"
import { Title } from '../home/Title'
import "./Requests.css"


export const Requests = () => {

    const [requests, setRequest] = useState([])
    // const [refresh, setRefresh] = useState(true)


    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/requests?_expand=genre&_sort=startDate`)
                .then(response => response.json())
                .then((requestInfo) => {
                    setRequest(requestInfo)
                })
        }, []
    )

    // [, refresh]


    return (<>
    <Title /> 
        <div className="myrequests">
            {requests.length ?
                <div key={`requests--${requests.id}`}>
                    <h2 className="requestHeader">Studio Requests</h2>
                    <div className="requestBox">
                        {requests.map(request => {
                            return (<>
                                <div className="requestInfo" key={`request--${request.id}`}>
                                    <div>Band Name: {request.bandName}</div>
                                    <div>Phone Number: {request.phoneNumber}</div>
                                    <div>Start Date: {request.startDate}</div>
                                    <div>End Date: {request.endDate}</div>
                                    <div>No. of Songs: {request.numOfSongs}</div>
                                    <div>Genre: {request?.genre?.type}</div>

                                    <div className="radioReview">Musicians:
                                        {request.musicianRequest === true ?
                                            <div>Yes</div> :
                                            <div>No</div>
                                        }

                                    </div>

                                    <div className="radioReview">Session Musicians:
                                        {request.sessionMusicians === true ?
                                            <div>Yes</div> :
                                            <div>No</div>
                                        }

                                    </div>

                                    <div className="radioReview">Photos:
                                        {request.photoRequest === true ?
                                            <div>Yes</div> :
                                            <div>No</div>
                                        }

                                    </div>

                                    <div className="radioReview">Video Request:
                                        {request.videoRequest === true ?
                                            <div>Yes</div> :
                                            <div>No</div>
                                        }

                                    </div>

                                        <br></br>
                                        <br></br>
                                        
                                    <div className="statusContainer">
                                        <AcceptDenyContainer request={request} id={request.id} />
                                    </div>
                                </div>


                            </>)
                        })}
                    </div>
                </div> :

                <div>FatBack currently has no booking requests.</div>
            }

        </div >
        <div className="futureBookingsLink"
            onClick={() => {
                navigate("/futurebookings")
            }}>
            <p className="futureBookingText">See your <Link to="/futurebookings" id="link">future bookings </Link></p>
        </div>
    </>)
}

//Add in a place to write notes about the session for planning or saying how it went 