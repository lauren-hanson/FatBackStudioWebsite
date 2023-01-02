import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./BookingForm.css"

export const FutureBookings = () => {

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

                  <div></div>
                </div>
              </>)
            })}

          </div> : <div className="noBookingStatus">FatBack has no future bookings.</div>
        }
      </div>

      <div className="link">
        <Link to="/requests" id="futurebookinglink">Back to Requests</Link>
      </div>
    </>
  )

}

