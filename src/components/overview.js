import React, { useState, memo, useEffect } from 'react';
import '../App.scss';
// import axios from 'axios';
import ReactLoading from 'react-loading';

import { GiSolarPower } from "react-icons/gi";
import { FaCarBattery, FaSolarPanel } from "react-icons/fa";
import { IoIosBulb } from "react-icons/io";
import { TbBulb } from "react-icons/tb";
import { BiCloud } from "react-icons/bi";
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";
import { IoBatteryCharging } from "react-icons/io5";

function Overview(props, { setHumidityValue }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const data = props.selectedSL;
  const sameDateData = props.sameDate;
  const allData = props.allData;
  const [sunrise, setSunrise] = useState('-');
  const [sunset, setSunset] = useState('-');
  const [temp, setTemp] = useState('-');
  const [weather, setWeather] = useState('-');
  const location = 'Las Piñas, PH';

  const [avgCharging, setAvgCharging] = useState(0);
  const [avgON, setAvgON] = useState(0);

  const devices = [
    { list: 'SL1', value: 'SL1', label: 'Streetlight 1' },
    { list: 'SL2', value: 'SL2', label: 'Streetlight 2' },
    { list: 'SL3', value: 'SL3', label: 'Streetlight 3' },
  ];

  useEffect(() => {
    callWeatherAPI();
  }, []);

  useEffect(() => {
    AvgCharging();
    AvgON();
  }, [allData]);

  const callWeatherAPI = () => {
    console.log('Fetching Weather Data');
    try {
      setLoading(true);
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=14.4506&lon=120.9828&appid=a09978101e59b60cb76ea444b36760cc&units=metric`)
        .then(response => response.json())
        .then(data => {
          // setFetchWeather(data);
          setSunrise(formatTimestamp(data.sys.sunrise));
          setSunset(formatTimestamp(data.sys.sunset));
          setTemp(data.main.temp);
          setWeather(data['weather'][0]['description']);
        })
        .catch(error => setError(error))
        .finally(setLoading(false));
    } catch (error) {
      console.error(error);
    }
  }

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    return formattedTime;
  }

  const GetEnergyYield = () => {
    let energy = 0.0;
    let totalEnergy = 0.0;
    sameDateData.forEach(same => {
      energy = energy + same.pv_power;
    });
    totalEnergy = (energy * 0.16667);
    return (parseFloat(totalEnergy).toFixed(2));
  }

  const GetHighestYield = () => {
    const byDateFilter = allData.reduce((acc, item) => {
      const existingItem = acc.find((el) => el.date === item.date);
      if (existingItem) {
        existingItem.gen_power += parseFloat(item.pv_power) * 0.16667;
      } else {
        acc.push({ date: item.date, gen_power: item.pv_power * 0.16667 });
      }
      return acc;
    }, []);

    const highestYield = byDateFilter.reduce((acc, curr) => Math.max(acc, curr.gen_power), Number.NEGATIVE_INFINITY);
    return (parseFloat(highestYield).toFixed(2));
  }

  const AvgCharging = () => {
    const chargingTimePerDay = allData.reduce((acc, item, index, array) => {
      if (item.charging === 1) {
        const nextItem = array[index + 1];
        if (nextItem && nextItem.date === item.date && nextItem.charging === 0) {
          const dateISO = new Date(item.date).toISOString().split('T')[0];
          const start = new Date(`${dateISO}T${item.time}:00Z`);
          // console.log(start);
          const end = new Date(`${dateISO}T${nextItem.time}:00Z`);
          const chargingTime = (end - start) / (1000 * 60 * 60); // convert milliseconds to hours
          const existingItem = acc.find((el) => el.date === item.date);
          if (existingItem) {
            existingItem.charging_time += chargingTime;
          } else {
            acc.push({ date: item.date, charging_time: chargingTime });
          }
        }
      }
      return acc;
    }, []);
    console.table(chargingTimePerDay);

    const totalChargingTime = chargingTimePerDay.reduce((acc, curr) => acc + curr.charging_time, 0);
    const averageChargingTime = totalChargingTime / chargingTimePerDay.length;

    console.log(averageChargingTime);

    setAvgCharging(parseFloat(averageChargingTime).toFixed(2));
  }

  const AvgON = () => {
    const OnTimePerDay = allData.reduce((acc, item, index, array) => {
      if (item.led_status === 1) {
        const nextItem = array[index + 1];
        if (nextItem && nextItem.date === item.date && nextItem.led_status === 1) {
          const dateISO = new Date(item.date).toISOString().split('T')[0];
          const start = new Date(`${dateISO}T${item.time}:00Z`);
          const end = new Date(`${dateISO}T${nextItem.time}:00Z`);
          const ONtime = (end - start) / (1000 * 60 * 60); // convert milliseconds to hours
          const existingItem = acc.find((el) => el.date === item.date);
          if (existingItem) {
            existingItem.on_time += ONtime;
          } else {
            acc.push({ date: item.date, on_time: ONtime });
          }
        }
        if (nextItem && nextItem.date === item.date && nextItem.led_status === 0) {
          const dateISO = new Date(item.date).toISOString().split('T')[0];
          const start = new Date(`${dateISO}T${item.time}:00Z`);
          const end = new Date(`${dateISO}T${nextItem.time}:00Z`);
          const ONtime = (end - start) / (1000 * 60 * 60); // convert milliseconds to hours
          const existingItem = acc.find((el) => el.date === item.date);
          if (existingItem) {
            existingItem.on_time += ONtime;
          } else {
            acc.push({ date: item.date, on_time: ONtime });
          }
        }
      }

      // if (item.led_status === 0) {
      //   const prevItem = array[index - 1];
      //   // const nextItem = array[index + 1];
      //   if (prevItem && prevItem.date !== item.date && prevItem.led_status === 1) {
      //     const dateISO = new Date(item.date).toISOString().split('T')[0];
      //     const start = new Date(`${dateISO}T00:00:00Z`);
      //     const end = new Date(`${dateISO}T${item.time}:00Z`);
      //     const ONtime = (end - start) / (1000 * 60 * 60); // convert milliseconds to hours
      //     const existingItem = acc.find((el) => el.date === item.date);
      //     if (existingItem) {
      //       existingItem.on_time += ONtime;
      //     } else {
      //       acc.push({ date: item.date, on_time: ONtime });
      //     }
      //   }
      // }

      return acc;
    }, []);
    console.table(OnTimePerDay);

    const totalOnTime = OnTimePerDay.reduce((acc, curr) => acc + curr.on_time, 0);
    const averageOnTime = totalOnTime / OnTimePerDay.length;

    console.log(averageOnTime);

    setAvgON(parseFloat(averageOnTime).toFixed(2))
  }

  return (
    <div className='overview-container'>
      {loading ? <ReactLoading type={'spokes'} color={'#0f1b2a'} height={550} width={375} className='loading-api' /> : ''}
      <div className=''>
        <h3 className='my-0'>System Overview</h3>
      </div>

      <div className='overview-container-wrapper'>
        {/** Left side of the screen section*/}
        <div className='sl-overview-container'>

          <div className='sl-wrapper mb-3'>
            <div className='sl-overview-card'>
              <div className='card-content'>
                <FaSolarPanel className='sl-icon' />
                <h3>{GetEnergyYield()}Wh</h3>
                <p>Current Yield</p>
              </div>
            </div>
            <div className='sl-overview-card'>
              <div className='card-content'>
                <GiSolarPower className='sl-icon' />
                <h3>{GetHighestYield()}Wh</h3>
                <p>Highest Yield</p>
              </div>
            </div>
            <div className='sl-overview-card'>
              <div className='card-content'>
                <FaCarBattery className='sl-icon' />
                <h3>{data.battCapacity}</h3>
                <p>Battery Capacity</p>
              </div>
            </div>
          </div>

          <div className='sl-wrapper'>
            <div className='sl-overview-card'>
              <div className='card-content'>
                <IoBatteryCharging className='sl-icon' />
                <h3>{avgCharging}hr</h3>
                <p>Avg. Charging Time</p>
              </div>
            </div>
            <div className='sl-overview-card'>
              <div className='card-content'>
                <TbBulb className='sl-icon' />
                <h3>{avgON}hr</h3>
                <p>Avg. ON Time</p>
              </div>
            </div>
            <div className='sl-overview-card'>
              <div className='card-content'>
                <IoIosBulb className='sl-icon' />
                <h3>{data.lamp}</h3>
                <p>LED Lamp</p>
              </div>
            </div>
          </div>
        </div>

        {/** Right side of the screen section*/}

        <div className='sl-temp-container'>
          {/** Details for temp and time section*/}
          <div className='sl-wrapper'>
            <div className='weather-wrapper'>
              <div className='icon-wrapper'>
                <BiCloud className='weather-icon' />
              </div>

              
              <div className='temp-container'>
                <h2 className='temp-value'>{temp}°C</h2>
                <h2 className='device-title'>{location}</h2>
                <h6><i>{weather}</i></h6>
                {/* <p>{location}</p> */}
              </div>
            </div>

            <div className='weather-container'>
            <div className="content-container sunrise-container">
              <div className="content-wrap">
                <div className="icon-wrapper">
                  <BsSunrise className="s-icon" />
                </div>
              </div>
              <div className="content-wrap">
                <h2 className="sunrise-value">{sunrise}</h2>
                <h6>(GMT+8)</h6>
                <p>Sunrise</p>
              </div>
            </div>
            <div className="content-container sunset-container">
              <div className="content-wrap">
                <div className="icon-wrapper">
                  <BsSunset className="s-icon" />
                </div>
              </div>
              <div className="content-wrap">
                <h2 className="sunset-value">{sunset}</h2>
                <h6>(GMT+8)</h6>
                <p>Sunset</p>
              </div>
            </div>
            </div>
          </div>

          {/** Details for devices and location section*/}
          <div className='dv-container'>
            <div>
              <h2 className='device-title'>Location</h2>
              <p className='location-txt'>{data.location}</p>
            </div>

          </div> 
      </div>
    </div>
  </div>
  )
}

export default memo(Overview);