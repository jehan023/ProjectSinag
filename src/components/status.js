import React, { useState, memo, useEffect } from 'react';
import { FaSolarPanel, FaBatteryFull, FaBatteryThreeQuarters, FaBatteryHalf, FaBatteryQuarter, FaBatteryEmpty } from "react-icons/fa";
import { BsLightningChargeFill, BsThermometerSun, BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { TbBulbOff, TbBulb } from "react-icons/tb";
import { WiHumidity, WiDaySunny, WiDayCloudy } from "react-icons/wi";
import { IoBatteryCharging, IoCloudyNight } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { MdWbTwilight, MdSignalCellular1Bar, MdSignalCellular2Bar, MdOutlineSignalCellular4Bar, MdSignalCellularConnectedNoInternet1Bar, MdSignalCellularConnectedNoInternet3Bar } from "react-icons/md";
// Direct Sunlight (Sunny): IoMdSunny
// Ambient Daylight: WiDaySunny
// Overcast Daylight (Cloudy):WiDayCloudy
// Twilight: TbSunset2
// Moonlight (Full moon): BsFillMoonStarsFill
// Cloudy Night: IoCloudyNight

//Battery Charging: IoBatteryCharging
//Battery 100%: FaBatteryFull
//Battery 75% FaBatteryThreeQuarters
//Battery 50%: FaBatteryHalf
//Battery 25%: FaBatteryQuarter
//Battery 0%: FaBatteryEmpty

function Status(props) {
  const data = props.data;
  const sameDateData = props.sameDate;
  const battPercent = data.batt_level;
  const [battColor, setBattColor] = useState('');
  const [humidity, setHumidity] = useState('-');

  useEffect(() => {
    callWeatherAPI();
  }, [data]);

  const callWeatherAPI = () => {
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
    if (data.charging === 1) {
      setBattColor('status-card battFull');
      return <IoBatteryCharging className='status-icon' />
    } else {
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
    totalEnergy = (energy * 0.08333);
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
    let active = "Inactive";
    if (currentTime.toLocaleString("en-US", { month: "long", day: 'numeric', year: 'numeric' }) === data.date) {
      if (!hoursDifference >= 1) {
        active = "Active";
      }
      // if (data.pv_power > 0.0 || data.charging === 1.0 || data.led_status === 1.0) {
      //   active = "Active";  
      // }
    }

    return <div className='d-flex align-items-center gap-2 my-2'>
      <div className={active === "Active" ? 'sl-status sl-active' : 'sl-status sl-inactive'}> - </div>
      {currentTime.toLocaleString("en-US", { month: "long", day: 'numeric', year: 'numeric' }) === data.date ?
        timeDifference > 60 ?
          <h6 className='status-time my-0'>{active + " | Last update " + hoursDifference + HRlabel + minutesDifference + MINlabel}</h6> :
          <h6 className='status-time my-0'>{active + " | Last update " + timeDifference + MINlabel}</h6>
        : <h6 className='status-time my-0'>{active + " | Last update " + data.date}</h6>
      }
    </div>
  }

  const SignalStrength = () => {
    let strength;
    if (parseFloat(data.rssi) > -115) {
      if (parseFloat(data.snr) > -7) {
        strength = "Good";
      }
      if (parseFloat(data.snr) <= -13) {
        strength = "Noisy environment";
      }
    }
    if (parseFloat(data.rssi) <= -120) {
      if (parseFloat(data.snr) > -7) {
        strength = "Too far away";
      }
      if (parseFloat(data.snr) <= -13) {
        strength = "Bad";
      }
    }
    if (parseFloat(data.rssi) < -115 && parseFloat(data.rssi) > -120) {
      strength = "Fair";
    }

    switch (strength) {
      case 'Bad':
        return <div className='status-card signal-bad'>
          <MdSignalCellular1Bar className='status-icon' />
          <h6><i>{strength}</i></h6>
          <h5>Signal Strength</h5>
        </div>
      case 'Fair':
        return <div className='status-card signal-fair'>
          <MdSignalCellular2Bar className='status-icon' />
          <h6><i>{strength}</i></h6>
          <h5>Signal Strength</h5>
        </div>
      case 'Good':
        return <div className='status-card signal-good'>
          <MdOutlineSignalCellular4Bar className='status-icon' />
          <h6><i>{strength}</i></h6>
          <h5>Signal Strength</h5>
        </div>
      case 'Noisy environment':
        return <div className='status-card signal-noisy'>
          <MdSignalCellularConnectedNoInternet3Bar className='status-icon' />
          <h6><i>{strength}</i></h6>
          <h5>Signal Strength</h5>
        </div>
      case 'Too far away':
        return <div className='status-card signal-far'>
          <MdSignalCellularConnectedNoInternet1Bar className='status-icon' />
          <h6><i>{strength}</i></h6>
          <h5>Signal Strength</h5>
        </div>
      default:
        return
    }
  }

  const AmbientLight = () => {
    let luxDesc;
    let luxIcon;
    if (parseFloat(data.lux) >= 32000) {
      luxDesc = "Direct Sunlight";
      luxIcon = <IoMdSunny className='status-icon' />;
    } else if (parseFloat(data.lux) >= 10000) {
      luxDesc = "Cloudy";
      luxIcon = <WiDaySunny className='status-icon' />;
    } else if (parseFloat(data.lux) >= 1000) {
      luxDesc = "Overcast Clouds";
      luxIcon = <WiDayCloudy className='status-icon' />;
    } else if (parseFloat(data.lux) >= 400) {
      luxDesc = "Twilight";
      luxIcon = <MdWbTwilight className='status-icon' />;
    } else if (parseFloat(data.lux) >= 1) {
      luxDesc = "Moonlight";
      luxIcon = <BsFillMoonStarsFill className='status-icon' />;
    } else if (parseFloat(data.lux) < 1) {
      luxDesc = "Night";
      luxIcon = <IoCloudyNight className='status-icon' />;
    }

    return <div className='status-card'>
      {luxIcon}
      <h6><i>{luxDesc}</i></h6>
      <h5>Ambient Light</h5>
    </div>
  }

  return (
    <div className='status-container'>
      <div className='d-flex align-items-center my-0'>
        <h3 className='my-0'>System Status</h3>
      </div>
      <GetLastUpdate />

      {/**Status Cards Section */}
      <div className='status-cards-container my-4'>
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

        <div className={battColor}>
          {/* <FaBatteryThreeQuarters className='status-icon'/> */}
          <BattStatusIcon />
          <h2>{battPercent}%</h2>
          <h5>Battery</h5>
        </div>
        <LampStatusIcon />
        <div className='status-card'>
          <BsThermometerSun className='status-icon' />
          <h2>{parseFloat(data.temp)}°C</h2>
          <h5>Ambient Temperature</h5>
        </div>

        <div className='status-card'>
          <WiHumidity className='status-icon' />
          <h2>{humidity}%</h2>
          <h5>Humidity</h5>
        </div>

        <AmbientLight />

        <SignalStrength />
      </div>
    </div>
  )
}

export default memo(Status);