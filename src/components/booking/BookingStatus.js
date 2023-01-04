import { AcceptBooking } from "./AcceptBooking.js"
import { DenyBooking } from "./DenyBooking.js"
import { PendingBooking } from "./PendingBooking.js"

export const BookingStatus = ({ requests }) => {


    if (requests.isPending) {
        return <PendingBooking />
    } else if (requests.isAccepted) {
        return <AcceptBooking requests={requests}/>
    } else if (requests.isDenied) {
        return <DenyBooking requests={requests}/>
    }

}