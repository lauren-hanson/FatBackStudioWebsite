import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./Artist.css"

export const ArtistEdit = () => { 

    const [editArtist, setEditArtist] = useState({ 
        artistName: "", 
        imageURL: "", 
        startDate: "", 
        endDate: "", 
        notes: ""
    })

    const { artistId } = useParams()
    const navigate = useNavigate()

    useEffect( 
        () => { 
            fetch(`http://localhost:8088/artists/${artistId}`)
                .then(response => response.json())
                .then((artistObject) => { 
                    setEditArtist(artistObject)
                })
        }, 
        []
    )


    const handleEditButtonClick = (event) => {
        event.preventDefault()


        return fetch(`http://localhost:8088/artists/${artistId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editArtist)
        })

            .then((response) => response.json())
            .then(() => {
                navigate("/artists")
            })
    }

    return(
        <>
         <div className="addArtistForm">
            <form>
                <h2 className="addArtistFormHeader">Add New Artist</h2>

                <fieldset>
                    <div className="form-group">
                        <h3 className="label" htmlFor="name">Band Name: </h3>
                        <input
                            required
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Artist Name"
                            value={editArtist.artistName}
                            onChange={(event) => {
                                const copy = { ...editArtist }
                                copy.artistName = event.target.value
                                setEditArtist(copy)
                            }} />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <h3 className="label" htmlFor="name">Recording Start Date: </h3>
                        <input
                            required
                            id="name"
                            type="date"
                            className="form-control"
                            defaultValue={editArtist.startDate}
                            onChange={(event) => {
                                const copy = { ...editArtist }
                                copy.startDate = event.target.value
                                setEditArtist(copy)
                            }} />
                    </div>
                </fieldset>
                            
                <fieldset>
                    <div className="form-group">
                        <h3 className="label" htmlFor="name">Recording End Date: </h3>
                        <input
                            required
                            id="name"
                            type="date"
                            className="form-control"
                            defaultValue={editArtist.endDate}
                            onChange={(event) => {
                                const copy = { ...editArtist }
                                copy.endDate = event.target.value
                                setEditArtist(copy)
                            }} />
                    </div>
                </fieldset>

                <fieldset>
                <div className="form-group">
                        <h3 className="label" >Image : </h3>
                        <input
                            required
                            id="imgURL"
                            type="text"
                            className="form-control"
                            //placeholder="example.com"
                            value={editArtist.imageURL}
                            onChange={(event) => {
                                const copy = { ...editArtist }
                                copy.imageURL = event.target.value
                                setEditArtist(copy)
                            }}
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <h3 className="label" htmlFor="notes">Notes: </h3>
                        <textarea
                            required
                            id="notes"
                            type="text"
                            className="form-control"
                            defaultValue={editArtist.notes}
                            onChange={(event) => {
                                const copy = { ...editArtist }
                                copy.notes = event.target.value
                                setEditArtist(copy)
                            }}
                        ></textarea>
                    </div>
                </fieldset>

                <button
                    className="editArtistButton"
                    onClick={(clickEvent) => {
                        handleEditButtonClick(clickEvent)
                    }}
                >
                   Save Changes
                </button>
            </form>
        </div>
        </>
    )
}