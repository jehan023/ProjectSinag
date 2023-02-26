import React, { useState, memo } from 'react';
import '../App.scss';

import { GiSolarPower } from "react-icons/gi";
import { FaCarBattery } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { TbBulb } from "react-icons/tb";


function Overview(props) {
  const streetlight = props.selectedSL;
  const devices = [
    { list: 'SL1', value: 'SL1', label: 'Streetlight 1' },
    { list: 'SL2', value: 'SL2', label: 'Streetlight 2' },
    { list: 'SL3', value: 'SL3', label: 'Streetlight 3' },
  ];

  return (
    <div className='overview-container'>
      <div className='d-flex align-items-center my-0'>
        <h3 className='my-0'>System Overview</h3>
      </div>

      <div className='d-flex justify-content-between'>
        {/** Left side of the screen section*/}
        <div className='sl-overview py-3'>
          <div className='d-flex gap-5 mb-3'>
            <div className='sl-overview-card d-flex align-items-center'>
              <GiSolarPower className='overview-icon w-100' />
              <div className='w-100'>
                <h3>90.6 Wh</h3>
                <p>Current Yield</p>
                <h3>0.5 kWh</h3>
                <p>Highest Yield</p></div>
            </div>
            <div className='sl-overview-card d-flex align-items-center'>
              <ImPower className='overview-icon w-50' />
              <div className='w-100'>
                <h3>0.38 kWh</h3>
                <p>Current Consumption</p>
                <h3>1.43 kWh</h3>
                <p>Highest Consumption</p></div>
            </div>
          </div>

          <div className='d-flex gap-5 mb-3'>
            <div className='sl-overview-card d-flex align-items-center'>
              <FaCarBattery className='overview-icon w-100' />
              <div className='w-100'>
                <h2>{streetlight.battCapacity}</h2>
                <p>Battery Capacity</p>
              </div>
            </div>
            <div className='sl-overview-card d-flex align-items-center'>
              <TbBulb className='overview-icon w-100' />
              <div className='w-100'>
                <h2>{streetlight.lamp}</h2>
                <p>LED Lamp</p>
              </div>
            </div>
          </div>

          {/** Details for temp and time section*/}
          <div className='temp-time d-flex justify-content-between align-items-center p-3'>
            <div className='current-temp tt-item'>
              <h2>26°C</h2>
              <h5>Cloudy</h5>
              <p>Temperature</p>
            </div>
            <div className='sunrise-time tt-item'>
              <h2>6:25 AM</h2>
              <h5>(GMT+8)</h5>
              <p>Sunrise</p>
            </div>
            <div className='sunset-time tt-item'>
              <h2>5:53 PM</h2>
              <h5>(GMT+8)</h5>
              <p>Sunset</p>
            </div>
          </div>
        </div>

        {/** Right side of the screen section*/}

        <div className='sl-devices p-3'>
          <div>
            <h2 className='mb-3'>Devices</h2>
            <div className='devices-list'>
              {devices.map((option) => (
                <div className='d-flex align-items-center gap-2 mb-1 mx-3' key={option.value}>
                  <div className='sl-status'> - </div>
                  <p>{option.label} ({option.list})</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className='my-3'>Energy Balance</h2>
            <div className='energy-balance-chart'>
              chart
            </div>
          </div>
          <div>
            <h2 className='my-3'>Location</h2>
            <p className='mx-3'>Narra St. and  Patola St., Brgy. BF International
              Village, Las Piñas City | 1740</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default memo(Overview);