import { AcceptButton } from "./AcceptButton.js"
import { DenyButton } from "./DenyButton.js"
import "./Requests.css"

export const PendingButtons = ({ requests, id, refresh, setRefresh }) => {

    return (
        <>
            <div className="acceptDenyButtonContainer">
                <AcceptButton requests={requests} id={id} refresh={refresh} setRefresh={setRefresh} />
                <DenyButton requests={requests} id={id} refresh={refresh} setRefresh={setRefresh} />
            </div>
        </>
    )
}