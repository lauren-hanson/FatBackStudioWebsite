import { PendingButtons } from "./PendingButtons"
// import { DenyReason } from "./DenyReason"
import { AddNotesDeny } from "./AddNotesDeny"

export const AcceptDenyContainer = ({ requests, id, refresh, setRefresh }) => {

    if (requests.isPending === true) {
        return <PendingButtons requests={requests} id={id} refresh={refresh} setRefresh={setRefresh} />
    } else if (requests.isAccepted === true) {
        return <div>Request has been accepted & added to schedule 📅 
        </div>
    } else if (requests.isDenied === true) {
        return <div >❌ Request has been denied. <AddNotesDeny requests={requests} id={id}/></div>
    }
}