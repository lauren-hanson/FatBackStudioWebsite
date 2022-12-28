
//import {useLocation } from "react-router-dom"

export const Authorized = ({ children }) => {

   // const location = useLocation()

    if (localStorage.getItem("fatback_user")) {
        return children
    }
    else {
        return children
    }
}



// return <Navigate
//     to={`/login/${location.search}`}
//     replace
//     state={{ location }} />