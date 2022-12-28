import { useState } from "react"
//import { StaffSearch } from "../staff/StaffSearch"
import { StaffList } from "../staff/StaffList"

export const StaffContainer = () => { 

    const [searchTerms, setSearchTerms] = useState("")

    return (
        <>
        {/* < StaffSearch setterFunction={setSearchTerms}/>  */}

        < StaffList searchTermState={searchTerms}/> 
        </>
    )
}