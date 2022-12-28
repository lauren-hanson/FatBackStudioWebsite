
// export const StaffSearch = ({ setterFunction }) => {

//     const localFatBackUser = localStorage.getItem("fatback_user")
//     const fatbackUserObject = JSON.parse(localFatBackUser)
    
//     return (

//         <>
//             {!fatbackUserObject.staff ?
//                 <div className="findStaff">
//                     <label>Search our staff...</label>
//                     <input
//                         onChange={
//                             (changeEvent) => {
//                                 setterFunction(changeEvent.target.value)

//                             }
//                         }
//                         type="text" placeholder="Enter search terms" />


//                 </div> : ""
//             }
//         </>

//     )
// }