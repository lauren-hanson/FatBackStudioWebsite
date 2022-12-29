import { Outlet, Route, Routes } from "react-router-dom"
import { BookingForm } from "../booking/BookingForm"
import { Requests } from "../booking/Requests"
import { About } from "../home/About"
import { AddStaff } from "../staff/AddStaff"
import { StaffEdit } from "../staff/StaffEdit"
import { GalleryView } from "../gallery/GalleryView"
import { AddGalleryImage } from "../gallery/AddGalleryImage"
import { ArtistContainer } from "../artists/ArtistContainer"
import { AddArtist } from "../artists/AddArtist.js"
import { ArtistEdit } from "../artists/ArtistEdit.js"
import { FutureBookings } from "../booking/FutureBookings"
//import { StudioCalendar } from "../calendar/Calendar"
import { Home } from "../home/Home.js"
import "./ApplicationViews.css"



export const StaffViews = () => {

    return (
        <Routes>

            <Route path="/" element={
                <div className="views">
                
                    <Home />
                    <Outlet />
                </div>
            }>
                <Route path="*" element={""} />
                <Route path="aboutFatBack" element={<About />} />
                <Route path="aboutFatBack/addstaff" element={<AddStaff />} />
                <Route path="aboutFatBack/:staffId/edit" element={<StaffEdit />} />
                <Route path="gallery" element={<GalleryView />} />
                <Route path="gallery/addgalleryimage" element={<AddGalleryImage />} />
                <Route path="artists" element={<ArtistContainer />} />
                <Route path="artists/addartist" element={<AddArtist />} />
                <Route path="artists/:artistId/edit" element={<ArtistEdit />} />
                <Route path="booking" element={<BookingForm />} />
                <Route path="requests" element={<Requests />} />
                <Route path="futurebookings" element={<FutureBookings />} />
                {/* <Route path="calendar" element={<StudioCalendar />} /> */}


            </Route>
        </Routes>
    )
}


/*
export const StaffViews = () => {
    <Routes>

        <Route path="*" element={
            <div className="views">
                <h1 className="title-main">FatBack Studio</h1>

                <Outlet />
            </div>
        } />

        <Route path="/" element={
            <div className="views">
                <h1 className="title-main">FatBack Studio</h1>


                <Outlet />
            </div>
        }>
            <Route path="*" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="aboutFatBack" element={<About />} />
            <Route path="requests" element={<Requests />} />
            <Route path="futurebookings" element={<FutureBookings />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="/gallery" element={<GalleryView />} />
            <Route path="/artists" element={<ArtistContainer />} />

        </Route>
    </Routes>
}
*/
