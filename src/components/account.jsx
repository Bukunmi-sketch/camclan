import { Link } from 'react-router-dom';
import "../css/account.css";
import "../css/form.css";



function Account() {

    return (
        <div className="middle">

            <div className="dashboard-middle-content">

                <div className="dashboardbox">
                    <p>Welcome, <span> John Doe </span></p>
                </div>

                <div className="dashboardbox">
                    <p> 11:40pm </p>
                    <div className="dashboardbox-upload">
                        <p><b>12th Dec,2023</b></p>
                    </div>
                </div>
            </div>


            <div className="rooms">
                <div className="spanroom">Rooms</div>
                <div className="createroom">
                    <span> <ion-icon name="grid"></ion-icon></span>
                    <span><ion-icon name="list-outline"></ion-icon></span>
                    <button className="createbtn"><ion-icon name="add-outline"></ion-icon> Create Room</button>
                </div>
            </div>

            <div className="account-middle-content">

                <div className="general-info">
                    <span>General Information</span>
                    <span><button className='createbtn'>Edit</button></span>
                </div>

                <div className="display-pic">
                    <img src="" alt="" className='picture' />
                    <div className="inputbox-details">
                        <label htmlFor="display name"> Display Name </label>
                        <input type="text" name="email" placeholder="Add a display Name" required />
                    </div>
                </div>


                <div className="flex-inbox">
                    <div className="inputbox-details">
                        <label htmlFor="First Name"> First Name </label>
                        <input type="text" name="email" placeholder="Add a display Name" required />
                    </div>

                    <div className="inputbox-details">
                        <label htmlFor="Last Name"> Last Name </label>
                        <input type="text" name="email" placeholder="Add a display Name" required />
                    </div>
                </div>

                <div className="flex-inbox">
                    <div className="inputbox-details">
                        <label htmlFor="Phone Number"> Phone Number </label>
                        <input type="number" name="email" placeholder="Add a display Name" required />
                    </div>

                    <div className="inputbox-details">
                        <label htmlFor="Email"> Email </label>
                        <input type="email" name="email" placeholder="Add a display Name" required />
                    </div>
                </div>

            </div>

            <div className="account-footer-content">

                <div className="account-footer-text">
                    <p style={{ fontWeight: "600" }}>Change Password</p>
                </div>

                <div className="account-footer-text">
                    <button className='createbtn'> Change Password </button>
                </div>
            </div>

        </div>
    );
}

export default Account;
