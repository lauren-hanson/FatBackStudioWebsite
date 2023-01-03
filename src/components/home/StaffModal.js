import React, { useState } from "react";
import "./Modal.css";

export const StaffModal = ({ users }) => {
    const [modal, setModal] = useState(false)

    // const [timeout, setTimeout] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
        setTimeout(1000)
    }

    // const toggleModal = () => {
    //     setModal(!modal)
    //     setTimeout(() => {
    //         modal.classList.toggle("show-modal");
    //     }, 5000)
    // }

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
                    <h2 className="modal_titlebar">Hi {users.fullName}</h2>
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



{/* <button onClick={toggleModal} className="btn-modal">
<h1 id="title-main" onClick={toggleModal} className="btn-modal">FatBack Studio {users.fullName}</h1>
Welcome FatBack Fam
</button> */}
