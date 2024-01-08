import { Link } from 'react-router-dom'

function Leftbar( {toggleShowLogout} ) {

    const currentPageName = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);

    return (
      <div className="left" style={{ color: 'black' }}>
        {/* Your other HTML elements */}
        
        <div className="sidebar">
    
          <Link to="/dashboard" className={ `${currentPageName == 'dashboard' ? 'menu-item-active' : 'menu-item'} ` }>
            <ion-icon name={ currentPageName === 'dashboard' ? 'home' : 'home-outline'} ></ion-icon>
            <h3 className={ `${currentPageName == 'dashboard' ? 'h3-active' : 'just-h3'} ` }> Dashboard</h3>
          </Link>

          <Link to="/webinar" className={ `${currentPageName == 'webinar' ? 'menu-item-active' : 'menu-item'} ` }>
            <ion-icon name={ currentPageName === 'webinars' ? 'grid' : 'grid-outline'} ></ion-icon>
            <h3 className={ `${currentPageName == 'webinars' ? 'h3-active' : 'just-h3'} ` }> Webinar (SFU) </h3>
          </Link>

          <Link to="/meeting" className={ `${currentPageName == 'meeting' ? 'menu-item-active' : 'menu-item'} ` }>
            <ion-icon name={ currentPageName === 'meetings' ? 'grid' : 'grid-outline'} ></ion-icon>
            <h3 className={ `${currentPageName == 'meetings' ? 'h3-active' : 'just-h3'} ` }> Meetings (p2p) </h3>
          </Link>

          <Link to="/one" className={ `${currentPageName == 'one' ? 'menu-item-active' : 'menu-item'} ` }>
            <ion-icon name={ currentPageName === 'custom' ? 'grid' : 'grid-outline'} ></ion-icon>
            <h3 className={ `${currentPageName == 'custom' ? 'h3-active' : 'just-h3'} ` }> One-One (c2c) </h3>
          </Link>

            
          <Link to="/custom" className={currentPageName === 'custom' ? 'menu-item active' : 'menu-item'}>
            <ion-icon name={currentPageName === 'custom' ? 'add-circle' : 'add-circle-outline'}></ion-icon>
            <h3 className={ `${currentPageName == 'custom' ? 'h3-active' : 'just-h3'} ` }> Custom </h3>
          </Link>
    
          
          <Link to="/account" className={currentPageName === 'account' ? 'menu-item active' : 'menu-item'}>
            <ion-icon name={currentPageName === 'account' ? 'person-circle' : 'person-circle-outline'}></ion-icon>
            <h3 className={ `${currentPageName == 'account' ? 'h3-active' : 'just-h3'} ` }> Account </h3>
          </Link>

           <Link to="/support" className={currentPageName === 'support' ? 'menu-item active' : 'menu-item'}>
            <ion-icon name={currentPageName === 'support' ? 'chatbox' : 'chatbox-outline'}></ion-icon>
            <h3 className={ `${currentPageName == 'support' ? 'h3-active' : 'just-h3'} ` }> support </h3>
          </Link>
          
          {/* <Link to='/' className="menu-item">
            <span><ion-icon name="power-outline"></ion-icon></span>
            <h3>Log out</h3>
          </Link> */}


        </div>
    
        <div className="upgrade" onClick={() => toggleShowLogout()}>
        <ion-icon name={currentPageName === 'support' ? 'log-out' : 'log-out-outline'}></ion-icon>
        <h3 className={ `${currentPageName == 'support' ? 'h3-active' : 'just-h3'} ` } > Log Out </h3>
          {/* <button>
            <Link to="/subscribe" style={{ color: 'black' }}>
              <span>Upgrade</span>
              <span><ion-icon name="diamond"></ion-icon></span>
            </Link>
          </button> */}
        </div>


      </div>
    );
    
}

export default Leftbar;