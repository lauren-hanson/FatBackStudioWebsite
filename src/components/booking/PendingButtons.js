import { AcceptButton } from "./AcceptButton.js"
import { DenyButton } from "./DenyButton.js"
import "./Requests.css"

export const PendingButtons = ({ requests, id }) => {

    return (
        <>
            <div className="acceptDenyButtonContainer">
                <AcceptButton requests={requests} id={id} />
                <DenyButton requests={requests} id={id} />
            </div>
        </>
    )
}