import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./Staff.css"

export const StaffList = () => {


    const [staffMembers, setStaff] = useState([])
    const [filteredStaff, setFilteredStaff] = useState([])
    const [staffTitles, setTitle] = useState([])

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    const navigate = useNavigate()

    // const sortFilteredStaff = [...filteredStaff].sort((a, b) => a.fullName > b.fullName ? 1 : -1)

    useEffect(
        () => {
            fetch(`http://localhost:8088/staff?&_expand=user&_expand=title&_sort=fullName`)
                .then(response => response.json())
                .then((staffArray) => {
                    setStaff(staffArray)
                })
        },
        []
    )

    useEffect(
        () => {
            setFilteredStaff(staffMembers)
        },
        [staffMembers]
    )


    // useEffect(
    //     () => {
    //         const searchedStaffMembers = staffMembers.filter(staffMember => {
    //             return staffMember.user.fullName.toLowerCase().startsWith(searchTermState.toLowerCase())
    //         }
    //         )
    //         setFilteredStaff(searchedStaffMembers)
    //     },
    //     [searchTermState]
    // )

    useEffect(
        () => {
            fetch(`http://localhost:8088/staff?_expand=title`)
                .then(response => response.json())
                .then((titleArray) => {
                    setTitle(titleArray)
                })

        },
        []
    )

    const addStaff = (event) => {
        event.preventDefault()

        navigate(`/aboutFatBack/addstaff`)

    }

    const editStaff = (event, staff) => {
        event.preventDefault()

        navigate(`/aboutFatBack/${staff}/edit`)

    }


    return (

        <div className="staffPage">
            <h2 className="staffHeader">Our Staff</h2>

            {
                fatbackUserObject.admin
                    ?
                    <div className="button">
                        <button
                            onClick={(clickEvent) => { addStaff(clickEvent, staffMembers.id) }}
                            className="addNewStaffButton">
                            Add New Staff Member
                        </button>
                    </div>
                    :
                    <></>
            }

            <div className="staffMembers">
                {
                    filteredStaff.map((staff) => {
                        return <div className="staff" key={`staff--${staff.id}`}>

                            <img className="staffImg" src={staff.imageURL} />
                            <div className="staffInfo">
                                <div className="fullName">
                                    {staff?.user?.fullName}</div>
                                <div className="title">
                                    {staff?.title?.type}
                                </div>

                                {
                                    fatbackUserObject.admin ?
                                        <><br></br>
                                            <div className="email">{staff?.user?.email}</div> <br></br>
                                            <div className="startDate">{staff?.user?.phoneNumber}</div><br></br>
                                            
                                            <button
                                                onClick={(clickEvent) => { editStaff(clickEvent, staff.id) }}
                                                className="editStaffButton">
                                                Edit
                                            </button> </> : ""
                                }
                            </div>

                        </div>
                    })

                }
                {staffTitles.map(title => {
                    if (title.id === title.titleId) {
                        return <div className="title">{title.type}</div>
                    }
                })}

            </div>
        </div>
    )
}