import { useEffect, useState } from 'react'
import "./Requests.css"

export const ContactNotice = ({ id }) => {

    const [contact, update] = useState({
        contacted: false
    })

    useEffect(
        () => {
            fetch(`http://localhost:8088/requests?isAccepted=true`)
                .then(response => response.json())
                .then((requestInfo) => {
                    update(requestInfo)
                })
        }, []
    )



    return (
        <>
            <div htmlFor="email"> Email sent? </div>
            <input onChange={(evt) => {
                const copy = { ...contact }
                copy.contacted = evt.target.checked
                update(copy)
            }}
                type="checkbox" id="contact" />
        </>
    )
}

{/* <fieldset>
                        <input onChange={(evt) => {
                            const copy = { ...customer }
                            copy.isStaff = evt.target.checked
                            setCustomer(copy)
                        }}
                            type="checkbox" id="isStaff" />
                        <label htmlFor="email"> I am an employee </label>
                    </fieldset>
                    <fieldset>
                        <button type="submit" id="registerButton"> Register </button>
                    </fieldset> */}