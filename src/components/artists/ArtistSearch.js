import "./Artist.css"

export const ArtistSearch = ({ setterFunction }) => {

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    return (

        <>
            {!fatbackUserObject.staff ?
                <div className="findArtists">
                    <label>Search our artists...</label>
                    <input id="inputSearch"
                        onChange={
                            (changeEvent) => {
                                setterFunction(changeEvent.target.value)

                            }
                        }

                        type="text" placeholder="Enter search terms" />


                </div> : ""
            }
        </>

    )
}