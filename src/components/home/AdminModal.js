import React, { useState } from "react";
import "./Modal.css";

export const AdminModal = ({users, pendingRequests}) => {
  const [modal, setModal] = useState(false)
  //const [timeout, setTimeout] = useState(true)


  const toggleModal = () => {
    setModal(!modal)
    // setTimeout(timeout, 1000)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <h1 id="title-main" onClick={toggleModal} className="btn-modal">FatBack Studio</h1> 

      {modal && (
        <div className="modal_window">
          <div onClick={toggleModal}></div>
            <h2 className="modal_titlebar">Welcome {users?.user?.fullName}</h2>
            <p className="modal_content">
              You have {pendingRequests.length} new pending requests.
            </p>
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

// export const ModalWindow = {


//     init() {
//         document.body.addEventListener("click", e => {
//             if (e.target.classList.contains("modal__close")) {
//                 this.closeModal(e.target);
//             }
//         });
//       this.openModal();
//     },

//     getHtmlTemplate(modalOptions) {
     
//         return `
//             <div class="modal__overlay">
//                 <div class="modal__window">
//                     <div class="modal__titlebar">
//                         <span class="modal__title">${modalOptions.title}</span>
//                         <button class="modal__close material-icons">close</button>
//                     </div>
//                     <div class="modal__content">
//                         ${modalOptions.content}
//                     </div>
//                 </div>
//             </div>
//         `;
//     },

//     openModal(modalOptions = {}) {
//         modalOptions = Object.assign({
//             title: 'Welcome',
//             content: 'You have pending requests!'
//         }, modalOptions);

//         const modalTemplate = this.getHtmlTemplate(modalOptions);
//         document.body.insertAdjacentHTML("afterbegin", modalTemplate);
//     },

//     closeModal(closeButton) {
//         const modalOverlay = closeButton.parentElement.parentElement.parentElement;
//         document.body.removeChild(modalOverlay);
//     }
// };

// // document.addEventListener("DOMContentLoaded", () => ModalWindow.init());
