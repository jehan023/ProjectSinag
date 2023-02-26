import React, { useState, useEffect, Suspense, memo } from 'react';
// import axios from 'axios';
import ReactLoading from 'react-loading';

const LoadDataFromSheet = (props) => {
    // const [data, setData] = useState([]);

    // // useEffect(() => {
    // //     fetchData();
    // // }, []);

    // let cancelToken;

    // if (typeof cancelToken != typeof undefined) {
    //     cancelToken.cancel('Cancelling the previous req.')
    // }
    // cancelToken = axios.CancelToken.source();

    // async function fetchData() {
    //     try {
    //         await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1yg8ET-05HTyTipGyvNVDZ1T3WuOBc1vNwwz4N8ifPRA/values/${props.slData}!A1:K`,
    //             {
    //                 params: {
    //                     key: 'AIzaSyDfmsbf3ilW3D0fXotyabO1pFLX8CrsKws'
    //                 }
    //             }, { cancelToken: cancelToken.token }).then(response => {
    //                 setData(response.data.values);
    //             }).catch(error => {
    //                 console.error(error);
    //             });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // const filteredData = data.filter(item => item[0]);

    // const formattedData = data.slice(1).map(row => ({
    //     date: row[0],
    //     time: row[1],
    //     pv_power: row[4],
    //     batt_volts: row[5],
    //     batt_level: row[6],
    //     led_amps: row[7],
    //     led_status: row[8],
    //     lux: row[9],
    //     temp: row[10]
    // }));

    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>PV_Power</th>
                    <th>Batt_Volts</th>
                    <th>Batt_Level</th>
                    <th>LED_Amps</th>
                    <th>LED_Status</th>
                    <th>Ambient Light</th>
                    <th>Temperature</th>
                </tr>
            </thead>
            <Suspense fallback={<ReactLoading type={'bars'} color={'#0f1b2a'} height={550} width={375} className='' />}>
                <tbody>
                    {props.slData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.date}</td>
                            <td>{row.time}</td>
                            <td>{row.pv_power}</td>
                            <td>{row.batt_volts}</td>
                            <td>{row.batt_level}</td>
                            <td>{row.led_amps}</td>
                            <td>{row.led_status}</td>
                            <td>{row.lux}</td>
                            <td>{row.temp}</td>
                        </tr>
                    ))}
                </tbody>
            </Suspense>
        </table>
    );
};

export default memo(LoadDataFromSheet);