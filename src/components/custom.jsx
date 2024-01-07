import '../css/custom.css';

function Custom() {


    // const centerStyle = {
    //     textAlign: 'center'
    // };

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
                    <button className="editbtn"><ion-icon name="add-outline"></ion-icon> Create Room</button>
                </div>
            </div>

            <div className="second-middle-content">

                <div className="custom-room-box">

                    <div className="topic-box">
                        <div className="date">
                            <span>12th Dec, 2023 </span>
                            <span> 2:00 PM - 4:00 PM</span>
                        </div>
                        <div className="topic">Quaterly Sales Strategy Review  </div>
                    </div>

                    <div className="custom-second-container">
                        <div className="custom-box">
                            <span> 432424424242</span>
                            <span>
                                <ion-icon name="send-outline"></ion-icon>
                                <ion-icon name="copy-outline"></ion-icon>
                            </span>
                        </div>
                        <button> Join Room</button>
                        <div className="span"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>

                    </div>
                </div>

                <div className="custom-room-box">

                    <div className="topic-box">
                        <div className="date">
                            <span>12th Dec, 2023 </span>
                            <span> 2:00 PM - 4:00 PM</span>
                        </div>
                        <div className="topic">Quaterly Sales Strategy Review  </div>
                    </div>

                    <div className="custom-second-container">
                        <div className="custom-box">
                            <div> 432424424242</div>
                            <div>
                                <ion-icon name="send-outline"></ion-icon>
                                <ion-icon name="copy-outline"></ion-icon>
                            </div>
                        </div>
                        <button> Join Room</button>
                        <div className="span"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>

                    </div>
                </div>


                <div className="custom-room-box">

                    <div className="topic-box">
                        <div className="date">
                            <span>12th Dec, 2023 </span>
                            <span> 2:00 PM - 4:00 PM</span>
                        </div>
                        <div className="topic">Quaterly Sales Strategy Review  </div>
                    </div>

                    <div className="custom-second-container">
                        <div className="custom-box">
                            <span> 432424424242</span>
                            <span>
                                <ion-icon name="send-outline"></ion-icon>
                                <ion-icon name="copy-outline"></ion-icon>
                            </span>
                        </div>
                        <button> Join Room</button>
                        <div className="span"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>

                    </div>
                </div>






            </div>

        </div>
    );
}

export default Custom;
