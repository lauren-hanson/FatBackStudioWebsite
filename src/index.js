
import { FatBackStudio } from "./components/FatBackStudio"
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Footer } from "../src/components/footer/Footer"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <FatBackStudio />
        <Footer />
    </BrowserRouter>

    
)

