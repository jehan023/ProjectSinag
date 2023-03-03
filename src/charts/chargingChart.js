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

const ChargingChart = (props) => {
    const sysData = props.data;
    const view = props.viewMode;

    const [label, setLabel] = useState([]);
    const [charge, setCharge] = useState([]);
    const [discharge, setDischarge] = useState([]);

    useEffect(() => {
        try {
            setLabel([]);
            setCharge([]);
            setDischarge([]);

            switch (view) {
                case 'day':
                    sysData.map(row => {
                        setCharge(prevList => [...prevList, row.pv_power]);
                        setDischarge(prevList => [...prevList, row.pv_power]);
                        setLabel(prevList => [...prevList, row.time]);
                    });

                    break;

                case 'month':
                    const byMonthFilter = sysData.reduce((acc, item) => {
                        const existingItem = acc.find((el) => el.date === item.date);
                        if (existingItem) {
                            existingItem.sys_value += parseFloat(item.pv_power);
                            existingItem.cons_value += parseFloat(item.pv_power);
                        } else {
                            acc.push({ date: item.date, sys_value: item.pv_power, cons_value: item.pv_power });
                        }
                        return acc;
                    }, []);

                   byMonthFilter.map(row => {
                    setCharge(prevList => [...prevList, row.sys_value]);
                    setDischarge(prevList => [...prevList, row.cons_value]);
                        setLabel(prevList => [...prevList, row.date]);
                    });
                    
                    break

                case 'year':
                    return;

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
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Charge-Discharge Time',
                font: {
                    size: 24,
                }
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'x'
                },
                zoom: {
                    pinch: {
                        enabled: true       // Enable pinch zooming
                    },
                    wheel: {
                        enabled: true       // Enable wheel zooming
                    },
                    mode: 'x',
                }
            }
        },
    };

    const labels = label;

    const data = {
        labels,
        datasets: [
            {
                label: 'Charging',
                data: charge,
                backgroundColor: 'rgba(22, 160, 133, 1)',
            },
            {
                label: 'Discharging',
                data: discharge,
                backgroundColor: 'rgba(207, 0, 15, 1)',
            },
        ],
    };

    return <Bar options={options} data={data} />;
};

export default ChargingChart;