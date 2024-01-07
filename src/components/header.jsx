import { Link } from 'react-router-dom';
import logotext from '../assets/Vector.png'
import logo from '../assets/Group.png'

function Header() {
    return (
        <nav>
            <div className="container">
                {/* <div className="bar" style={{ display: 'block', color: 'black' }}>
                    <ion-icon name="filter-outline"></ion-icon>
                </div> */}

                <h2 className="logo"> 
                 </h2>

                <div className="profile-photo" style={{ display: 'flex', color: 'black' }}>
                    <img id="img" src="" alt="" />
                    <span> </span>
                </div>

                <div className="create">
                    <Link to='/' className="menu-item"> Log out </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
