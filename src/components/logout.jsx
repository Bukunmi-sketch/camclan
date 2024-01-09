import '../css/modal.css';


import "../css/logout.css";
import Cookies from 'js-cookie'
import {  useNavigate } from "react-router-dom";
import { usertoken } from '../utils/APIRoutes';




function Logout({toggleShowLogout}) {

    const navigate= useNavigate();

    const handleLogout = () => {
        Cookies.remove("zoom")
         navigate('/');
         console.log("clear")
      };

    // const handleLogout = () => {
    //     localStorage.removeItem(usertoken);
    //     navigate('/');
    //     // Other logout actions, such as redirecting to a login page
    //   };
 

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
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </div>



                </div>

            </div>
        </div>

    );
}

export default Logout;