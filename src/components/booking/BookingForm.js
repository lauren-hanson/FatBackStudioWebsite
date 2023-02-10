import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BookingStatus } from "./BookingStatus.js"
import { Title } from '../home/Title'
import "./BookingForm.css"


export const BookingForm = () => {

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    const [refresh, setRefresh] = useState(true)
    const [genres, setGenres] = useState([])
    const [requests, setRequests] = useState([])

    const [request, setBookingForm] = useState({

        bandName: "",
        phoneNumber: "",
        genreId: 0,
        numOfSongs: "",
        startDate: "",
        endDate: "",
        musicianRequest: false,
        sessionMusicians: false,
        photoRequest: false,
        videoRequest: false,
        userId: fatbackUserObject.id,
        isPending: false,
        isAccepted: false,
        isDenied: false

    })

    const [newClients, setNewClients] = useState({
        userId: 0,
        isArtist: true
    })

    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/genres`)
                .then(response => response.json())
                .then((genreArray) => {
                    setGenres(genreArray)
                })
        },
        []

    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/requests?_expand=genre&userId=${fatbackUserObject.id}`)
                .then(response => response.json())
                .then((requestInfo) => {
                    setRequests(requestInfo[0])
                })
        }, [, refresh]
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/clients`)
                .then(response => response.json())
                .then((newClientInfo) => {
                    setNewClients(newClientInfo)
                })
        },
        []
    )


    const submitButtonClick = (event) => {
        event.preventDefault()

        const newBookingRequest = {
            bandName: request.bandName,
            phoneNumber: request.phoneNumber,
            genreId: request.genreId,
            numOfSongs: request.numOfSongs,
            startDate: request.startDate,
            endDate: request.endDate,
            musicianRequest: request.musicianRequest,
            sessionMusicians: request.sessionMusicians,
            photoRequest: request.photoRequest,
            videoRequest: request.videoRequest,
            userId: fatbackUserObject.id,
            isPending: true,
            isAccepted: false,
            isDenied: false
        }

        const newClientDataToSendToAPI = {
            userId: fatbackUserObject.id,
            isArtist: true
        }

        return fetch(`http://localhost:8088/requests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBookingRequest)
        })

            .then(response => response.json())

            .then(newClient => {
                request.userId = newClient.id
                return fetch(`http://localhost:8088/clients`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newClientDataToSendToAPI)
                })
            })
            .then(() => {
                navigate(`/myrequest`)
            })

    }

    return (
        <>
        <Title/> 
            {requests ?
                <BookingStatus requests={requests} setRefresh={setRefresh} refresh={refresh}/> :
                < div className="bookingForm" >
                    <h2 className="bookingHeader">Booking Form</h2>
                    <form>

                        <fieldset >
                            <div className="form-group">
                                <label className="label" htmlFor="bandName">Band Name: </label>
                                <input
                                    required 
                                    type="text"
                                    className="form-control"
                                    value={request.bandName}
                                    onChange={
                                        (event) => {
                                            const copy = { ...request }
                                            copy.bandName = event.target.value
                                            setBookingForm(copy)
                                        }
                                    }
                                />
                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="label" htmlFor="phoneNumber">
                                    Phone Number:
                                </label>
                                <input
                                    required 
                                    type="text"
                                    className="form-control"

                                    value={request.phoneNumber}
                                    onChange={
                                        (event) => {
                                            const copy = { ...request }
                                            copy.phoneNumber = event.target.value
                                            setBookingForm(copy)
                                        }
                                    }
                                />

                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="label genre" htmlFor="genre">Choose a genre:</label>
                                <select id="genre" required
                                    onChange={
                                        (event) => {
                                            const copy = { ...request }
                                            copy.genreId = parseInt(event.target.value)
                                            setBookingForm(copy)
                                        }}>
                                    <option value="0">Genre...</option>

                                    {
                                        genres.map(
                                            (genre) => {
                                                return <option
                                                    key={`genre--${genre.id}`}
                                                    value={genre.id}
                                                >{genre.type}
                                                </option>
                                            }
                                        )
                                    }
                                </select>

                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="label" htmlFor="songs">
                                    No. of Songs:
                                </label>
                                <input
                                    required 
                                    type="text"
                                    className="form-control"
                                    value={request.numOfSongs}
                                    onChange={
                                        (event) => {
                                            const copy = { ...request }
                                            copy.numOfSongs = event.target.value
                                            setBookingForm(copy)
                                        }
                                    }

                                />

                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="label" htmlFor="date">
                                    Start Date:
                                </label>

                                <input
                            
                                    type="date"
                                    required
                                    className="form-control"
                                    id="startDate"
                                    onChange={
                                        (event) => {
                                            const copy = { ...request }
                                            copy.startDate = event.target.value
                                            setBookingForm(copy)
                                        }
                                    }

                                />

                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="date">
                                    End Date:
                                </label>

                                <input
                                    max={request.endDate}
                                    required
                                    type="date"
                                    className="form-control"
                                    id="endDate"
                                    onChange={
                                        (event) => {
                                            const copy = { ...request }
                                            copy.endDate = event.target.value
                                            setBookingForm(copy)
                                        }
                                    }

                                />

                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="label" htmlFor="band">
                                    Do you have musicians or a band?
                                </label>
                                <div className="radioLabel">
                                    <input

                                        type="radio"
                                        className="form-control"
                                        value={true}
                                        name="musicians"
                                        onClick={
                                            () => {
                                                const copy = { ...request }
                                                copy.musicianRequest = true
                                                setBookingForm(copy)
                                            }
                                        }
                                    />
                                    <label className="radioLabel">Yes</label>

                                    <input

                                        type="radio"
                                        className="form-control"
                                        value={false}
                                        name="musicians"
                                        onClick={
                                            () => {
                                                const copy = { ...request }
                                                copy.musicianRequest = false
                                                setBookingForm(copy)
                                            }
                                        }

                                    />
                                    <label className="radioLabel" >No</label>

                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="label" htmlFor="session">
                                    Would you like session musicians?
                                </label>
                                <div className="radioLabel">
                                    <input

                                        required 
                                        type="radio"
                                        className="form-control"
                                        value={true}
                                        name="session"
                                        onClick={
                                            () => {
                                                const copy = { ...request }
                                                copy.sessionMusicians = true
                                                setBookingForm(copy)
                                            }
                                        }
                                    />
                                    <label className="radioLabel"
                                    >Yes</label>

                                    <input
                                        required 
                                        type="radio"
                                        className="form-control"
                                        value={false}
                                        name="session"
                                        onClick={
                                            () => {
                                                const copy = { ...request }
                                                copy.sessionMusicians = false
                                                setBookingForm(copy)
                                            }
                                        }
                                    />
                                    <label className="radioLabel"
                                    >No</label>

                                </div>

                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="label" htmlFor="photo">
                                    Do you want photos?
                                </label>
                                <div className="radioLabel">
                                    <input

                                        required 
                                        type="radio"
                                        className="form-control"
                                        value={true}
                                        name="photo"
                                        onClick={
                                            () => {
                                                const copy = { ...request }
                                                copy.photoRequest = true
                                                setBookingForm(copy)
                                            }
                                        }
                                    />
                                    <label className="radioLabel">Yes</label>

                                    <input
                                        required 
                                        type="radio"
                                        className="form-control"
                                        value={false}
                                        name="photo"
                                        onClick={
                                            () => {
                                                const copy = { ...request }
                                                copy.photoRequest = false
                                                setBookingForm(copy)
                                            }
                                        }
                                    />
                                    <label className="radioLabel">No</label>

                                </div>

                            </div>
                        </fieldset>

                        <fieldset>
                            <div className="form-group">
                                <label className="label" htmlFor="photo">
                                    Do you want video?
                                </label>

                                <div className="radioLabel">
                                    <input

                                        required 
                                        type="radio"
                                        className="form-control"
                                        value={true}
                                        name="video"
                                        onClick={
                                            () => {
                                                const copy = { ...request }
                                                copy.videoRequest = true
                                                setBookingForm(copy)
                                            }
                                        }
                                    />
                                    <label className="radioLabel"
                                    >Yes</label>

                                    <input
                                        required 
                                        type="radio"
                                        className="form-control"
                                        value={false}
                                        name="video"
                                        onClick={
                                            () => {
                                                const copy = { ...request }
                                                copy.videoRequest = false
                                                setBookingForm(copy)
                                            }
                                        }
                                    />
                                    <label className="radioLabel"
                                    >No</label>

                                </div>
                            </div>
                        </fieldset>
                        <button
                            onClick={(clickEvent) => {
                                submitButtonClick(clickEvent)
                            }}
                            className="submitFormButton">
                            Submit Request
                        </button>
                    </form>
                </div>}
        </>

    )
}



