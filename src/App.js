import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.scss';
// import Navbar from './components/navbar.js';
import Logo from './images/Sinag-Logo.png';
import Clock from 'react-live-clock';
import ReactLoading from 'react-loading';
import LoadDataFromSheet from './loadDataFromSheet';
import axios from 'axios';
// import Select from 'react-select';

const Overview = lazy(() => import('./components/overview.js'));
const Profile = lazy(() => import('./components/profile.js'));
const Status = lazy(() => import('./components/status.js'));
const Analysis = lazy(() => import('./components/analysis.js'));
const Home = lazy(() => import('./components/home.js'));
const Reports = lazy(() => import('./components/reports.js'));

function App() {
  const [page, setPage] = useState('Dashboard');
  const [dashboard, setDashboard] = useState('overview');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [fetchData, setFetchData] = useState([]);

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

  useEffect(() => {
    if (selectedValue) {
      callAPI();
    }
  }, [selectedValue, dashboard]);

  const callAPI = () => {
    try {
      setLoading(true);
      axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1yg8ET-05HTyTipGyvNVDZ1T3WuOBc1vNwwz4N8ifPRA/values/${selectedValue}!A1:M`,
        {
          params: {
            key: 'AIzaSyDfmsbf3ilW3D0fXotyabO1pFLX8CrsKws'
          }
        }).then(response => {
          setFetchData(response.data.values);
        }).catch(error => {
          setError(error);
        }).finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const handlePage = (Page) => {
    setPage(Page);
  };
  const handleDash = (Dash) => {
    setDashboard(Dash);
  };

  const formattedData = fetchData.slice(1).map(row => ({
    date: row[0],
    time: row[1],
    pv_power: parseFloat(row[4]),
    batt_volts: parseFloat(row[5]),
    batt_level: parseFloat(row[6]),
    led_amps: parseFloat(row[7]),
    led_status: parseFloat(row[8]),
    lux: parseFloat(row[9]),
    temp: parseFloat(row[10]),
    snr: parseFloat(row[11]),
    rssi: parseFloat(row[12])
  }));

  const lastData = formattedData[formattedData.length-1];

  console.log('Render ', Math.random(), 'SLV: ', selectedValue);

  return (
    <div className="App">
      {/******* NAVIGATION BAR ***************************************************/}
      <div className='top-navbar d-flex'>
        <div className='title-nav-container d-flex align-items-center'>
          <img src={Logo} alt='Logo' height={40} />
          <h3 className='my-0 mx-2'>Project Sinag</h3>
        </div>

        <div className='links-nav-container d-flex'>
          <button className={page === 'Home' ? 'link-btn link-active' : 'link-btn'} onClick={() => { handlePage('Home') }}>Home</button>
          <button className={page === 'Dashboard' ? 'link-btn link-active' : 'link-btn'} onClick={() => { handlePage('Dashboard') }}>Dashboard</button>
          <button className={page === 'Reports' ? 'link-btn link-active' : 'link-btn'} onClick={() => { handlePage('Reports') }}>Reports</button>
        </div>
      </div>

      <div className={page === 'Dashboard' ? 'bottom-navbar' : 'hidden'}>
        <div className='d-flex align-items-center gap-2 mb-2'>
          <h4 className={page === 'Dashboard' ? 'nav-section my-0' : 'hidden'}>{page}</h4>

          <div className={page === 'Dashboard' ? 'd-flex align-items-center gap-2' : 'hidden'}>
            <h4 className='my-0'> | </h4>
            <select className='sl-dropdown' placeholder={'Select SL'} onChange={handleChange} onClick={handleChange} >
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
            <button className={dashboard === 'overview' ? 'link-btn link-active' : 'link-btn'} onClick={() => { handleDash('overview') }}>Overview</button>
            <button className={dashboard === 'profile' ? 'link-btn link-active' : 'link-btn'} onClick={() => { handleDash('profile') }}>Profile</button>
            <button className={dashboard === 'status' ? 'link-btn link-active' : 'link-btn'} onClick={() => { handleDash('status') }}>Status</button>
            <button className={dashboard === 'analysis' ? 'link-btn link-active' : 'link-btn'} onClick={() => { handleDash('analysis') }}>Analysis</button>

          </div>
          <Clock
            className='clock-text'
            ticking={true} timezone={'Asia/Manila'}
            format={'h:mm:ss A | MMM DD, YYYY'} />
        </div>
      </div>

      {/******* CONTENT SECTION ***************************************************/}
      <div className='content-container h-100'>
        {loading ? <ReactLoading type={'spokes'} color={'#0f1b2a'} height={550} width={375} className='loading-component' /> : '' }
        <Suspense fallback={<ReactLoading type={'spokes'} color={'#0f1b2a'} height={550} width={375} className='loading-component' />}>
          {/* <LoadDataFromSheet slData={formattedData} /> */}
          {page === 'Dashboard' ? (() => {
            switch (dashboard) {
              case 'overview':
                return <Overview selectedSL={streetlight} />
              case 'profile':
                return <Profile selectedSL={streetlight} />
              case 'status':
                return <Status data={lastData} />
              case 'analysis':
                return <Analysis data={formattedData}/>
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
        </Suspense>
      </div>

      {/******* FOOTER BAR ***************************************************/}
      <div className='footer-container'>

      </div>
    </div>
  );
}

export default App;
