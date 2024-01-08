import '../css/custom.css';

function Custom({ toggleShowJoinRoom }) {


    const products = [
        {
            id: '1',
            date: "12th Dec, 2023",
            time: "2:00 PM - 4:00 PM",
            topic: "Quaterly Sales Strategy Review ",
            topic_id: "432424424242",
        },

        {
            id: '2',
            date: "12th Dec, 2023",
            time: "2:00 PM - 4:00 PM",
            topic: "Quaterly Sales Strategy Review ",
            topic_id: "432424424242",
        },

        {
            id: '3',
            date: "12th Dec, 2023",
            time: "2:00 PM - 4:00 PM",
            topic: "Quaterly Sales Strategy Review ",
            topic_id: "432424424242",
        },

        {
            id: '4',
            date: "12th Dec, 2023",
            time: "2:00 PM - 4:00 PM",
            topic: "Quaterly Sales Strategy Review ",
            topic_id: "432424424242",
        },

    ];


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
                    <button className="createbtn"><ion-icon name="add-outline"></ion-icon> Create Room</button>
                </div>
            </div>

            <div className="second-middle-content">

                {products.map(product => (
                    <div key={product.id} className="custom-room-box">
                        <div className="topic-box">
                            <div className="date">
                                <span>{product.date}</span>
                                <span>{product.time}</span>
                            </div>
                            <div className="topic">{product.topic}</div>
                        </div>
                        <div className="custom-second-container">
                            <div className="custom-box">
                                <span>{product.topic_id}</span>
                                <span>
                                    <ion-icon name="send-outline"></ion-icon>
                                    <ion-icon name="copy-outline"></ion-icon>
                                </span>
                            </div>
                            <button onClick={() => toggleShowJoinRoom()} >Join Room</button>
                            <div className="span"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                        </div>
                    </div>
                ))}






            </div>

        </div>
    );
}

export default Custom;
