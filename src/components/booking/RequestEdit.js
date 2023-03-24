import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./BookingForm.css"

export const RequestEdit = () => {

    const { requestId } = useParams()

    // const localFatBackUser = localStorage.getItem("fatback_user")
    // const fatbackUserObject = JSON.parse(localFatBackUser)

    const [genres, setGenres] = useState([])
    const [editRequests, setEditRequest] = useState({

        bandName: "",
        phoneNumber: "",
        genreId: 0,
        numOfSongs: "",
        startDate: "",
        endDate: "",
        musicianRequest: false,
        sessionMusicians: false,
        photoRequest: false,
        videoRequest: false

    })

    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/requests/${requestId}`)
                .then(response => response.json())
                .then((requestObject) => {
                    setEditRequest(requestObject)
                })
        },
        []
    )

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

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/requests/${requestId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editRequests)
        })

            .then((response) => response.json())
            .then(() => {
                navigate("/myrequest")
            })

    }

    return (
        <div className="bookingForm">
            <h2 className="editRequestHeader">Edit Your Request</h2>

            <form className="editRequest popup" id="popup">

                <fieldset >
                    <div className="form-group">
                        <label className="label" htmlFor="bandName">Band Name: </label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            defaultValue={editRequests.bandName}
                            onChange={
                                (event) => {
                                    const copy = { ...editRequests }
                                    copy.bandName = event.target.value
                                    setEditRequest(copy)
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
                            required autoFocus
                            type="text"
                            className="form-control"
                            defaultValue={editRequests.phoneNumber}
                            onChange={
                                (event) => {
                                    const copy = { ...editRequests }
                                    copy.phoneNumber = event.target.value
                                    setEditRequest(copy)
                                }
                            }
                        />

                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group selectGenre">
                        <label htmlFor="genre" className="label">Choose a genre:</label>
                        <select id="genre"
                            required
                            value={editRequests?.genreId}
                            onChange={
                                (event) => {
                                    const copy = { ...editRequests }
                                    copy.genreId = parseInt(event.target.value)
                                    setEditRequest(copy)
                                }}>
                            <option
                                value="{editRequests.genreId}"></option>

                            {
                                genres.map(
                                    (genre) => {
                                        return <option
                                            key={`genre--${genre.id}`}
                                            value={genre.id}
                                        >{genre.type}</option>
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
                            required autoFocus
                            type="text"
                            className="form-control"
                            value={editRequests.numOfSongs}
                            onChange={
                                (event) => {
                                    const copy = { ...editRequests }
                                    copy.numOfSongs = event.target.value
                                    setEditRequest(copy)
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
                            defaultValue={editRequests.startDate}
                            onChange={
                                (event) => {
                                    const copy = { ...editRequests }
                                    copy.startDate = event.target.value
                                    setEditRequest(copy)
                                }
                            }

                        />

                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label className="label" htmlFor="date">
                            End Date:
                        </label>
                        <input
                            required
                            type="date"
                            className="form-control"
                            defaultValue={editRequests.endDate}
                            onChange={
                                (event) => {
                                    const copy = { ...editRequests }
                                    copy.endDate = event.target.value
                                    setEditRequest(copy)
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
                                checked={editRequests.musicianRequest === true}
                                name="musicians"
                                onClick={
                                    () => {
                                        const copy = { ...editRequests }
                                        copy.musicianRequest = true
                                        setEditRequest(copy)
                                    }
                                }
                            />

                            <label className="radioLabel">Yes</label>

                            <input

                                type="radio"
                                checked={editRequests.musicianRequest === false}
                                name="musicians"
                                onClick={
                                    () => {
                                        const copy = { ...editRequests }
                                        copy.musicianRequest = false
                                        setEditRequest(copy)
                                    }
                                }
                            />
                            <label className="radioLabel" >No</label>

                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">


                        <label className="label" htmlFor="band">
                            Would you like session musicians?
                        </label>


                        <div className="radioLabel">
                            <input

                                type="radio"
                                checked={editRequests.sessionMusicians === true}
                                id="yes"
                                name="session"
                                onClick={
                                    () => {
                                        const copy = { ...editRequests }
                                        copy.sessionMusicians = true
                                        setEditRequest(copy)
                                    }
                                }
                            />
                            <label className="radioLabel"
                            >Yes</label>

                            <input

                                type="radio"
                                checked={editRequests.sessionMusicians === false}
                                id="no"
                                name="session"
                                onClick={
                                    () => {
                                        const copy = { ...editRequests }
                                        copy.sessionMusicians = false
                                        setEditRequest(copy)
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
                                type="radio"
                                checked={editRequests.photoRequest === true}
                                //value={editRequests.photoRequest}
                                name="photo"
                                onClick={
                                    () => {
                                        const copy = { ...editRequests }
                                        copy.photoRequest = true
                                        setEditRequest(copy)
                                    }
                                }
                            />
                            <label className="radioLabel">Yes</label>

                            <input
                                type="radio"
                                checked={editRequests.photoRequest === false}
                                //value={editRequests.photoRequest}
                                name="photo"
                                onClick={
                                    () => {
                                        const copy = { ...editRequests }
                                        copy.photoRequest = false
                                        setEditRequest(copy)
                                    }
                                }
                            />
                            <label className="radioLabel">No</label>

                        </div>

                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">

                        <label className="label" htmlFor="video">
                            Do you want video?
                        </label>


                        <div className="radioLabel">
                            <input
                                type="radio"
                                checked={editRequests.videoRequest === true}

                                name="video"
                                onClick={
                                    () => {
                                        const copy = { ...editRequests }
                                        copy.videoRequest = true
                                        setEditRequest(copy)
                                    }
                                }
                            />
                            <label className="radioLabel"
                            >Yes</label>

                            <input
                                checked={editRequests.videoRequest === false}
                                type="radio"

                                name="video"
                                onClick={
                                    () => {
                                        const copy = { ...editRequests }
                                        copy.videoRequest = false
                                        setEditRequest(copy)
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
                        handleSaveButtonClick(clickEvent)
                    }}
                    className="saveEditButton">
                    Save Changes
                </button>
            </form>
        </div>
    )
}