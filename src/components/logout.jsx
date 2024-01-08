import '../css/modal.css';



function Modal() {
    return (
        <div className="modal" id="popupContainer">
            <div className="modal-container">
                <div className="modal-header">
                    {/* <span><h4> NOTICE ! </h4></span> */}
                    <span className="close" >X</span>
                </div>

                <div className="modal-content">

                    <div className="danger-icon"></div>
                    <span className="h3">Leaving So Soon ?</span>
                    <span className="text">Are you sure you want to log out ?</span>
                    <div className="logout-box">
                        <button>Cancel</button>
                        <button>Logout</button>
                    </div>


                </div>

            </div>
        </div>

    );
}

export default Modal;