import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import "./Staff.css"

export const StaffEdit = () => {

    const { staffId } = useParams()
    const [titles, setTitles] = useState([])
    const [updateUser, setUpdateUser] = useState({
        fullName: "",
        email: ""
    })
    const [updateStaff, setUpdateStaff] = useState({
        startDate: "",
        imageURL: "",
        titleId: 0
    })


    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/users/${staffId}`)
            .then(response => response.json())
            .then((staffInfo) => {
                setUpdateUser(staffInfo)
            })
    }, [])


    useEffect(() => {
        fetch(`http://localhost:8088/staff/${staffId}`)
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

        return fetch(`http://localhost:8088/users/${staffId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateUser)
        })

            .then((response) => response.json())

            .then(() => {
                return fetch(`http://localhost:8088/staff/${staffId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updateStaff)
                })
            })


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
                            value={updateUser.fullName}
                            onChange={
                                (event) => {
                                    const copy = { ...updateUser }
                                    copy.fullName = event.target.value
                                    setUpdateUser(copy)
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
                            value={updateUser.email}
                            onChange={
                                (event) => {
                                    const copy = { ...updateUser }
                                    copy.email = event.target.value
                                    setUpdateUser(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>

                <fieldset >
                    <div className="form-group">
                        <label className="label" htmlFor="title" >Title:</label>

                        <option value="{updateStaff.titleId}"></option>

                        <select id="title"
                            required
                            value={updateStaff.titleId}
                            onChange={
                                (event) => {
                                    const copy = { ...updateStaff }
                                    copy.titleId = parseInt(event.target.value)
                                    setUpdateStaff(copy)
                                }}>
                          

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
                            defaultValue={updateStaff.startDate}
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