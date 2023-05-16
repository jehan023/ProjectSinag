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
                            existingItem.pv_gen += parseFloat(item.pv_power) * 0.08333;
                        } else {
                            acc.push({ date: item.date, pv_gen: item.pv_power * 0.08333 });
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
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            mode: 'index',
        },
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
            }
        },
    };

    const labels = label;

    const data = {
        labels,
        datasets: [
            {   
                type: 'line',
                label: 'Generate (Wh)',
                data: dataSys,
                backgroundColor: 'rgba(255, 99, 132, 1)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
            // {
            //     label: 'Consumption',
            //     data: dataCons,
            //     backgroundColor: 'rgba(53, 162, 235, 1)',
            // },
        ],
    };

    return <Chart options={options} data={data} />;
};

export default EnergyChart;