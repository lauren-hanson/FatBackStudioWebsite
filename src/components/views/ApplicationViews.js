
import { ClientViews } from "../views/ClientViews"
import { StaffViews } from "../views/StaffViews"
import { PublicViews } from "../views/PublicViews"
import "./ApplicationViews.css"


export const ApplicationViews = () => {

    const localFatBackUser = localStorage.getItem("fatback_user")
    const fatbackUserObject = JSON.parse(localFatBackUser)

    if (!fatbackUserObject) {
        return <>
            <PublicViews />
        </>
    }
    else if (fatbackUserObject.staff) {
        return <>
            <StaffViews />
        </>
    }
    else {
        return <>
            <ClientViews />
        </>
    }

}



// if (localFatBackUser === false) {
//     return <PublicViews />
// } else if (fatbackUserObject.staff) { 
//     return <StaffViews/> 
// } else if (fatbackUserObject.staff === false) { 
//     return <ClientViews/> 
// }

 // if (fatbackUserObject.staff) {
    //     return <StaffViews/>
    // } else () {
    //     return <ClientViews/>
    // }

