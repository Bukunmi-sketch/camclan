import '../css/modal.css';


import "../css/logout.css";


function Logout({toggleShowLogout}) {
    return (
        <div className="modal" id="popupContainer">
            <div className="modal-container">
                <div className="modal-header">
                    {/* <span><h4> NOTICE ! </h4></span> */}
                </div>

                <div className="modal-content">

                    <div className="logout-form">
                        <div className="danger-icon"><ion-icon name="alert-circle-outline"></ion-icon></div>
                        <span className="h3">Leaving So Soon ?</span>
                        <span className="text">Are you sure you want to log out ?</span>
                        <div className="logout-box">
                            <button onClick={() => toggleShowLogout()}>Cancel</button>
                            <button>Logout</button>
                        </div>
                    </div>



                </div>

            </div>
        </div>

    );
}

export default Logout;