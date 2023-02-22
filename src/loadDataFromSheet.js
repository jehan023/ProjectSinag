import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoadDataFromSheet = (props) => {
    const data = props.selectedSL;
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1yg8ET-05HTyTipGyvNVDZ1T3WuOBc1vNwwz4N8ifPRA/values/${props.selectedSL.value}!A2:K`, {
    //         params: {
    //             key: 'AIzaSyDfmsbf3ilW3D0fXotyabO1pFLX8CrsKws'
    //         }
    //     }).then(response => {
    //         setData(response.data.values);
    //     }).catch(error => {
    //         console.error(error);
    //     });
    // });

    // const fetchData = () => {
    //     axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1yg8ET-05HTyTipGyvNVDZ1T3WuOBc1vNwwz4N8ifPRA/values/${props.selectedSL.value}!A2:K`, {
    //         params: {
    //             key: 'AIzaSyDfmsbf3ilW3D0fXotyabO1pFLX8CrsKws'
    //         }
    //     }).then(response => {
    //         setData(response.data.values);
    //     }).catch(error => {
    //         console.error(error);
    //     });
    // };

    // const filteredData = data.filter(item => item[0]);
    // const lastRowData = data.length - 1;

    // console.log(data[lastRowData].length);
    // for (let i = 0; i < data[lastRowData].length; i++) {
    //     console.log(data[lastRowData][i])
    // };

    return (
        <table className='table table-striped'>
            <button>Refetch Data</button>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>PV_Volts</th>
                    <th>PV_Amps</th>
                    <th>PV_Power</th>
                    <th>Batt_Volts</th>
                    <th>Batt_Level</th>
                    <th>LED_Amps</th>
                    <th>LED_Status</th>
                    <th>Ambient Light</th>
                    <th>Temperature</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                        <td>{row[4]}</td>
                        <td>{row[5]}</td>
                        <td>{row[6]}</td>
                        <td>{row[7]}</td>
                        <td>{row[8]}</td>
                        <td>{row[9]}</td>
                        <td>{row[10]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default LoadDataFromSheet;