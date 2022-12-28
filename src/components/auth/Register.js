import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [customer, setCustomer] = useState({
        email: "",
        fullName: "",
        isStaff: false,
        isAdmin: false
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("fatback_user", JSON.stringify({
                        id: createdUser.id,
                        staff: createdUser.isStaff,
                        admin: createdUser.isAdmin
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${customer.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = { ...customer }
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (
        <div className="register container--register">
            <main style={{ textAlign: "center" }}>
                <form className="form--login form--register" onSubmit={handleRegister}>
                    <h1 className="h3 mb-3 font-weight-normal">Please Register for FatBack Studio</h1>
                    <fieldset>
                        <label htmlFor="fullName"> Full Name </label>
                        <input onChange={updateCustomer}
                            type="text" id="fullName" className="form-control"
                            placeholder="Enter your name" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email"> Email address </label>
                        <input onChange={updateCustomer}
                            type="email" id="email" className="form-control"
                            placeholder="Email address" required />
                    </fieldset>
                    <fieldset>
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
                    </fieldset>
                </form>
            </main>
        </div>
    )
}

