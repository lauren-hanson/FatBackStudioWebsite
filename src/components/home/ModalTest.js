// import "./ModalTest.css"

// export const ModalTest = () => { 

//     const [modal, setModal] = useState(false)

//     const toggleModal = () => { 
//         setModal(!modal)
//     }

//     return ( <>
//     <button
//     onClick={toggleModal}>
//         Open
//     </button>
//     <div>
//         <div className="modal__overlay"></div>
//         <div className="modal__window">
//             Hello Modal
//         </div>
//         <p>WELCOME</p>
//         <button
//         className="modal__close" 
//         onClick={toggleModal}>Close</button>
//     </div>
//     </>)
// }

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
