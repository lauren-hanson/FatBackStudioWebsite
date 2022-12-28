import { ClientNavBar } from "./ClientNavBar"
import { StaffNavBar } from "./StaffNavBar"
import { PublicNavBar } from "./PublicNavBar"
import "./NavBar.css"

export const NavBar = () => {
   
    const localFatBackUser = localStorage.getItem("fatback_user")
	const fatbackUserObject = JSON.parse(localFatBackUser)

    if (!fatbackUserObject) {
        return <>
			<PublicNavBar />  
        </>
    } 
    else if (fatbackUserObject.staff) {
        return <>
        	<StaffNavBar />
        </>
    } 
	else {
		return <>
			<ClientNavBar />
		</>
	}

    // if (fatbackUserObject.staff) { 
    //     return <StaffNavBar/> 
    // } else { 
    //     return <ClientNavBar/> 
    // }


    // if (localFatBackUser === false) {
    //     return <PublicNavBar />
    // } else if (fatbackUserObject.staff) { 
    //     return <StaffNavBar/> 
    // } else if (fatbackUserObject.staff === false) { 
    //     return <ClientNavBar/> 
    // }


    // if (fatbackUserObject.staff) { 
    //     return <StaffNavBar/> 
    // } else if () { 
    //     return <ClientNavBar/> 
    // }


}

