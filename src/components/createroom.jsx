import '../css/modal.css';
import "../css/createroom.css";
import "../css/form.css";
// import Cookies from 'js-cookie'
// import { useNavigate } from "react-router-dom";
import { createroomRoute } from '../utils/APIRoutes';
import { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





function CreateRoom({ toggleShowCreateRoom }) {

    // const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const uid = uuidv4();

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
    
      const [roomvalues, setroomvalues] = useState({
        meeting_name: "",
        uid:uid,
        date: "",
        time:"",

        // confirmdate: "",
      });

      const handleChange = (event) => {
        setroomvalues({ ...roomvalues, [event.target.name]: event.target.value });
        console.log(roomvalues)
      };

    const handleRoomValidation = () => {
        const { meeting_name } = roomvalues;
        if (meeting_name.length < 3) {
          toast.error( "meeting name should be greater than 3 characters.", toastOptions );
          return false;
        }
        return true;
      };
    

      const handleCreateRoomSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (handleRoomValidation()) {
          const { meeting_name, uid, date, time } = roomvalues;
      
          try {
            const { data } = await axios.post(createroomRoute, {
              meeting_name,
              uid,
              date,
              time,
            });
      
            if (data.message === 'The meeting_id existed in the system' || data.message === 'Cannot create your account, please try again' || data.message === 'Please input required fields') {
              toast.error(data.message, toastOptions);
              setIsLoading(false);
            } else {
                setIsLoading(false);
                console.log(data.message);
                // toast.error("meeting room created successfully", toastOptions);
                // toast.done(data.message,toastOptions);
            }
          } catch (error) {
            setIsLoading(false);
            console.error("Error:", error);
            toast.error("An error occurred. Please try again.", toastOptions);
          }
        }
      };
      
    
    //   const handleCreateRoomSubmit = async (event) => {
    //     event.preventDefault();
    //     setIsLoading(true);
    //     if (handleRoomValidation()) {
    //       const {  meeting_name, uid,date,time } = roomvalues;
      
    //       try {
    //         const { data } = await axios.post(createroomRoute, {
    //           meeting_name,
    //           uid,
    //           date,
    //           time,
    //         });
      
    //         if (data.message === 'The meeting_id existed in the system') {
    //           toast.error(data.message, toastOptions);
    //           setIsLoading(false);
    //         } else if (data.message === 'Cannot create your account, please try again') {
    //           toast.error(data.message, toastOptions);
    //           setIsLoading(false);
    //         } else if (data.message === 'Please input required fields') {
    //           toast.error(data.message, toastOptions);
    //           setIsLoading(false);
    //         } else {
    //           localStorage.setItem(
    //             usertoken,
    //             JSON.stringify(data)
    //           );
             
             
    
            
    //         }
    //       } catch (error) {
    //         setIsLoading(false);
    //         console.error("Error:", error);
    //         toast.error("An error occurred. Please try again.", toastOptions);
    //       }
    //     }
    //   };
    


    return (
        <div className="room-modal" id="popupContainer">
            <div className="modal-container">
                <div className="modal-content">

                    <form className="createroomform" onSubmit={(event) => handleCreateRoomSubmit(event)}>
                        <div className="div-header">
                            <span>Create Room</span>
                            <span onClick={() => toggleShowCreateRoom()}>X</span>
                        </div>

                        <div className="inputbox-details">
                            <label htmlFor="display name"> Room Name </label>
                            <input type="text" name="meeting_name" placeholder="Add room name" required onChange={(e) => handleChange(e)} />
                        </div>

                        <div className="date-time-inbox">
                            <div className="inputbox-details">
                                <label htmlFor="display name"> Date </label>
                                <input type="date" name="date" placeholder="date" required onChange={(e) => handleChange(e)} />
                            </div>

                            <div className="inputbox-details">
                                <label htmlFor="display name"> Time </label>
                                <input type="time" name="time" placeholder="time" required onChange={(e) => handleChange(e)} />
                            </div>

                        </div>

                        <div className="inputbox-details">
                            <label htmlFor="display name"> RoomID </label>
                            <input type="text" name="uid" placeholder="12ddhEw133QW" value={uid} required onChange={(e) => handleChange(e)}/>
                        </div>


                        <div className="create-room-btn">
                            <button className="cancelbtn" onClick={() => toggleShowCreateRoom()}>Cancel</button>
                            <button className='createbtn'> {isLoading ? "loading..." : <p> Create </p> }   </button>
                      
                    </div>
                    </form>

                    <ToastContainer />
                </div>

            </div>
        </div>

    );
}

export default CreateRoom;