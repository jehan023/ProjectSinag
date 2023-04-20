import React, { useEffect, useState } from 'react';
import zoomPlugin from 'chartjs-plugin-zoom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
);

const EnergyChart = (props) => {
    const sysData = props.data;
    const view = props.viewMode;

    const [label, setLabel] = useState([]);
    const [dataSys, setDataSys] = useState([]);
    const [dataCons, setDataCons] = useState([]);

    useEffect(() => {
        try {
            setLabel([]);
            setDataSys([]);

            switch (view) {
                case 'day':
                    sysData.map(row => {
                        setDataSys(prevList => [...prevList, row.pv_power]);
                        setDataCons(prevList => [...prevList, row.pv_power]);
                        setLabel(prevList => [...prevList, row.time]);
                    });

                    break;

                case 'month':
                    const byMonthFilter = sysData.reduce((acc, item) => {
                        const existingItem = acc.find((el) => el.date === item.date);
                        if (existingItem) {
                            existingItem.pv_gen += parseFloat(item.pv_power)*0.16667;
                        } else {
                            acc.push({ date: item.date, pv_gen: item.pv_power*0.16667 });
                        }
                        return acc;
                    }, []);

                    byMonthFilter.map(row => {
                        setDataSys(prevList => [...prevList, row.pv_gen]);
                        setLabel(prevList => [...prevList, row.date]);
                    });

                    break

                case 'year':
                    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                    const sumByDate = {};
                    for (let i = 0; i < sysData.length; i++) {
                        const dateParts = sysData[i].date.split(' ');
                        const monthIndex = monthNames.indexOf(dateParts[0]);
                        const year = dateParts[2];
                        const yearMonth = `${monthNames[monthIndex]}-${year}`;
                        const value = sysData[i].pv_power;
                        if (sumByDate[yearMonth]) {
                            sumByDate[yearMonth] += value;
                        } else {
                            sumByDate[yearMonth] = value;
                        }
                    }

                    const sumByMonth = {};
                    for (const date in sumByDate) {
                        const yearMonth = date;
                        const value = sumByDate[date];
                        if (sumByMonth[yearMonth]) {
                            sumByMonth[yearMonth] += value;
                        } else {
                            sumByMonth[yearMonth] = value;
                        }
                    }

                    const resultArray = [];
                    for (const yearMonth in sumByMonth) {
                        const [monthName, year] = yearMonth.split('-');
                        const month = monthNames.indexOf(monthName) + 1;
                        const sum = sumByMonth[yearMonth];
                        resultArray.push({ month: monthNames[month - 1], sum });
                    }
                    console.table(resultArray);

                    // console.log(resultArray);
                    resultArray.map(row => {
                        setDataSys(prevList => [...prevList, row.sum]);
                        setDataCons(prevList => [...prevList, row.sum]);
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
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Energy (Wh)',
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
                label: 'Generate',
                data: dataSys,
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
            // {
            //     label: 'Consumption',
            //     data: dataCons,
            //     backgroundColor: 'rgba(53, 162, 235, 1)',
            // },
        ],
    };

    return <Bar options={options} data={data} />;
};

export default EnergyChart;