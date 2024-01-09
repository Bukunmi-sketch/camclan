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
// import {  Link, useNavigate } from "react-router-dom";
// import { Video } from '@stream-io/video-react-sdk';
import { useState,useEffect} from 'react';
import CreateRoom from './components/createroom';
import Videoo from './pages/videoo';
import Zego from './pages/zego';




function App() {

  const [showJoinRoom, setShowJoinRoom] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  // const navigate = useNavigate();
  // const [currentUser, setCurrentUser] = useState(undefined);
  

  const toggleShowJoinRoom = () => {
    setShowJoinRoom(!showJoinRoom);
  };

  const toggleShowLogout = () => {
    setShowLogout(!showLogout);
  };

  const toggleShowCreateRoom = () => {
    setShowCreateRoom(!showCreateRoom);
  };


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
                  <Middle toggleShowJoinRoom={toggleShowJoinRoom} toggleShowCreateRoom={toggleShowCreateRoom} />
                  {showJoinRoom ? <Modal toggleShowJoinRoom={toggleShowJoinRoom}  /> : ""}
                  {showLogout ? <Logout toggleShowLogout={toggleShowLogout}  /> : ""}
                  {showCreateRoom ? <CreateRoom toggleShowCreateRoom={toggleShowCreateRoom}  /> : ""}
                </div>
              </main>
            </>
          } />

          <Route path='/webinar' element={
            <>
              <Homenav />
              <main>
                <div className="container">
                  <Leftbar toggleShowLogout={toggleShowLogout} />
                  <Custom toggleShowJoinRoom={toggleShowJoinRoom} toggleShowCreateRoom={toggleShowCreateRoom} />
                  {showJoinRoom ? <Modal toggleShowJoinRoom={toggleShowJoinRoom}  /> : ""}
                  {showLogout ? <Logout toggleShowLogout={toggleShowLogout}  /> : ""}
                  {showCreateRoom ? <CreateRoom toggleShowCreateRoom={toggleShowCreateRoom}  /> : ""}
                </div>
              </main>
            </>
          } />

          <Route path='/meeting' element={
            <>
              <Homenav />
              <main>
                <div className="container">
                 <Leftbar toggleShowLogout={toggleShowLogout} />
                  <Custom toggleShowJoinRoom={toggleShowJoinRoom} toggleShowCreateRoom={toggleShowCreateRoom} />
                  {showJoinRoom ? <Modal toggleShowJoinRoom={toggleShowJoinRoom}  /> : ""}
                  {showLogout ? <Logout toggleShowLogout={toggleShowLogout}  /> : ""}
                  {showCreateRoom ? <CreateRoom toggleShowCreateRoom={toggleShowCreateRoom}  /> : ""}
                </div>
              </main>
            </>
          } />





          <Route path='/one' element={
            <>
              <Homenav />
              <main>
                <div className="container">
                <Leftbar toggleShowLogout={toggleShowLogout} />
                  <Custom toggleShowJoinRoom={toggleShowJoinRoom} toggleShowCreateRoom={toggleShowCreateRoom} />
                  {showJoinRoom ? <Modal toggleShowJoinRoom={toggleShowJoinRoom}  /> : ""}
                  {showLogout ? <Logout toggleShowLogout={toggleShowLogout}  /> : ""}
                  {showCreateRoom ? <CreateRoom toggleShowCreateRoom={toggleShowCreateRoom}  /> : ""}
                </div>
              </main>
            </>
          } />

{/* <Route path='/zego' element={
            <>
              <Homenav />
              <Zego/>
            </>
          } /> */}


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
                  <Custom toggleShowJoinRoom={toggleShowJoinRoom} toggleShowCreateRoom={toggleShowCreateRoom} />
                  {showJoinRoom ? <Modal toggleShowJoinRoom={toggleShowJoinRoom}  /> : ""}
                  {showLogout ? <Logout toggleShowLogout={toggleShowLogout}  /> : ""}
                  {showCreateRoom ? <CreateRoom toggleShowCreateRoom={toggleShowCreateRoom}  /> : ""}
                  
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
