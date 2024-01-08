import "../css/register.css";
import { useState} from 'react';
import logotext from '../assets/Vector.png'
import logo from '../assets/Group.png'


function Contact() {
    
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
                                <h3> Contact us</h3>
                                <p> The first step to getting your products manufactured. </p>
                            </div>

                            <div className="inputbox-details">
                                <label htmlFor="email"> Full Name</label>
                                <input type="text" name="fullname" placeholder="Name" required />
                            </div>
                            
                            <div className="inputbox-details">
                                <label htmlFor="email"> Email Address</label>
                                <input type="email" name="email" placeholder="Email Address" required />
                            </div>

                            <div className="inputbox-details">
                                <label htmlFor="email"> Describe your Requirements </label>
                               <textarea name="" id="" cols="30" rows="10" placeholder="please provide a detailed answer so we can help"></textarea>
                            </div>
                           
                            <div className="buttonbox-details">
                                <input type="hidden" name="action" value="first_reg" />
                                <button className="submit" name="login"> <p> Send  </p> </button>
                            </div>

        
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Contact;
