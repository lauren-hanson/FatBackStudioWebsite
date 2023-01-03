import React, { useState } from "react";
import "./Modal.css";

export const ClientModal = ({user}) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
           <h1 id="title-main" onClick={toggleModal} className="btn-modal">FatBack Studio </h1>

            {modal && (
                <div className="modal_window">
                    <div onClick={toggleModal}></div>
                    <h2 className="modal_titlebar">Welcome {user.fullName} to the FatBack Fam</h2>
                    {/* <p className="modal_content">
                        You have new pending requests.
                    </p> */}
                    <button className="modal_close" onClick={toggleModal}>
                        CLOSE
                    </button>
                </div>
            )}

        </>
    )
}
