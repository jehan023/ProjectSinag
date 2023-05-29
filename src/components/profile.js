import React, { useState } from 'react';

function Profile(props) {
  const streetlight = props.selectedSL;
  /*const options = [
    {
      list: 'SL1', value: 'SL1', label: 'Streetlight 1', location: 'Narra St., Brgy BF International Village, Las Piñas City | 1740',
      battCapacity: '20Ah', pvPanel: '65Watts', lamp: '100Watts', status: 'Active'
    },
    {
      list: 'SL2', value: 'SL2', label: 'Streetlight 2', location: 'Narra St., Brgy BF International Village, Las Piñas City | 1740',
      battCapacity: '30Ah', pvPanel: '65Watts', lamp: '120Watts', status: 'Inactive'
    },
    {
      list: 'SL3', value: 'SL3', label: 'Streetlight 3', location: 'Patola St., Brgy BF International Village, Las Piñas City | 1740',
      battCapacity: '36Ah', pvPanel: '80Watts', lamp: '150Watts', status: 'Active'
    },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const getObjectByValue = (value) => {
    return options.find((obj) => obj.value === value);
  };

  const streetlight = getObjectByValue(selectedValue);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };*/
  return (
    <div className='profile-container'>
      <div className='d-flex align-items-center justify-content-center my-0'>
        <h3 className='my-0'>System Profile</h3>
      </div>

      <div className='d-flex align-items-center justify-content-center mt-4'>
        <div className='profile-card p-4'>
          <p><b>Name:</b> {streetlight.label} ({streetlight.value})</p>
          <p><b>Location:</b> {streetlight.location}</p>
          <p><b>Transceiver:</b> LoRa SX1278 433MHz</p>
          <p><b>Gateway:</b> NodeMCU ESP8266 WiFi</p>
          <p><b>Installation Date:</b> May 28, 2023</p>
          <p><b>Last Maintenance:</b> TBA</p>
          <div className='line-break mb-3'></div>
          <p><b>Solar Panel:</b> {streetlight.pvPanel}</p>
          <p><b>Battery:</b> {streetlight.battCapacity}</p>
          <p><b>LED Lamp:</b> {streetlight.lamp}</p>

        </div>
      </div>
    </div>
  )
}

export default Profile;