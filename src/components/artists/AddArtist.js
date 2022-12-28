import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Axios from 'axios'
import "./Artist.css"

export const AddArtist = () => {

    const [artists, setArtists] = useState([])
    const [newArtists, setNewArtist] = useState({
        artistName: "",
        imageURL: "",
        startDate: "",
        endDate: "",
        notes: ""
    })


    // const uploadImage = (files) => { 
    //     console.log(files[0])

    //     const formData = new FormData()
    //     formData.append("file", files[0])
    //     formData.append("upload_preset", "eyzo3sit")

    //     Axios.post("https://api.cloudinary.com/v1_1/dgwi6xvfl/image/upload", formData).then(response => console.log(response))
    // }



    const navigate = useNavigate()

    useEffect(() => {

        fetch(`http://localhost:8088/artists`)
            .then(response => response.json())
            .then(newArtistInfo => {
                setArtists(newArtistInfo)
            })

    }, []
    )

    const handleSaveNewArtistButton = (event) => {
        event.preventDefault()

        const newArtistToSendToAPI = {
            artistName: newArtists.artistName,
            imageURL: newArtists.imageURL,
            startDate: newArtists.startDate,
            endDate: newArtists.endDate,
            notes: newArtists.notes
        }

        return fetch(`http://localhost:8088/artists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArtistToSendToAPI)
        })

            .then((response) => response.json())
            .then(() => {
                navigate("/artists")
            })

    }

    return (

        <div className="addArtistForm">
            <form>
                <h2 className="addArtistFormHeader">Add New Artist</h2>

                <fieldset>
                    <div className="form-group">
                        <h3 htmlFor="name">Band Name: </h3>
                        <input
                            required
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Artist Name"
                            value={newArtists.artistName}
                            onChange={(event) => {
                                const copy = { ...newArtists }
                                copy.artistName = event.target.value
                                setNewArtist(copy)
                            }} />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <h3 htmlFor="name">Recording Start Date: </h3>
                        <input
                            required
                            id="name"
                            type="date"
                            className="form-control"
                            placeholder="Artist Name"
                            value={newArtists.startDate}
                            onChange={(event) => {
                                const copy = { ...newArtists }
                                copy.startDate = event.target.value
                                setNewArtist(copy)
                            }} />
                    </div>
                </fieldset>
                            
                <fieldset>
                    <div className="form-group">
                        <h3 htmlFor="name">Recording End Date: </h3>
                        <input
                            required
                            id="name"
                            type="date"
                            className="form-control"
                            placeholder="Artist Name"
                            value={newArtists.endDate}
                            onChange={(event) => {
                                const copy = { ...newArtists }
                                copy.endDate = event.target.value
                                setNewArtist(copy)
                            }} />
                    </div>
                </fieldset>

                <fieldset>
                {/* <div className="form-group">
                        <h3>Image : </h3>
                        <input
                            required
                            id="imgURL"
                            type="file"
                            className="file-control"
                            //placeholder="example.com"
                            value={newArtists.imageURL}
                            onChange={(event) => {
                                const copy = { ...newArtists }
                                copy.imageURL = event.target.files
                                setNewArtist(copy)
                            }}
                        />
                    </div> */}
                    <div className="form-group">
                        <h3 htmlFor="imgURL">Image URL: </h3>
                        <input
                            required
                            id="imgURL"
                            type="text"
                            className="form-control"
                            placeholder="example.com"
                            value={newArtists.imageURL}
                            onChange={(event) => {
                                const copy = { ...newArtists }
                                copy.imageURL = event.target.value
                                setNewArtist(copy)
                            }}
                        />
                    </div> 
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <h3 htmlFor="notes">Notes: </h3>
                        <textarea
                            required
                            id="notes"
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={newArtists.notes}
                            onChange={(event) => {
                                const copy = { ...newArtists }
                                copy.notes = event.target.value
                                setNewArtist(copy)
                            }}
                        ></textarea>
                    </div>
                </fieldset>

                <button
                    className="saveButton"
                    onClick={(event) => {
                        handleSaveNewArtistButton(event)
                    }}
                >
                    Add New Artist
                </button>
            </form>
        </div>

    )
}