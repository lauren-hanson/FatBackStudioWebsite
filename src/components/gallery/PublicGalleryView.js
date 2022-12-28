import { useEffect, useState } from 'react'
import "./Gallery.css"

export const PublicGalleryView = () => {

    const [photos, setPhotos] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/gallery`)
                .then(response => response.json())
                .then((photoGallery) =>
                    setPhotos(photoGallery))
        },
        []
    )


    return (
        <div className="galleryPage">
            <h3 className="galleryHeader">Gallery</h3>
            <div className="gallery" key={photos.id}>
                {
                    photos.map(photo => {
                        return <div><img className="galleryImg" key={photo.id}
                            src={photo.imageURL} />
                        </div>

                    }
                    )
                }
            </div>
        </div>
    )
}