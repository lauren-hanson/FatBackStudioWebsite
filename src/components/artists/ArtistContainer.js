import { useState } from "react"
//import { ArtistSearch } from "../artists/ArtistSearch"
import { ArtistList } from "../artists/ArtistList"

export const ArtistContainer = () => { 

    const [searchTerms, setSearchTerms] = useState("")

    return (
        <>
        {/* < ArtistSearch setterFunction={setSearchTerms}/>  */}
        < ArtistList searchTermState={searchTerms}/> 
        </>
    )
}