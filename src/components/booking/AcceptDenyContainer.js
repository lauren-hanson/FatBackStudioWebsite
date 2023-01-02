import { PendingButtons } from "./PendingButtons"
import { AddNotes } from "./AddNotes"

export const AcceptDenyContainer = ({ request, id }) => {

    if (request.isPending === true) {
        return <PendingButtons request={request} id={id} />
    } else if (request.isAccepted === true) {
        return <div className="staffNotesContainer">
        ✅ Request has been accepted!<br></br><br></br>
            <AddNotes request={request} id={id}/>
        </div>
    } else if (request.isDenied === true) {
        return <div >❌ Request has been denied.</div>
    }
}