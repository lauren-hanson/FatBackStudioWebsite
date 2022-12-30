//import { useEffect, useState } from "react"

export const StaffGreeting = ({ users }) => {

    const windowAlert = () => {

        alert(`Welcome ${users.fullName}!`)
    }

    return (<>
        {windowAlert()}</>)

}


