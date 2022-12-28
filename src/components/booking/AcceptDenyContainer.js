import { PendingButtons } from "./PendingButtons"
import { ContactNotice } from "./ContactNotice"

export const AcceptDenyContainer = ({ requests, id }) => {

    if (requests.isPending === true) {
        return <PendingButtons requests={requests} id={id} />
    } else if (requests.isAccepted === true) {
        return <div>Request has been accepted!<br></br>
            <ContactNotice requests={requests} id={id}/>
        </div>
    } else if (requests.isDenied === true) {
        return <div >❌ Request has been denied.</div>
    }
}