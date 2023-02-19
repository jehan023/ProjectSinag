import React, { useState, useEffect } from 'react';
import './App.scss';
import Logo from './images/Sinag-Logo.png';
import Clock from 'react-live-clock';
import Overview from './components/overview.js';
import Profile from './components/profile.js';
import Status from './components/status.js';
import Analysis from './components/analysis.js';
import Home from './components/home.js';
import Reports from './components/reports.js';

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

  //const [isActive, setIsActive] = useState(false);

  const options = [
    {
      list: 'SL1', value: 'SL1', label: 'Streetlight 1', location: 'Narra St., Brgy BF International Village, Las Piñas City | 1740',
      battCapacity: '20Ah', pvPanel: '65W', lamp: '100W', status: 'Active'
    },
    {
      list: 'SL2', value: 'SL2', label: 'Streetlight 2', location: 'Narra St., Brgy BF International Village, Las Piñas City | 1740',
      battCapacity: '30Ah', pvPanel: '65W', lamp: '120W', status: 'Inactive'
    },
    {
      list: 'SL3', value: 'SL3', label: 'Streetlight 3', location: 'Patola St., Brgy BF International Village, Las Piñas City | 1740',
      battCapacity: '36Ah', pvPanel: '80W', lamp: '150W', status: 'Active'
    },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const getObjectByValue = (value) => {
    return options.find((obj) => obj.value === value);
  };

  const streetlight = getObjectByValue(selectedValue);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  return (
    <div className="App">
      {/******* NAVIGATION BAR ***************************************************/}
      <div className='top-navbar d-flex'>
        <div className='title-nav-container d-flex align-items-center'>
          <img src={Logo} alt='Logo' height={40} />
          <h3 className='my-0 mx-2'>Project Sinag</h3>
        </div>

        <div className='links-nav-container d-flex'>
          <button className={page === 'Home' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setPage('Home') }}>Home</button>
          <button className={page === 'Dashboard' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setPage('Dashboard')}}>Dashboard</button>
          <button className={page === 'Reports' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setPage('Reports')}}>Reports</button>
        </div>
      </div>

      <div className='bottom-navbar'>
        <div className='d-flex align-items-center gap-2 mb-2'>
          <h4 className={page === 'Dashboard' ? 'nav-section my-0': 'hidden'}>{page}</h4>

          <div className={page === 'Dashboard' ? 'd-flex align-items-center gap-2' : 'hidden'}>
            <h4 className='my-0'> | </h4>
            <select className='sl-dropdown' value={selectedValue} onChange={handleChange}>
              {options.map((option) => (
                <option className='dropdown-options' key={option.value} value={option.value}>
                  {option.list}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='d-flex justify-content-between'>
          <div className={page === 'Dashboard' ? 'links-nav-container d-flex' : 'links-nav-container d-flex invisible'}>
            <button className={dashboard === 'overview' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setDashboard('overview') }}>Overview</button>
            <button className={dashboard === 'profile' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setDashboard('profile') }}>Profile</button>
            <button className={dashboard === 'status' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setDashboard('status') }}>Status</button>
            <button className={dashboard === 'analysis' ? 'link-btn link-active' : 'link-btn'} onClick={() => { setDashboard('analysis') }}>Analysis</button>

          </div>
          <Clock
            className='clock-text'
            ticking={true} timezone={'Asia/Manila'}
            format={'h:mm:ss A | MMM DD YYYY'} />
        </div>
      </div>
      
      {/******* CONTENT SECTION ***************************************************/}
      <div className='content-container h-100'>
        {page === 'Dashboard' ? (() => {
          switch (dashboard) {
            case 'overview':
              return <Overview selectedSL={streetlight} />
            case 'profile':
              return <Profile selectedSL={streetlight} />
            case 'status':
              return <Status selectedSL={streetlight} />
            case 'analysis':
              return <Analysis selectedSL={streetlight} />
            default:
              return <Status selectedSL={streetlight} />
          }
        })() :
          (() => {
            switch (page) {
              case 'Home':
                return <Home />
              case 'Reports':
                return <Reports />
              default:
                return <Home />
            }
          })()}
      </div>

      {/******* FOOTER BAR ***************************************************/}
      <div className='footer-container'>

      </div>

    </div>
  );
}

export default App;
