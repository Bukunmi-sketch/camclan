import '../css/modal.css';
import "../css/form.css";



function Modal({toggleShowJoinRoom}) {
    return ( 
        <div className="modal"  id="popupContainer">
        <div className="modal-container">
            {/* <div className="modal-header"> </div> */}

            <div className="modal-content">
            <div className="form-details">
            <span className="close" onClick={() => toggleShowJoinRoom()} >X</span>
                    <form action="#">

                        <div className="textbox">
                            <h3>Quartely Sales Strategy Review </h3>
                            <span>Lorem ipsum dolor sit amet consectetur</span>
                        </div>


                        <div className="strategy-box">
                        <div className="date">
                            <span>12th Dec, 2023</span>
                            <span>2.00PM - 4.00PM</span>
                        </div>

                        <div className="strategy-name">
                            Marketing Campaign Debrief
                        </div>
                    </div>

                        <div className="inputbox-details">
                            <label> Joining Options </label>
                            <select>
                                <option value="Internally">Internally</option>
                                <option value="Externally">Externally</option>
                            </select>
                        </div>

                        <div className="buttonbox-details">
                            <button className="submit" name="login"> Join Room </button>
                        </div>

                    </form>
                </div>


            </div>

        </div>
    </div>

     );
}

export default Modal;