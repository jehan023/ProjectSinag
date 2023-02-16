import React, { useState, useEffect } from 'react';
import './App.scss';
import NavBar from './components/navbar';
import Logo from './images/Sinag-Logo.png';
import Clock from 'react-live-clock';
import Overview from './components/overview.js';
import Profile from './components/profile.js';
import Status from './components/status.js';
import Analysis from './components/analysis.js';

function App() {
  const [page, setPage] = useState(() => {
    const savedPage = window.sessionStorage.getItem("page");
    if (savedPage) {
      return String(savedPage);
    } else {
      return 'Dashboard';
    }
  });

  const [dashboard, setDashboard] = useState(() => {
    const savedDashboard = window.sessionStorage.getItem("dashboard");
    if (savedDashboard) {
      return String(savedDashboard);
    } else {
      return 'overview';
    }
  });

  useEffect(() => {
    window.sessionStorage.setItem("page", page);
  }, [page]);

  const [isActive, setIsActive] = useState(false);
  const [isDashActive, setIsDashActive] = useState(false);


  return (
    <div className="App">
      <div>
        <div className='top-navbar d-flex'>
          <div className='title-nav-container d-flex align-items-center'>
            <img src={Logo} alt='Logo' height={40} />
            <h3 className='my-0 mx-2'>Project Sinag</h3>
          </div>


          <div className={isActive ? 'links-nav-container d-flex' : 'links-nav-container d-flex hidden'}>
            <button className={page === 'Home' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setPage('Home'); setIsActive(false) }}>Home</button>
            <button className={page === 'Dashboard' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setPage('Dashboard'); setIsActive(false) }}>Dashboard</button>
            <button className={page === 'Reports' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setPage('Reports'); setIsActive(false) }}>Reports</button>
          </div>
        </div>

        <div className='bottom-navbar'>
          <h4 className='nav-section'>{page}</h4>
          <div className='d-flex justify-content-between'>
            <div className={page === 'Dashboard' ? 'links-nav-container d-flex' : 'links-nav-container d-flex invisible'}>
              <button className={dashboard === 'overview' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setDashboard('overview'); setIsDashActive(false) }}>Overview</button>
              <button className={dashboard === 'profile' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setDashboard('profile'); setIsDashActive(false) }}>Profile</button>
              <button className={dashboard === 'status' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setDashboard('status'); setIsDashActive(false) }}>Status</button>
              <button className={dashboard === 'analysis' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setDashboard('analysis'); setIsDashActive(false) }}>Analysis</button>

            </div>
            <Clock
              className='clock-text'
              ticking={true} timezone={'PH/Pacific'}
              format={'h:mm:ss A | MMM DD YYYY'} />
          </div>
        </div>

        <div className='content-container h-100'>
          {(() => {
            switch (dashboard) {
              case 'overview':
                return <Overview />
              case 'profile':
                return <Profile />
              case 'status':
                return <Status />
              case 'analysis':
                return <Analysis />
              default:
                return <Overview />
            }
          })()}
        </div>
        <div className='footer-container'>

        </div>
      </div>
    </div>
  );
}

export default App;
