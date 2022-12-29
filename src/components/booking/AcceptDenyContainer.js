import { PendingButtons } from "./PendingButtons"
import { AddNotes } from "./AddNotes"

export const AcceptDenyContainer = ({ requests, id }) => {

    if (requests.isPending === true) {
        return <PendingButtons requests={requests} id={id} />
    } else if (requests.isAccepted === true) {
        return <div className="staffNotesContainer">Request has been accepted!<br></br><br></br>
            <AddNotes requests={requests} id={id}/>
        </div>
    } else if (requests.isDenied === true) {
        return <div >❌ Request has been denied.</div>
    }
}