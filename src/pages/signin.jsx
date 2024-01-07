import { Link } from 'react-router-dom'

function Signin() {
    return ( 
        <div className="mainbody">
        <h3> The Future of  Video calling is here !</h3>
        <div className="middle-text">
lo
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium perspiciatis labore quod dicta ipsa quaerat doloribus impedit, mollitia reiciendis eligendi praesentium odit eos dolores deserunt totam. Id aliquam ex deserunt!
        </div>

        <div className="auth-button">
          <Link to="/login" className='c'><button>Create a Room</button></Link> 
          <Link to="/dashboard"><button>Go to Dashboard</button></Link> 
        </div>

        <div className="invite-room">
            <label htmlFor="">Got an Invite for a room</label>
            <div className="input">
                <input type="text" placeholder="paste code" />
                <button>Join Room</button>
            </div>

        </div>

    </div>
     );
}

export default Signin;

