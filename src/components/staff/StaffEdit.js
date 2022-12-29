import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import "./Staff.css"

export const StaffEdit = () => {

    const { staffId } = useParams()
    const [titles, setTitles] = useState([])
    const [updateStaff, setUpdateStaff] = useState({
        fullName: "",
        email: ""
    })


    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/staff?&_expand=user&_expand=title/${staffId}`)
            .then(response => response.json())
            .then((staffInfo) => {
                setUpdateStaff(staffInfo)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8088/titles`)
            .then(response => response.json())
            .then((titleArray) => {
                setTitles(titleArray)
            })
    }, [])



    const handleUpdateStaffButton = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/staff?&_expand=user&_expand=title/${staffId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateStaff)
        })

            .then((response) => response.json())
            .then(() => {
                navigate("/aboutFatBack")
            })

    }


    return (

        <div>
            <h2 className="addStaffHeader">Edit Staff</h2>
            <form className="newStaffForm">
                <fieldset >
                    <div className="form-group">
                        <label className="label" htmlFor="name">Name: </label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            value={updateStaff.fullName}
                            onChange={
                                (event) => {
                                    const copy = { ...updateStaff }
                                    copy.fullName = event.target.value
                                    setUpdateStaff(copy)
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
                            value={updateStaff.email}
                            onChange={
                                (event) => {
                                    const copy = { ...updateStaff }
                                    copy.email = event.target.value
                                    setUpdateStaff(copy)
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
                                    const copy = { ...updateStaff }
                                    copy.titleId = parseInt(event.target.value)
                                    setUpdateStaff(copy)
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
                            value={updateStaff.startDate}
                            onChange={
                                (event) => {
                                    const copy = { ...updateStaff }
                                    copy.startDate = event.target.value
                                    setUpdateStaff(copy)
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
                            value={updateStaff.imageURL}
                            onChange={
                                (event) => {
                                    const copy = { ...updateStaff }
                                    copy.imageURL = event.target.value
                                    setUpdateStaff(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <input onChange={(evt) => {
                        const copy = { ...updateStaff }
                        copy.isAdmin = evt.target.checked
                        setUpdateStaff(copy)
                    }}
                        type="checkbox" id="isAdmin" />
                    <label htmlFor="email" id="isAdmin"> New Admin? </label>
                </fieldset>

                <button
                    className="saveNewStaffButton"
                    onClick={(event) => {
                        handleUpdateStaffButton(event)
                    }}
                >
                    Save Info
                </button>
            </form>
        </div>


    )
}