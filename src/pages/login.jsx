import "../css/register.css";
import { useState} from 'react';
import { Link } from 'react-router-dom'
import logotext from '../assets/Vector.png'
import logo from '../assets/Group.png'

function Login() {
    
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
                                <p> WELCOME BACK</p>
                                <h3> Login to your Account </h3>
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
                                <button className="submit" name="login"> <Link to="/dashboard"><p> Continue </p></Link> </button>
                            </div>

                            <div className="before">
                            <p className="or"> or </p>
                            </div>

                            <div className="buttonbox-details">
                                <input type="hidden" name="action" value="first_reg" />
                                <button className="social-button" name="login">  <p> Sign up with Google </p> </button>
                            </div>

                            <div className="buttonbox-details">
                                <input type="hidden" name="action" value="first_reg" />
                                <button className="social-button" name="login"> <p> Sign up with Google </p> </button>
                            </div>

                            <div className="forgetbox">
                                <a href="javascript:void(0)"> Don't have an account ? </a>
                                <Link to="/register"> Sign up here</Link>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Login;
