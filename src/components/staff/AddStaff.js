import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Staff.css"

export const AddStaff = () => {

    const [newStaff, setNewStaff] = useState({})
    //const [newStaffTitle, setNewStaffTitle] = useState({})
    const [titles, setTitles] = useState([])
    const [newUser, setNewUser] = useState({
        isStaff: true,
        isAdmin: false
    })

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/titles`)
            .then(response => response.json())
            .then((titleArray) => {
                setTitles(titleArray)
            })
    }, [])

    const handleSaveNewStaffButton = (event) => {
        event.preventDefault()

        const newUserToSendToAPI = {
            fullName: "",
            email: "",
            isStaff: true,
            isAdmin: false

        }

        const newStaffToSendToAPI = {
            startDate: "",
            imageURL: "",
            titleId: 0
        }


        return fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then((response) => response.json())

            .then(newUser => {
                newStaff.userId = newUser.id

                return fetch(`http://localhost:8088/staff`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newStaff)
                })
            })

            .then(() => {
                navigate("/aboutFatBack")
            })

    }

    return (
        <div>
            <h2 className="addStaffHeader">Add New Staff Member</h2>
            <form className="newStaffForm">
                <fieldset >
                    <div className="form-group">
                        <label className="label" htmlFor="name">Name: </label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            value={newUser.fullName}
                            onChange={
                                (event) => {
                                    const copy = { ...newUser }
                                    copy.fullName = event.target.value
                                    setNewUser(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>

                <fieldset >
                    <div className="form-group">
                        <label className="label" htmlFor="email">Email: </label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            value={newUser.email}
                            onChange={
                                (event) => {
                                    const copy = { ...newUser }
                                    copy.email = event.target.value
                                    setNewUser(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>

                <fieldset >
                    <div className="form-group">
                        <label className="label" htmlFor="title" >Title:</label>
                        <select id="title" required
                            onChange={
                                (event) => {
                                    const copy = { ...newStaff }
                                    copy.titleId = parseInt(event.target.value)
                                    setNewStaff(copy)
                                }}>
                            <option value="0"></option>

                            {
                                titles.map(
                                    (title) => {
                                        return <option
                                            key={`title--${title.id}`}
                                            value={title.id}
                                        >{title.type}
                                        </option>
                                    }
                                )
                            }
                        </select>

                    </div>
                </fieldset>

                <fieldset >
                    <div className="form-group dateContainer">
                        <label className="label" htmlFor="startDate">Start Date: </label>
                        <input
                            required autoFocus
                            type="date"
                            className="form-control"
                            value={newStaff.startDate}
                            onChange={
                                (event) => {
                                    const copy = { ...newStaff }
                                    copy.startDate = event.target.value
                                    setNewStaff(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>

                <fieldset >
                    <div className="form-group imageContainer">
                        <label className="label" htmlFor="image">Image: </label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="example.com"
                            value={newStaff.imageURL}
                            onChange={
                                (event) => {
                                    const copy = { ...newStaff }
                                    copy.imageURL = event.target.value
                                    setNewStaff(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <input onChange={(evt) => {
                        const copy = { ...newUser }
                        copy.isAdmin = evt.target.checked
                        setNewUser(copy)
                    }}
                        type="checkbox" id="isAdmin" />
                    <label htmlFor="email" id="isAdmin"> New Admin? </label>
                </fieldset>

                <button
                    className="saveNewStaffButton"
                    onClick={(event) => {
                        handleSaveNewStaffButton(event)
                    }}
                >
                    Add New Staff
                </button>
            </form>
        </div>
    )
}

