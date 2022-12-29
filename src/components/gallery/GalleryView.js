import { useEffect, useState } from 'react'
import { useNavigate, } from "react-router-dom"
import "./Gallery.css"

export const GalleryView = () => {

    const [photos, setPhotos] = useState([])

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/gallery`)
                .then(response => response.json())
                .then((photoGallery) =>
                    setPhotos(photoGallery))
        },
        []
    )

    const getAllImages = () => {

        fetch(`http://localhost:8088/gallery`)
            .then(response => response.json())
            .then((photoGallery) => {
                setPhotos(photoGallery)
            })
    }

    const handleDeleteImageButton = (id) => {

        if (fatbackUserObject.staff) {
            return <button className="deleteImageButton"
                onClick={() => {
                    fetch(`http://localhost:8088/gallery/${id}`, {
                        method: "DELETE"
                    })
                        .then(() => {
                            getAllImages()
                        })
                }}>Delete</button>
        }
        else {
            return ""

        }

    }

    const addPhoto = (event) => {
        event.preventDefault()

        navigate(`/gallery/addgalleryimage`)

    }

    return (
        <div className="galleryPage">
            <h3 className="galleryHeader">Gallery</h3>

            {
                fatbackUserObject.staff
                    ?
                    <div className="button">
                        <button
                            onClick={(clickEvent) => { addPhoto(clickEvent, photos.id) }}
                            className="addNewPhotoButton">
                            Add New Photo
                        </button>


                    </div> :
                    <></>
            }

            <div className="gallery">
                {
                    photos.map(photo => {
                        return <div><img className="galleryImg" key={`photo--${photo.id}`}
                            src={photo.imageURL} />
                            {handleDeleteImageButton(photo.id)}
                        </div>

                    }
                    )
                }
            </div>
        </div>
    )
}