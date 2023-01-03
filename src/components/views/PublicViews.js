import { Outlet, Route, Routes } from "react-router-dom"
import { PublicAbout } from "../home/PublicAbout"
import { PublicGalleryView } from "../gallery/PublicGalleryView"
import { ArtistListPublic } from "../artists/ArtistListPublic"
import { ReserveButton } from "../home/ReserveButton"
import { Register } from "../auth/Register"
import { PublicHome } from "../home/PublicHome"
import "./ApplicationViews.css"


export const PublicViews = () => {

    return (
        <Routes>

            <Route path="/" element={
                <div className="views">
                    <Outlet />
                    <ReserveButton /><br></br>
                </div>
            }>

                <Route path="*" element={""} />
                <Route path="/" element={<PublicHome />} />
                <Route path="aboutFatBack" element={<PublicAbout />} />
                <Route path="register" element={<Register />} />
                <Route path="/gallery" element={<PublicGalleryView />} />
                <Route path="/artists" element={<ArtistListPublic />} />
            </Route>
        </Routes>
    )
}