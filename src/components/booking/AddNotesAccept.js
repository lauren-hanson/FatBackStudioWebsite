import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./Requests.css"

export const AddNotesAccept = ({ id }) => {

    //const {requestId} = useParams()
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

                window.alert("Your notes have been saved.")

                // {
                //     modal && (
                //         <div className="modal_window">
                //             <div onClick={toggleModal}></div>

                //             <p className="modal_content">
                //              Your notes have been saved. 
                //             </p>
                //             <button className="modal_close" onClick={toggleModal}>
                //                 CLOSE
                //             </button>
                //         </div>
                //     )
                // }
            })
            .then(() => {
                navigate("/schedule")
            })

    }

    // const handleEditNotes = (event) => {
    //     event.preventDefault()

    //     const newStaffNote = {
    //         notes: notes.notes
    //     }

    //     return fetch(`http://localhost:8088/requests/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(newStaffNote)
    //     })

    //         .then((response) => response.json())

    //         .then(() => {
    //             window.alert("Your edits have been saved.")
    //         })

    //         .then(() => {
    //             navigate("/requests")
    //         })

    // }


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
                {/* {notes?.notes?.length ?
                    <button
                        className="saveNotesButton"
                        onClick={(event) => {
                            handleEditNotes(event)                   
                        }} >
                        Edit Note
                    </button> :  */}
                <button
                    className="saveNotesButton"
                    onClick={(event) => {
                        handleSaveNotes(event)
                    }}>
                    Save Notes
                </button>
                {/* } */}
            </form>
        </div>

    )
}