import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Gallery.css"

export const AddGalleryImage = () => {

    const [newImage, setImages] = useState({
        imageURL: ""
    })

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/gallery`)
            .then(response => response.json())
            .then(image => {
                setImages(image)
            })
    }, []
    )

    const handleSaveImageButton = (event) => {
        event.preventDefault()

        const newImageToSendToAPI = {
            imageURL: newImage.imageURL
        }

        return fetch(`http://localhost:8088/gallery`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newImageToSendToAPI)
        })

            .then((response) => response.json())
            .then(() => {
                navigate("/gallery")
            })
    }



    return (
        <div className="addImagePage">
            <h2 className="galleryHeader">Add New Image</h2>
            <form>
                <fieldset>
                    <div className="form-group">
                        <h3 className="label" htmlFor="imgURL">Image URL: </h3>
                        <input
                            required
                            id="imgURL"
                            type="text"
                            className="form-control"
                            placeholder="example.com"
                            value={newImage.imageURL}
                            onChange={(event) => {
                                const copy = { ...newImage }
                                copy.imageURL = event.target.value
                                setImages(copy)
                            }}
                        />
                    </div>
                </fieldset>
            </form>
            <button
                className="saveImageButton"
                onClick={(event) => {
                    handleSaveImageButton(event)
                }}>
                Add New Image

            </button>
        </div>
    )
}