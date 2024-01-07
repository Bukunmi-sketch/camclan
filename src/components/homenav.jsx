import logotext from '../assets/Vector.png'
import logo from '../assets/Group.png'
import { Link } from 'react-router-dom'
import "../css/landing.css";

function Homenav() {
    return (
        <>
            <nav>
                <div className="logo" >
                    <img src={logo} alt="" />
                    <img src={logotext} alt="" />
                </div>
                <div className="contact">
                    <div> <input type="text" placeholder="search here" /> </div>
                    {/* <Link to="/login"> <span>Sign in</span> </Link> */}
                </div>
            </nav>

           

        </>
    );
}

export default Homenav;