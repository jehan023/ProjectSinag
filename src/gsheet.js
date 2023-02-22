import React, { useState, useEffect } from 'react';
import loadDataFromSheet from './loadDataFromSheet';

function Gsheet() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   setInterval(() => {
  //     fetch("https://api.apispreadsheets.com/data/WrVxOxeDpPqCnC9G/").then(res => {
  //       if (res.status === 200) {
  //         // SUCCESS
  //         res.json().then(data => {
  //           setData(data)
  //         }).catch(err => console.log(err))
  //       }
  //       else {
  //         // ERROR
  //       }
  //     })
  //   }, 900000)
    // async function fetchData() {
    //   const loadedData = await loadDataFromSheet();
    //   setData(loadedData);
    // }
    // fetchData();

  // });

  const dateConvert = (dateF) => {
    const date = new Date((Math.floor(dateF) - 25569) * 86400 * 1000);
    return date.toLocaleDateString();
  };

  const timeConvert = (timeF) => {
    const seconds = Math.floor(timeF * 86400);
    const time = new Date(seconds * 1000).toISOString().substr(11, 8);
    return time;
  };

  const read = () => {
    if (data.length !== 0) {
      return data['data'].map((log, index) => (
        <tr>
          <td>{index}</td>
          <td>{dateConvert(log.date)}</td>
          <td>{timeConvert(log.time)}</td>
          <td>{log.pv_power}</td>
          <td>{log.lux}</td>
          <td>{log.temp}</td>
        </tr>
      ))
    } else {
      <div>Loading....</div>
    }
  };

  return (
    <div className='text-center'>
      <table className='table table-striped'>
        {read()}
      </table>
    </div>
  );
}

export default Gsheet;