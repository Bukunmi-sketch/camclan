import { Link } from 'react-router-dom'
import  { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

function Middle({ toggleShowJoinRoom, toggleShowCreateRoom }) {

    const [currentUser, setCurrentUser] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const storedUserData = Cookies.get("zoom");
        if (!storedUserData) {
          navigate("/login");
        } else {
          try {
            const userData = JSON.parse(decodeURIComponent(storedUserData));
            setCurrentUser(userData);
            console.log(userData);
            console.log("current",currentUser);
          } catch (error) {
            // Handle parsing error
            console.error("Error parsing user data:", error);
            navigate("/login");
            console.log(userData);
          }
        }
      }, [navigate, setCurrentUser]);

   



   

    return (
        <div className="middle">

            <div className="dashboard-middle-content">

                <div className="dashboardbox">
                    <p>Welcome, <span> {currentUser.user_full_name || currentUser.fullname}  </span></p>
                </div>
                {/* {currentUser.fullname}  */}

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
                    <button className="createbtn" onClick={() => toggleShowCreateRoom()}><ion-icon name="add-outline"></ion-icon> Create Room</button>
                </div>
            </div>

            <div className="second-middle-content">

                <div className="first-row">

                    <div className="top-discussion-box">
                        {/* <div className="picture"> <img src="" alt="" /></div> */}
                        <div className="discussion-container">
                            <div className="id-box">
                                <span>ID: 1234 </span>
                                <span className="icon">
                                    <ion-icon name="refresh-circle-outline"></ion-icon>
                                    <ion-icon name="duplicate-outline"></ion-icon>
                                    <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                                </span>
                            </div>
                            <div className="discussion"> UX Group Discussion</div>
                        </div>
                    </div>

                    <div className="meeting-box">
                        {/* <div className="meeting-pic-box">
                            <img className="meeting-pic" src="" alt="" />
                            <img className="meeting-pic" src="" alt="" />
                            <img className="meeting-pic" src="" alt="" />
                        </div>

                        <div className="upcoming-meeting">
                            <span>Upcoming meetings</span>
                            <span><ion-icon name="chevron-up-outline"></ion-icon></span>
                        </div> */}

                    </div>

                    <div className="strategy-box">
                        <div className="date">
                            <span>12th Dec, 2023</span>
                            <span>2.00PM - 4.00PM</span>
                        </div>

                        <div className="strategy-name">
                            Quaterly Sales Stategy Review
                        </div>
                    </div>

                    <div className="join-box">
                        <button onClick={() => toggleShowJoinRoom()}> Join Room </button>
                    </div>
                </div>

                {/* <div className="first-row">

                    <div className="top-discussion-box">
                        <div className="picture"> <img src="" alt="" /></div>
                        <div className="discussion-container">
                            <div className="id-box">
                                <span>ID: 1234 </span>
                                <span className="icon">
                                    <ion-icon name="refresh-circle-outline"></ion-icon>
                                    <ion-icon name="duplicate-outline"></ion-icon>
                                    <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                                </span>
                            </div>
                            <div className="discussion"> UX Group Discussion</div>
                        </div>
                    </div>

                    <div className="meeting-box">
                        <div className="meeting-pic-box">
                            <img className="meeting-pic" src="" alt="" />
                            <img className="meeting-pic" src="" alt="" />
                            <img className="meeting-pic" src="" alt="" />
                        </div>

                        <div className="upcoming-meeting">
                            <span>Upcoming meetings</span>
                            <span><ion-icon name="chevron-up-outline"></ion-icon></span>
                        </div>

                    </div>

                    <div className="strategy-box">
                        <div className="date">
                            <span>12th Dec, 2023</span>
                            <span>2.00PM - 4.00PM</span>
                        </div>

                        <div className="strategy-name">
                            Quaterly Sales Stategy Review
                        </div>
                    </div>

                    <div className="project-box">
                        <div className="date">
                            <span>12th Dec, 2023</span>
                            <span>2.00PM - 4.00PM</span>
                        </div>

                        <div className="strategy-name">
                            Quaterly Sales Stategy Review
                        </div>
                    </div>

                    <div className="project-box">
                        <div className="date">
                            <span>12th Dec, 2023</span>
                            <span>2.00PM - 4.00PM</span>
                        </div>

                        <div className="strategy-name">
                            Quaterly Sales Stategy Review
                        </div>
                    </div>


                    <div className="join-box">
                        <button> <Link to="/custom">Join Room</Link> </button>
                    </div>
                </div>

            

                <div className="first-row">

                    <div className="top-discussion-box">
                        <div className="picture"> <img src="" alt="" /></div>
                        <div className="discussion-container">
                            <div className="id-box">
                                <span>ID: 1234 </span>
                                <span className="icon">
                                    <ion-icon name="refresh-circle-outline"></ion-icon>
                                    <ion-icon name="duplicate-outline"></ion-icon>
                                    <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                                </span>
                            </div>
                            <div className="discussion"> UX Group Discussion</div>
                        </div>
                    </div>

                    <div className="meeting-box">
                        <div className="meeting-pic-box">
                            <img className="meeting-pic" src="" alt="" />
                            <img className="meeting-pic" src="" alt="" />
                            <img className="meeting-pic" src="" alt="" />
                        </div>

                        <div className="upcoming-meeting">
                            <span>Upcoming meetings</span>
                            <span><ion-icon name="chevron-up-outline"></ion-icon></span>
                        </div>

                    </div>

                    <div className="strategy-box">
                        <div className="date">
                            <span>12th Dec, 2023</span>
                            <span>2.00PM - 4.00PM</span>
                        </div>

                        <div className="strategy-name">
                            Quaterly Sales Stategy Review
                        </div>
                    </div>

                    <div className="join-box">
                        <button><Link to="/custom">Join Room</Link> </button>
                    </div>
                </div> */}

            </div>

        </div>
    );
}

export default Middle;
