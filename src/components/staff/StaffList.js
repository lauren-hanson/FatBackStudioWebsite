import { useEffect, useState } from 'react'
import { useNavigate, } from "react-router-dom"
import "./Staff.css"

export const StaffList = ({ searchTermState }) => {


    const [staffMembers, setStaff] = useState([])
    const [filteredStaff, setFilteredStaff] = useState([])
    const [staffTitles, setTitle] = useState([])

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    const navigate = useNavigate()

    // const sortFilteredStaff = [...filteredStaff].sort((a, b) => a.fullName > b.fullName ? 1 : -1)

    useEffect(
        () => {
            fetch(`http://localhost:8088/staff?&_expand=user&_sort=fullName`)
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


    return (

        <div className="staffPage">
            <h2 className="staffHeader">Our Staff</h2>

            {
                fatbackUserObject.isAdmin=true
                    ?
                    <div className="button">
                        <button
                            onClick={(clickEvent) => { addStaff(clickEvent, staffMembers.id) }}
                            className="addNewStaffButton">
                            Add New Staff Member
                        </button>


                    </div> :
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
                                {staffTitles.map(staffTitle => {
                                    if (staffTitle.id === staff.titleId) {
                                        return <div className="title">{staffTitle.title.type}</div>

                                    }

                                })}
                            </div>

                        </div>
                    })
              
                }

            </div>
        </div>
    )
}