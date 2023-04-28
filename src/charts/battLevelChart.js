import React, { useEffect, useState } from 'react';
import zoomPlugin from 'chartjs-plugin-zoom';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    Filler,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    Filler,
    LineController,
    BarController,
    zoomPlugin
);

const BattLevelChart = (props) => {
    const sysData = props.data;
    const view = props.viewMode;

    const [label, setLabel] = useState([]);
    const [level, setLevel] = useState([]);
    const [lamp, setLamp] = useState([]);
    const [status, setStatus] = useState([]);

    useEffect(() => {
        try {
            setLabel([]);
            setLevel([]);
            setLamp([]);
            setStatus([]);

            switch (view) {
                case 'day':
                    sysData.map(row => {
                        setLevel(prevList => [...prevList, row.batt_level]);
                        setLabel(prevList => [...prevList, row.time]);
                        setLamp(prevList => [...prevList, row.led_status]);
                        setStatus(prevList => [...prevList, row.charging]);
                    });

                    break;

                case 'month':
                    const byMonthFilter = sysData.reduce((acc, item) => {
                        const existingItem = acc.find((el) => el.date === item.date);
                        if (existingItem) {
                            existingItem.level = Math.max(existingItem.level, parseFloat(item.batt_level));
                        } else {
                            acc.push({ date: item.date, level: item.batt_level });
                        }
                        return acc;
                    }, []);

                    byMonthFilter.map(row => {
                        setLevel(prevList => [...prevList, row.level]);
                        setLabel(prevList => [...prevList, row.date]);
                    });

                    break

                case 'year':
                    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                    const levelByMonth = {};
                    const countByMonth = {};

                    for (let i = 0; i < sysData.length; i++) {
                        const dateParts = sysData[i].date.split(' ');
                        const monthIndex = monthNames.indexOf(dateParts[0]);
                        const year = dateParts[2];
                        const yearMonth = `${monthNames[monthIndex]}-${year}`;
                        const level = sysData[i].batt_level;

                        if (levelByMonth[yearMonth]) {
                            levelByMonth[yearMonth] += level;
                            countByMonth[yearMonth]++;
                        } else {
                            levelByMonth[yearMonth] = level;
                            countByMonth[yearMonth] = 1;
                        }
                    }

                    const resultArray = [];
                    for (const yearMonth in levelByMonth) {
                        const [monthName, year] = yearMonth.split('-');
                        const month = monthNames.indexOf(monthName) + 1;
                        const level = levelByMonth[yearMonth] / countByMonth[yearMonth];
                        resultArray.push({ month: monthNames[month - 1], level: level });
                    }

                    resultArray.map(row => {
                        setLevel(prevList => [...prevList, row.level]);
                        setLabel(prevList => [...prevList, row.month]);
                    });

                    break;

                default:
                    return;
            }

        } catch {

        }
    }, [sysData, view])



    const options = {
        responsive: true,

        // scales: {
        //     yAxes: [
        //         {
        //             id: 'lamp',
        //             type: 'category',
        //             labels: ['OFF', 'ON'],
        //         },
        //         {
        //             id: 'charging',
        //             type: 'category',
        //             labels: ['discharging', 'charging'],
        //         },
        //     ],
        // },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    filter: function (legendItem, data) {
                        return legendItem.datasetIndex !== 0;
                    },
                },
            },
            title: {
                display: true,
                text: 'Battery Level',
                font: {
                    size: 24,
                }
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x'
                },
                // zoom: {
                //     pinch: {
                //         enabled: true       // Enable pinch zooming
                //     },
                //     wheel: {
                //         enabled: true       // Enable wheel zooming
                //     },
                //     mode: 'x',
                // }
            }
        },
    };

    const labels = label;

    const data = {
        labels,
        datasets: [
            {
                type: 'bar',
                label: 'Level (%)',
                data: level,
                // backgroundColor: 'rgba(22, 160, 133, 0.5)',
                // borderColor: 'rgba(75,192,192,1)',
                backgroundColor: (point) => {
                    if (status[point.dataIndex]) {
                        return 'rgba(28, 164, 63, 0.8)'; // green if charging
                    } if (lamp[point.dataIndex]) {
                        return 'rgb(207, 0, 15, 0.8)'; // red if lamp is ON
                    } else {
                        return 'rgba(75,192,192,0.8)'; // blue if neither
                    }
                },
                // fill: false,
            },
            {
                type: 'line',
                label: 'Lamp ON',
                // data: lamp.map((d) => (d.lamp_status ? 'ON' : 'OFF')),
                backgroundColor: 'rgb(207, 0, 15, 0.8)',
                // borderColor: 'rgba(245, 39, 39, 0.8)',
                // borderColor: 'rgba(255,0,0,1)',
                // yAxisID: 'lamp',
            },
            {
                type: 'line',
                label: 'Charging',
                // data: status,
                backgroundColor: 'rgba(28, 164, 63, 0.8)',
                // borderColor: 'rgba(22, 160, 133, 1)',
                // borderColor: 'rgba(0,255,0,1)',
                // yAxisID: 'charging',
            },
        ],
    };

    return <Chart options={options} data={data} />;
};

export default BattLevelChart;