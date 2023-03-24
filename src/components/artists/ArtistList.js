import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Title } from '../home/Title'
import "./Artist.css"


export const ArtistList = ({ searchTermState }) => {

    const [artists, setArtists] = useState([])
    const [filteredArtists, setFilteredArtists] = useState([])

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    const navigate = useNavigate()


    useEffect(
        () => {
            fetch(`http://localhost:8088/artists`)
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

    // useEffect(
    //     () => {
    //         const searchedArtist = artists.filter(artist => {
    //             return artist.artistName.toLowerCase().startsWith(searchTermState.toLowerCase())
    //         }
    //         )
    //         setFilteredArtists(searchedArtist)
    //     },
    //     [searchTermState]

    // )

    const addArtistButton = (event) => {
        event.preventDefault()

        navigate(`/artists/addartist`)

    }

    const editArtistButton = (event, artists) => {
        event.preventDefault()

        navigate(`/artists/${artists}/edit`)

    }

    const getAllArtists = () => {

        fetch(`http://localhost:8088/artists`)
            .then(response => response.json())
            .then((artistArray) => {
                setArtists(artistArray)
            })
    }

    const handleDeleteArtistButton = (id) => {

        return fetch(`http://localhost:8088/artists/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                getAllArtists()
            })
    }

    return (
        <>
         <Title />
            < div className="artistPage" >
                <h2 className="artistHeader">Artists</h2>

                {
                    fatbackUserObject.admin
                        ?
                        <div className="button">
                            <button
                                onClick={(clickEvent) => { addArtistButton(clickEvent, artists.id) }}
                                className="addArtistButton">
                                Add New Artist
                            </button>


                        </div> :
                        <></>

                }
                
                <div className="artists">
                    {
                        filteredArtists.map((artist) => {
                            return <div className="artist" key={`artist--${artist.id}`}>
                                <img className="artistImg" src={artist.imageURL} />
                                <div>{artist.artistName}</div><br></br>
                                {fatbackUserObject.admin ? <><div className="artistInfo">{artist.notes}</div><br></br>
                                    <div>Recording Date: {artist.startDate} - {artist.endDate}</div>
                                    <div className="editDeleteButtonContainer">
                                        <button className="editButton"
                                            onClick={(clickEvent) => {
                                                editArtistButton(clickEvent, artist.id)
                                            }}
                                        >Edit</button>
                                        <button className="deleteButton"
                                            onClick={() => {
                                                handleDeleteArtistButton(artist.id)
                                            }}>Delete</button></div></> : ""
                                }
                            </div>
                            
                        })
                    }
                </div>



            </div >
        </>

    )
}