// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Leftbar from './components/leftbar';
// import Header from './components/header';
import Middle from './components/middle';
import './css/left.css';
import './css/app.css'
import './css/table.css'
import './css/dashboard.css'
import Custom from './components/custom';
import Modal from './components/modal';
import Register from './pages/register';
import Login from './pages/login';
import Contact from './pages/contact';
import Nav from './components/nav';
import Landing from './pages/landing';
import Homenav from './components/homenav';
import Signin from './pages/signin';
import Account from './components/account';
import Logout from './components/logout';
import { Video } from '@stream-io/video-react-sdk';
import { useState} from 'react';
import Videoo from './pages/videoo';




function App() {

  const [showJoinRoom, setShowJoinRoom] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  // const [currentUser, setCurrentUser] = useState(undefined);
  

  const toggleShowJoinRoom = () => {
    setShowJoinRoom(!showJoinRoom);
  };

  const toggleShowLogout = () => {
    setShowLogout(!showLogout);
  };


 

  // useEffect(async () => {
  //   if (!localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)) {
  //     navigate("/login");
  //   } else {
  //     setCurrentUser(
  //       await JSON.parse(
  //         localStorage.getItem(import.meta.env.REACT_APP_LOCALHOST_KEY)
  //       )
  //     );
  //   }
  // }, []);
  
  // useEffect(async () => {
  //   if (currentUser) {
  //     if (currentUser.isAvatarImageSet) {
  //       const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
  //       setContacts(data.data);
  //     } else {
  //       navigate("/setAvatar");
  //     }
  //   }
  // }, [currentUser]);


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <>
              <Nav />
              <Landing />
            </>
          } />

          <Route path='/signin' element={
            <>
              <Nav />
              <Signin />
            </>
          } />

          <Route path='/dashboard' element={
            <>
              <Homenav />
              <main>
                <div className="container">
                  <Leftbar />
                  <Middle />
                </div>
              </main>
            </>
          } />

          <Route path='/webinar' element={
            <>
              <Homenav />
              <main>
                <div className="container">
                  <Leftbar />
                  <Custom />
                </div>
              </main>
            </>
          } />

          <Route path='/meeting' element={
            <>
              <Homenav />
              <main>
                <div className="container">
                  <Leftbar />
                  <Custom />
                </div>
              </main>
            </>
          } />

          <Route path='/one' element={
            <>
              <Homenav />
              <main>
                <div className="container">
                  <Leftbar />
                  <Custom />
                </div>
              </main>
            </>
          } />

        <Route path='/video' element={
            <>
              <Homenav />
              <Videoo/>
            </>
          } />



          <Route path='/custom' element={
            <>
              <Homenav />
              <main>
                <div className="container">
                  <Leftbar toggleShowLogout={toggleShowLogout} />
                  <Custom toggleShowJoinRoom={toggleShowJoinRoom} />
                  {showJoinRoom ? <Modal toggleShowJoinRoom={toggleShowJoinRoom}  /> : ""}
                  {showLogout ? <Logout toggleShowLogout={toggleShowLogout}  /> : ""}
                  
                </div>
              </main>
            </>
          } />

          <Route path='/register' element={
            <Register />
          } />

          <Route path='/login' element={
            <Login />
          } />


          <Route path='/account' element={
            <>
              <Homenav />
              <main>
                <div className="container">
                  <Leftbar />
                  <Account />
                </div>
              </main>
            </>
          } />

          <Route path='/contact' element={
            <Contact />
          } />

          {/* <Route path='/about' element={<Aboutus />} /> */}
          <Route path="*" element={Error} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
