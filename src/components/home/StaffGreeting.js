import { useEffect, useState } from "react"
//import { ModalWindow } from "./ModalTest"

export const StaffGreeting = () => {

    const [refresh, setRefresh] = useState(true)

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    const windowAlert = () => {

        alert(`Welcome FatBack Fam!`)
    }

    useEffect(() => {

        fetch('http://localhost:8088/users')

            .then(response => response.json())

            .then(() => {
                setRefresh(!refresh)
            })

            .then(() => {
                windowAlert()
                // <ModalWindow /> 
            })


    },
        [])


}


