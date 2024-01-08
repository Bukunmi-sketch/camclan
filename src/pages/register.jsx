import "../css/register.css";
import { useState,useEffect} from 'react';
import {  Link, useNavigate } from "react-router-dom";
import logotext from '../assets/Vector.png'
import logo from '../assets/Group.png';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { v4 as uuidv4 } from "uuid";
import { registerRoute } from "../utils/APIRoutes";

function Register() {
    
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [values, setValues] = useState({
   fullname: "",
    email: "",
    password: ""
    // confirmPassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/dashboard");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

//   const generateAvatar = () => {
//     const avatars= [
//       'https://data-us.cometchat.io/assets/images/avatars/captainamerica.png',
//       'https://data-us.cometchat.io/assets/images/avatars/cyclops.png',
//       'https://data-us.cometchat.io/assets/images/avatars/ironman.png',
//       'https://data-us.cometchat.io/assets/images/avatars/spiderman.png',
//       'https://data-us.cometchat.io/assets/images/avatars/wolverine.png'
//     ];
//     const avatarPosition = Math.floor(Math.random() * avatars.length);
//     return avatars[avatarPosition];
//   }

  const handleValidation = () => {
    const { password,fullname, email } = values;
    // if (password !== confirmPassword) {
    //   toast.error( "Password and confirm password should be same.", toastOptions );
    //   return false;
    // } else 
    if (fullname.length < 3) {
      toast.error( "Username should be greater than 3 characters.", toastOptions );
      return false;
    } else if (password.length < 8) {
      toast.error( "Password should be equal or greater than 8 characters.", toastOptions );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }
    
    return true;
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (handleValidation()) {
      const { email, fullname, password } = values;
  
      try {
        const { data } = await axios.post(registerRoute, {
          email,
          fullname,
          password,
        });
  
        if (data.message === 'The email existed in the system') {
          toast.error(data.message, toastOptions);
        } else if (data.message === 'Cannot create your account, please try again') {
          toast.error(data.message, toastOptions);
        } else if (data.message === 'Please input required fields') {
          toast.error(data.message, toastOptions);
        } else {
          localStorage.setItem(
            import.meta.env.REACT_APP_LOCALHOST_KEY,
            JSON.stringify(data)
          );
          setIsLoading(false);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.", toastOptions);
      }
    }
  };


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (handleValidation()) {
//       const {  email,fullname, password } = values;
//     //   const id = uuidv4();
//       const { data } = await axios.post(registerRoute, {
//        fullname,
//         email,
//         password,
//       });

//       if (data.status === false) {
//         toast.error(data.message, toastOptions);
//       }
//       if (data.status === true) {
//         localStorage.setItem(
//           import.meta.env.REACT_APP_LOCALHOST_KEY,
//           JSON.stringify(data.user)
//         );
//         navigate("/dashboard");
//       }
//     }
//   };

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
                    <form action="" onSubmit={(event) => handleSubmit(event)}>
                            {/* <div className="error">
                                <p></p>
                            </div> */}
                            <div className="logobox">
                                <p> LETS GET YOU STARTED</p>
                                <h3> Create an Account </h3>
                            </div>
                            
                            <div className="inputbox-details">
                                <label htmlFor="email">Name</label>
                                <input type="text" name="fullname" placeholder="Enter your Fullname" onChange={(e) => handleChange(e)} required />
                            </div>
                            <div className="inputbox-details">
                                <label htmlFor="email"> Email</label>
                                <input type="email" name="email" placeholder="Email Address" onChange={(e) => handleChange(e)} required />
                            </div>

                            <div className="inputbox-details">
                                <label htmlFor="password"> Password</label>
                                <span id="show" onClick={togglePasswordVisibility}>  <ion-icon name={passwordVisible ? "eye-outline" : "eye-off-outline"}></ion-icon></span>
                                <input type={passwordVisible ? "text" : "password"} id="pass" name="password" placeholder="Password" required autoComplete="off" onChange={(e) => handleChange(e)} />
                            </div>
                           
                            <div className="buttonbox-details">
                                <input type="hidden" name="action" value="first_reg" />
                                 <button className="submit" name="login"> {isLoading ? "loading..." : <p> Get Started </p> }  </button> 
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

                <ToastContainer />

            </div>
        </>
    );
}

export default Register;
