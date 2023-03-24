import { useEffect, useState } from 'react'
import { Title } from '../home/Title'
import "./Gallery.css"

export const PublicGalleryView = () => {

    const [publicPhotos, setPublicPhotos] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/gallery`)
                .then(response => response.json())
                .then((photoGallery) =>
                setPublicPhotos(photoGallery))
        },
        []
    )


    return (
        <>
        <Title/>
        <div className="galleryPage">
            <h3 className="galleryHeader">Gallery</h3>
            <div className="gallery">
                {
                    publicPhotos.map(publicPhoto => {
                        return <div><img className="galleryImg" key={`publicPhoto--${publicPhoto.id}`}
                            src={publicPhoto.imageURL} />
                        </div>

                    }
                    )
                }
            </div>
        </div>
        </>
    )
}