import { AcceptButton } from "./AcceptButton.js"
import { DenyButton } from "./DenyButton.js"
import "./Requests.css"

export const PendingButtons = ({ request, id }) => {

    return (
        <>
            <div className="acceptDenyButtonContainer">
                <AcceptButton request={request} id={id} />
                <DenyButton request={request} id={id} />
            </div>
        </>
    )
}