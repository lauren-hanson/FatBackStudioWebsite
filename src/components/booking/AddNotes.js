import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./Requests.css"

export const AddNotes = ({ id }) => {

    const [notes, setNotes] = useState({
    })

    useEffect(
        () => {
            fetch(`http://localhost:8088/requests/${id}`)
                .then(response => response.json())
                .then((staffNotes) => {
                    setNotes(staffNotes)
                })
        }, []
    )

    const navigate = useNavigate()

    const handleSaveNotes = (event) => {
        event.preventDefault()

        const newStaffNote = {
            notes: notes.notes
        }

        return fetch(`http://localhost:8088/requests/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStaffNote)
        })

            .then((response) => response.json())
            .then(() => {
             
                window.alert("Your note has been saved.")
        
            })
            .then(() => {
                navigate("/requests")
            })

    }

    const handleEditNotes = (event) => {
        event.preventDefault()

        const newStaffNote = {
            notes: notes.notes
        }

        return fetch(`http://localhost:8088/requests/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStaffNote)
        })

            .then((response) => response.json())

            .then(() => {
                window.alert("Your edits have been saved.")
            })

            .then(() => {
                navigate("/requests")
            })

    }


    return (

        <div>
            <form>
                <div>
                    <textarea
                        id="textNotes"
                        placeholder="Add notes..."
                        value={notes.notes}
                        onChange={(event) => {
                            const copy = { ...notes }
                            copy.notes = event.target.value
                            setNotes(copy)
                        }}>
                    </textarea>
                </div>
                {notes?.notes?.length ?
                    <button
                        className="saveNotesButton"
                        onClick={(event) => {
                            handleEditNotes(event)                   
                        }} >
                        Edit Note
                    </button> : <button
                        className="saveNotesButton"
                        onClick={(event) => {
                            handleSaveNotes(event)
                        }}>
                        Save Note
                    </button>}
            </form>
        </div>

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