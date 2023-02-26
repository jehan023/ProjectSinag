import React, { useState, memo } from 'react';
import Logo from '../images/Sinag-Logo.png';
import Clock from 'react-live-clock';
import axios from 'axios';

function Navbar({ callback }) {
    const [page, setPage] = useState('Dashboard');

    const [dashboard, setDashboard] = useState('overview');

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
    const [fetchData, setFetchData] = useState([]);

    const callAPI = () => {
        try {
            axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1yg8ET-05HTyTipGyvNVDZ1T3WuOBc1vNwwz4N8ifPRA/values/${selectedValue}!A1:K`,
                {
                    params: {
                        key: 'AIzaSyDfmsbf3ilW3D0fXotyabO1pFLX8CrsKws'
                    }
                }).then(response => {
                    setFetchData(response.data.values);
                }).catch(error => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        callAPI();
        callback({ page, selectedValue, dashboard, formattedData });
    };
    const handlePage = (Page) => {
        setPage(Page);
        callback({ page, selectedValue, dashboard, formattedData });
    };
    const handleDash = (Dash) => {
        setDashboard(Dash);
        callback({ page, selectedValue, dashboard, formattedData });
    };

    const formattedData = fetchData.slice(1).map(row => ({
        date: row[0],
        time: row[1],
        pv_power: row[4],
        batt_volts: row[5],
        batt_level: row[6],
        led_amps: row[7],
        led_status: row[8],
        lux: row[9],
        temp: row[10]
    }));

    // callback({ page, selectedValue, dashboard, formattedData });

    console.log('Formatted Data: ', formattedData);

    return (
        <>
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

            <div className='bottom-navbar'>
                <div className='d-flex align-items-center gap-2 mb-2'>
                    <h4 className={page === 'Dashboard' ? 'nav-section my-0' : 'hidden'}>{page}</h4>

                    <div className={page === 'Dashboard' ? 'd-flex align-items-center gap-2' : 'hidden'}>
                        <h4 className='my-0'> | </h4>
                        <select className='sl-dropdown' value={selectedValue} onChange={handleChange} >
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
                        format={'h:mm:ss A | MMM DD YYYY'} />
                </div>
            </div>
        </>
    )
}

export default memo(Navbar);