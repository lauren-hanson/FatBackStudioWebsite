import { useEffect, useState } from 'react'
import { Title } from '../home/Title'

import "./Artist.css"

export const ArtistListPublic = () => {

    const [artists, setArtists] = useState([])
    const [filteredArtists, setFilteredArtists] = useState([])


    useEffect(
        () => {
            fetch(`http://localhost:8088/artists?_sort=artistName[desc]`)
                .then(response => response.json())
                .then((artistArray) => {
                    setArtists(artistArray)
                })
        },
        []
    )

    useEffect(
        () => {
            setFilteredArtists(artists)
        },
        [artists]
    )


    return (
        <>
        <Title /> 
            < div className="artistPage" >
                <h2 className="artistHeader">Artists</h2>
                <div className="artists">
                    {
                        filteredArtists.map((artist) => {
                            return <div className="artist" key={`artist--${artist.id}`}>
                                <img className="artistImg" src={artist.imageURL} />
                                <div>{artist.artistName}</div>
                            </div>
                        })
                    }
                </div>



            </div >
        </>

    )
}