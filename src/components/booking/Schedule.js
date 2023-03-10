import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Title } from '../home/Title'
import { AddNotesAccept } from "./AddNotesAccept"
import "./BookingForm.css"

export const Schedule = ({ id }) => {

  const localFatBackUser = localStorage.getItem("fatback_user")
  const fatbackUserObject = JSON.parse(localFatBackUser)

  const [requests, setRequest] = useState([])

  useEffect(
    () => {
      fetch(`http://localhost:8088/requests?isAccepted=true&_sort=startDate&_expand=user`)
        .then(response => response.json())
        .then((requestInfo) => {
          setRequest(requestInfo)
        })
    }, []
  )

  return (
    <>
      <Title />
      <div className="myrequests">
        <h2 className="futureBookingsHeader">Future Bookings</h2>
        {requests.length ?
          <div className="requestBox">
            {requests.map(request => {
              return (<>
                <div className="acceptedBookingInfo requestInfo" key={`requests--${request.id}`}>
                  <div>Band Name: {request.bandName}</div>
                  <div>Phone Number: {request.phoneNumber}</div>
                  <div>Email: {request?.user?.email}</div>
                  <div>Start Date: {request.startDate}</div>
                  <div>End Date: {request.endDate}</div>

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

                  <div>
                    {fatbackUserObject.admin ?
                      <AddNotesAccept requests={requests} id={request.id} /> : ""
                    }
                  </div>
                </div>
              </>)
            })}

          </div> : <div className="noBookingStatus">FatBack has no future bookings.</div>
        }
      </div>

      {requests.length ?
        <div className="link">
          <Link to="/requests" id="futurebookinglink">Back to Requests</Link>
        </div> : ""
      }
    </>
  )

}

