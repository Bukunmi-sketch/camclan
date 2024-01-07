import logotext from '../assets/Vector.png'
import logo from '../assets/Group.png'
import { Link } from 'react-router-dom'
import "../css/landing.css";

function Nav() {
    return (
        <>
            <nav>
                <div className="logo" >
                    <img src={logo} alt="" />
                    <img src={logotext} alt="" />
                </div>
                <div className="contact">
                    <span> Contact us</span>
                     <span><Link to="/login"> Sign in </Link> </span> 
                </div>
            </nav>

           

        </>
    );
}

export default Nav;