import "../css/register.css";
import axios from "axios";
import { useState,   useEffect} from 'react';
import {  Link, useNavigate } from "react-router-dom";
import logotext from '../assets/Vector.png'
import logo from '../assets/Group.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";


function Login() {
    
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

  const [values, setValues] = useState({ email: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { email, password } = values;
    if (email === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { email, password } = values;
      const { data } = await axios.post(loginRoute, {
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          import.meta.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
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
                        <form action="" onSubmit={(event) => handleSubmit(event)}>
                            {/* <div className="error">
                                <p></p>
                            </div> */}
                            <div className="logobox">
                                <p> WELCOME BACK</p>
                                <h3> Login to your Account </h3>
                            </div>
                            
                            <div className="inputbox-details">
                                <label htmlFor="email"> Email</label>
                                <input type="email" name="email" placeholder="Email Address"  onChange={(e) => handleChange(e)} required />
                            </div>

                            <div className="inputbox-details">
                                <label htmlFor="password"> Password</label>
                                <span id="show" onClick={togglePasswordVisibility}>  <ion-icon name={passwordVisible ? "eye-outline" : "eye-off-outline"}></ion-icon></span>
                                <input type={passwordVisible ? "text" : "password"} id="pass" name="password"  onChange={(e) => handleChange(e)} placeholder="Password" required autoComplete="off" />
                            </div>
                           
                            <div className="buttonbox-details">
                                {/* <button className="submit" name="login"> <Link to="/dashboard"><p> Continue </p></Link> </button> */}
                                <button className="submit" name="login">Continue</button>
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
            <ToastContainer />
        </>
    );
}

export default Login;
