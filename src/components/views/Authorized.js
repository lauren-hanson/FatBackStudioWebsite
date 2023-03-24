export const Authorized = ({ children }) => {


    if (localStorage.getItem("fatback_user")) {
        return children
    }
    else {
        return children
    }
}


// return <Navigate
//     to={`*/${location.search}`}
//     replace
//     state={{ location }} />