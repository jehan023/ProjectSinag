import React, { useState } from 'react';
import { FaSolarPanel, FaBatteryFull, FaSignal, FaPlug } from "react-icons/fa";
import { BsLightningChargeFill, BsThermometerSun, BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { TbBulbOff, TbBulb, TbPlugConnected } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { GiSoundWaves } from "react-icons/gi";

function Status() {
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
              <FaSolarPanel className='status-icon'/>
              <h2>32W</h2>
              <h5>Current Power</h5>
            </div>
            <div className='status-card'>
              <BsLightningChargeFill className='status-icon'/>
              <h2>18Wh</h2>
              <h5>Energy Yield</h5>
            </div>
            <div className='status-card'>
              <TbPlugConnected className='status-icon'/>
              <h2>60Wh</h2>
              <h5>Consumption</h5>
            </div>
            <div className='status-card battery-card'>
              <FaBatteryFull className='status-icon'/>
              <h2>100%</h2>
              <h5>Battery</h5>
            </div>
            <div className='status-card lamp-card'>
              <TbBulbOff className='status-icon'/>
              <h2>OFF</h2>
              <h5>LED Lamp</h5>
            </div>
          </div>
          {/**2nd row cards */}
          <div className='cards-row d-flex justify-content-between gap-4'>
            <div className='status-card'>
              <BsThermometerSun className='status-icon'/>
              <h2>29.9°C</h2>
              <h5>Ambient Temperature</h5>
            </div>
            <div className='status-card'>
              <BsSunFill className='status-icon'/>
              <h2>25k lux</h2>
              <h5>Ambient Light</h5>
            </div>
            <div className='status-card'>
              <WiHumidity className='status-icon'/>
              <h2>66%</h2>
              <h5>Humidity</h5>
            </div>
            <div className='status-card'>
              <GiSoundWaves className='status-icon'/>
              <h2>-20 dB</h2>
              <h5>Signal-Noise Ratio</h5>
            </div>
            <div className='status-card'>
              <FaSignal className='status-icon'/>
              <h2>-90 dB</h2>
              <h5>Signal Strength</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Status;