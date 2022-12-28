import { Outlet, Route, Routes } from "react-router-dom"
import { About } from "../home/About"
import { PublicGalleryView } from "../gallery/PublicGalleryView"
import { ArtistListPublic } from "../artists/ArtistListPublic"
import { ReserveButton } from "../home/ReserveButton"

import "./ApplicationViews.css"
//import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { Home } from "../home/Home"


export const PublicViews = () => {

    // const localFatBackUser = localStorage.getItem("fatback_user")
    // const fatbackUserObject = JSON.parse(localFatBackUser)

    return (
        <Routes>

            <Route path="/" element={
                <div className="views">
                    < Home />
                    < ReserveButton /><br></br>
                    <Outlet />
                </div>
            }>

                <Route path="*" element={""} />
                <Route path="aboutFatBack" element={<About />} />
                <Route path="register" element={<Register />} />
                {/* I think above line is where Home.js component would go? */}
                <Route path="/gallery" element={<PublicGalleryView />} />
                <Route path="/artists" element={<ArtistListPublic />} />

                {/* <Route path="/login" element={ <Login /> } /> */}

                {/* <Route path="reserve" element={<BookingForm />} />
                <Route path="myrequest" element={ <MyRequest /> } />
                <Route path="myrequest/:requestId" element={<RequestEdit />} /> */}

            </Route>
        </Routes>
    )
}