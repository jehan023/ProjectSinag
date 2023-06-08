import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Sinag() {

  const [node, setNode] = useState('');
  const [status, setStatus] = useState();
  const [reply, setReply] = useState('reply')
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Refresh');
  }, [node, status]);

  const handleToggleButton = (receiver, state) => {

    setNode(receiver);
    setStatus(state);

    const node = receiver; // Replace with the value you want to send
    const status = state; // Replace with the value you want to send

    const url = `https://script.google.com/macros/s/AKfycbwe7GLMVh2T0qo4xOJz-cIvsL7GrW4szyFI7WCyb6BAzrTJr-8ALHALjVHRXCiPdEnz/exec`;

    axios
      .get(url, {
        params: {
          fnode: node,
          fled: status,
        },
      })
      .then(response => {
        setReply(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };


  return (
    <div className='sinag-container'>
      SL1
      <div className='sl-btn-wrapper d-flex flex-row'>
        <button className={(node === 'SL1' && status === 1) ? 'led-button pressed' : 'led-button'} onClick={() => { handleToggleButton('SL1', 1) }}>ON</button>
        <button className={(node === 'SL1' && status === 0) ? 'led-button pressed' : 'led-button'} onClick={() => { handleToggleButton('SL1', 0) }}>OFF</button>
      </div>
      SL2
      <div className='sl-btn-wrapper d-flex flex-row'>
        <button className={(node === 'SL2' && status === 1) ? 'led-button pressed' : 'led-button'} onClick={() => { handleToggleButton('SL2', 1) }}>ON</button>
        <button className={(node === 'SL2' && status === 0) ? 'led-button pressed' : 'led-button'} onClick={() => { handleToggleButton('SL2', 0) }}>OFF</button>
      </div>
      SL3
      <div className='sl-btn-wrapper d-flex flex-row'>
        <button className={(node === 'SL3' && status === 1) ? 'led-button pressed' : 'led-button'} onClick={() => { handleToggleButton('SL3', 1) }}>ON</button>
        <button className={(node === 'SL3' && status === 0) ? 'led-button pressed' : 'led-button'} onClick={() => { handleToggleButton('SL3', 0) }}>OFF</button>
      </div>
      <div>
        <p className='mt-3'>{reply}</p>
      </div>
    </div>
  )
}

export default Sinag;