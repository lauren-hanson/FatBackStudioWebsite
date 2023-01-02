import { useEffect, useState } from "react"
//import {ModalTest} from "./ModalTest"

export const ClientGreeting = () => {

    const [refresh, setRefresh] = useState(true)

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    const windowAlert = () => {

        alert(`Welcome to FatBack Studio!`)
    }

    useEffect(() => {

        fetch('http://localhost:8088/users')

            .then(response => response.json())

            .then(() => {
                setRefresh(!refresh)
            })

            .then(() => {
                // <ModalTest /> 
                windowAlert()
            })


    },
        [])


}