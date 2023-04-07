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
  const sameDateData = props.sameDate;
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

  const GetEnergyYield = () => {
    let energy = 0.0;
    let totalEnergy = 0.0;
    sameDateData.forEach(same => {
      energy = energy + same.pv_power;
    });
    totalEnergy = (energy * 0.16667);
    console.log("Energy: " + totalEnergy);
    return (parseFloat(totalEnergy).toFixed(2));
  }

  // Get the current time
  const currentTime = new Date();

  // Extract the hour and minute components from the current time
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  // Split the lastTime string into hour and minute components
  const [lastHour, lastMinute] = data.time.split(':').map(Number);

  // Calculate the time difference in minutes
  const timeDifference = (currentHour - lastHour) * 60 + (currentMinute - lastMinute);

  const hoursDifference = Math.floor(timeDifference / 60);
  const minutesDifference = timeDifference % 60;
  let HRlabel = " hr ";
  let MINlabel = " min ";
  if (hoursDifference > 1) {
    HRlabel = " hrs ";
  } else {
    HRlabel = " hr ";
  }
  if (minutesDifference > 1) {
    MINlabel = " mins ago.";
  } else {
    MINlabel = " min ago."
  }

  const GetLastUpdate = () => {
    let active;
    if (currentTime.toLocaleString("en-US", { month: "long", day: 'numeric', year: 'numeric' }) === data.date) {
      if (data.pv_power > 0.0 || data.charging === 1.0 || data.led_status === 1.0) {
        active = "Active";
      }
    } else {
      active = "Inactive";
    }
    return <div className='d-flex align-items-center gap-2 my-2'>
      <div className={active === "Active" ? 'sl-status sl-active' : 'sl-status sl-inactive'}> - </div>
      {currentTime.toLocaleString("en-US", { month: "long", day: 'numeric', year: 'numeric' }) === data.date ?
        timeDifference > 60 ?
          <h6 className='my-0'>{active + " | Last update " + hoursDifference + HRlabel + minutesDifference + MINlabel}</h6> :
          <h6 className='my-0'>{active + " | Last update " + timeDifference + MINlabel}</h6>
        : <h6 className='my-0'>{active + " | Last update " + data.date}</h6>
      }
    </div>
  }


  return (
    <div className='status-container'>
      <div className='d-flex align-items-center my-0'>
        <h3 className='my-0'>System Status</h3>
      </div>
      <GetLastUpdate />

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
              <h2>{GetEnergyYield()}Wh</h2>
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