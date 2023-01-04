import { Outlet, Route, Routes } from "react-router-dom"
import { BookingForm } from "../booking/BookingForm"
import { MyRequest } from "../booking/MyRequest"
import { RequestEdit } from "../booking/RequestEdit"
//import { BookingStatus } from "../booking/BookingStatus"
import { About } from "../home/About"
import { GalleryView } from "../gallery/GalleryView"
import { ArtistContainer } from "../artists/ArtistContainer"
import { Home } from "../home/Home.js"
import { PublicHome } from "../home/PublicHome"
import "./ApplicationViews.css"


export const ClientViews = () => {

    // const localFatBackUser = localStorage.getItem("fatback_user")
    // const fatbackUserObject = JSON.parse(localFatBackUser)

    return (
        <Routes>
            <Route path="/" element={
                <div className="views">
                    <Outlet />
                </div>
            }>

                <Route path="*" element={<PublicHome />} />
                <Route path="/" element={<Home />} />
                <Route path="aboutFatBack" element={<About />} />
                <Route path="gallery" element={<GalleryView />} />
                <Route path="artists" element={<ArtistContainer />} />
                <Route path="reserve" element={<BookingForm />} />
                <Route path="myrequest" element={<MyRequest />} />
                <Route path="myrequest/:requestId" element={<RequestEdit />} />
            </Route>
        </Routes>
    )
}
