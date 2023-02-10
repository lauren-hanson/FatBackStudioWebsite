import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
// import { BookingForm } from "./booking/BookingForm"
// import { MyRequest } from "./booking/MyRequest"
// import { RequestEdit } from "./booking/RequestEdit"

import "./FatBackStudio.css"


export const FatBackStudio = () => {

    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
		<Route path="*" element={
			<Authorized>
				<>
					<NavBar />
					<ApplicationViews />
				</>
			</Authorized>

		} />
    </Routes>
}

