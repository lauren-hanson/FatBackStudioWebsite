import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("  ")
    const navigate = useNavigate()

    const location = useLocation()
    let from = ""

    if (location.state !== null) { from = location.state.from }


    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("fatback_user", JSON.stringify({
                        id: user.id,
                        staff: user.isStaff,
                        admin: user.isAdmin
                    }))

                    navigate("*")
                }
                else {
                    window.alert("Invalid login")
                }
            })
            
            .then(() => {
                if (from === "reserveButton/reserve") {
                    navigate("/reserve")
                } else {
                    navigate("/")
                }
            })
    }

    return (
        <div className="login">
            <main className="container--login">
                <section>
                    <form className="form--login" onSubmit={handleLogin}>
                        <h1>FatBack Studio</h1>
                        <h2>Please sign in</h2>
                        <fieldset>
                            <label htmlFor="inputEmail" className="inputEmail"> Email address </label>
                            <input type="email"
                                value={email}
                                onChange={evt => set(evt.target.value)}
                                className="form-control"
                                placeholder="Email address"
                                required autoFocus />
                        </fieldset>
                        <fieldset>
                            <button type="submit" id="submitButton">
                                Sign in
                            </button>
                        </fieldset>
                    </form>
                </section>
                <section className="link-register">
                    <Link to="/register" id="loginlink">Not a member yet?</Link>
                </section>
            </main>
        </div>

    )
}

