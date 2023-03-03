import React, { useState, memo, useEffect } from 'react';
import { FaSolarPanel, FaBatteryFull, FaBatteryThreeQuarters, FaBatteryHalf, FaBatteryQuarter, FaBatteryEmpty, FaSignal } from "react-icons/fa";
import { BsLightningChargeFill, BsThermometerSun, BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { TbBulbOff, TbBulb, TbPlugConnected } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { GiSoundWaves } from "react-icons/gi";
import { IoBatteryCharging } from "react-icons/io5";
// Direct Sunlight: IoMdSunny
// Ambient Daylight: WiDaySunny
// Overcast Daylight:WiDayCloudy
// Sunset & Sunrise: BsSunsetFill BsSunriseFill
// Moonlight (Full moon): BsFillMoonStarsFill
// Cloudy Night: IoCloudyNight

//Battery Charging: IoBatteryCharging
//Battery 100%: FaBatteryFull
//Battery 75% FaBatteryThreeQuarters
//Battery 50%: FaBatteryHalf
//Battery 25%: FaBatteryQuarter
//Battery 0%: FaBatteryEmpty

function Status(props) {
  console.log('Status:', props.data)
  const data = props.data;
  const battPercent = data.batt_level;
  const [battColor, setBattColor] = useState('');
  const [humidity, setHumidity] = useState('-');

  useEffect(() => {
    callWeatherAPI();
  }, [data]);

  const callWeatherAPI = () => {
    console.log('Fetching Weather Data');
    try {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=14.4506&lon=120.9828&appid=a09978101e59b60cb76ea444b36760cc&units=metric`)
        .then(response => response.json())
        .then(data => {
          setHumidity(data.main.humidity);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.error(error);
    }
  }
  console.log('Humidity: ', humidity);

  const BattStatusIcon = () => {
    if (battPercent >= 76) {
      setBattColor('status-card battFull');
      return <FaBatteryFull className='status-icon' />
    } else if (battPercent >= 51 && battPercent <= 75) {
      setBattColor('status-card battSafe');
      return <FaBatteryThreeQuarters className='status-icon' />
    } else if (battPercent >= 26 && battPercent <= 50) {
      setBattColor('status-card battMid');
      return <FaBatteryHalf className='status-icon' />
    } else if (battPercent >= 1 && battPercent <= 25) {
      setBattColor('status-card battDanger');
      return <FaBatteryQuarter className='status-icon' />
    } else {
      setBattColor('status-card battDanger');
      return <FaBatteryEmpty className='status-icon' />
    }
  };

  const LampStatusIcon = () => {
    if (parseFloat(data.led_status) === 1) {
      return <div className='status-card lampON'>
        <TbBulb className='status-icon' />
        <h2>ON</h2>
        <h5>LED Lamp</h5>
      </div>
    }
    if (parseFloat(data.led_status) === 0) {
      return <div className='status-card lampOFF'>
        <TbBulbOff className='status-icon' />
        <h2>OFF</h2>
        <h5>LED Lamp</h5>
      </div>
    }
  }

  console.log('Humidity', humidity);

  return (
    <div className='status-container'>
      <div className='d-flex align-items-center my-0'>
        <h3 className='my-0'>System Status</h3>
      </div>
      <div className='d-flex align-items-center gap-2 my-2'>
        <div className='sl-status'> - </div>
        <h6 className='my-0'>Active | Last update 15mins ago</h6>
      </div>

      {/**Status Cards Section */}
      <div className='status-section'>
        <div className='status-cards-container'>
          {/**1st row cards */}
          <div className='cards-row d-flex justify-content-center gap-4 my-4'>
            <div className='status-card'>
              <FaSolarPanel className='status-icon' />
              <h2>{parseFloat(data.pv_power)}W</h2>
              <h5>Current Power</h5>
            </div>
            <div className='status-card'>
              <BsLightningChargeFill className='status-icon' />
              <h2>18Wh</h2>
              <h5>Energy Yield</h5>
            </div>
            <div className='status-card'>
              <TbPlugConnected className='status-icon' />
              <h2>60Wh</h2>
              <h5>Consumption</h5>
            </div>
            <div className={battColor}>
              {/* <FaBatteryThreeQuarters className='status-icon'/> */}
              <BattStatusIcon />
              <h2>{battPercent}%</h2>
              <h5>Battery</h5>
            </div>
            <LampStatusIcon />
          </div>

          {/**2nd row cards */}
          <div className='cards-row d-flex justify-content-between gap-4'>
            <div className='status-card'>
              <BsThermometerSun className='status-icon' />
              <h2>{parseFloat(data.temp)}°C</h2>
              <h5>Ambient Temperature</h5>
            </div>
            <div className='status-card'>
              <BsSunFill className='status-icon' />
              <h2>{parseFloat(data.lux)} lux</h2>
              <h5>Ambient Light</h5>
            </div>
            <div className='status-card'>
              <WiHumidity className='status-icon' />
              <h2>{humidity}%</h2>
              <h5>Humidity</h5>
            </div>
            <div className='status-card'>
              <GiSoundWaves className='status-icon' />
              <h2>{parseFloat(data.snr)}dB</h2>
              <h5>Signal-Noise Ratio</h5>
            </div>
            <div className='status-card'>
              <FaSignal className='status-icon' />
              <h2>{parseFloat(data.rssi)}dB</h2>
              <h5>Signal Strength</h5>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default memo(Status);