import "../css/register.css";
import { useState} from 'react';
import { Link } from 'react-router-dom'
import logotext from '../assets/Vector.png'
import logo from '../assets/Group.png'

function Register() {
    
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className="auth-container">

                <div className="subb-container">

                    <div className="logobox" id="sm-logobox">
                        <div className="sub-logo">
                            <img src={logo} alt="" />
                             <img src={logotext} alt="" />
                            <p className="logoo"> <ion-icon name="people-outline" ></ion-icon> </p>
                        </div>
                    </div>

                    {/* <p className="text" style={{ fontSize: '2em' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                    <br /> */}

                    <div className="login-content">
                        <form action="#">
                            {/* <div className="error">
                                <p></p>
                            </div> */}
                            <div className="logobox">
                                <p> LETS GET YOU STARTED</p>
                                <h3> Create an Account </h3>
                            </div>
                            
                            <div className="inputbox-details">
                                <label htmlFor="email">Name</label>
                                <input type="text" name="fullname" placeholder="Enter your Fullname" required />
                            </div>
                            <div className="inputbox-details">
                                <label htmlFor="email"> Email</label>
                                <input type="email" name="email" placeholder="Email Address" required />
                            </div>

                            <div className="inputbox-details">
                                <label htmlFor="password"> Password</label>
                                <span id="show" onClick={togglePasswordVisibility}>  <ion-icon name={passwordVisible ? "eye-outline" : "eye-off-outline"}></ion-icon></span>
                                <input type={passwordVisible ? "text" : "password"} id="pass" name="password" placeholder="Password" required autoComplete="off" />
                            </div>
                           
                            <div className="buttonbox-details">
                                <input type="hidden" name="action" value="first_reg" />
                                 <button className="submit" name="login"> <Link to="/dashboard"><p> Get Started </p> </Link> </button> 
                            </div>

                            <div className="before">
                            <p className="or"> or </p>
                            </div>

                            <div className="buttonbox-details">
                                <input type="hidden" name="action" value="first_reg" />
                                <button className="social-button" name="login"> <p> Sign up with Google </p> </button>
                            </div>

                            <div className="buttonbox-details">
                                <input type="hidden" name="action" value="first_reg" />
                                <button className="social-button" name="login"> <p> Sign up with Google </p> </button>
                            </div>

                            <div className="forgetbox">
                                <a href="javascript:void(0)"> Already have an Account ? </a>
                                <Link to="/login"> Sign in</Link>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Register;
