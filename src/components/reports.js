import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import ReportPDF from './PDFFile';
import { PDFDownloadLink } from "@react-pdf/renderer";

function Reports() {
    const [reportFrom, setReportFrom] = useState('SL3');
    const [reportData, setReportData] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleReportChange = (from) => {
        setReportFrom(from);
    }

    const callAnomalyAPI = () => {
        try {
            setLoading(true);
            axios.get(`https://script.google.com/macros/s/AKfycbwpeVblPl-BktxtxjY_F05PQd_1oRL0fkUjpQ4RKlZIcYOo7YX0NpqYbAd2l1_jLZY5/exec?node=${reportFrom}`)
                .then(response => {
                    setReportData(response.data);
                }).catch(error => {
                    setError(error);
                }).finally(() => {
                    setLoading(false);
                });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (reportFrom) {
            callAnomalyAPI();
        }
    }, [reportFrom]);

    const AnomalyType = (type) => {
        switch (type) {
            case 1:
                return 'LED is ON during daytime';
            case 2:
                return 'Auto switch mode not working';
            case 3:
                return 'Solar panel no output during daytime';
            case 4:
                return 'Battery is drained fast; empty battery at night-time';
            case 5:
                return 'LED is OFF during night-time';
            default:
                return;
        }
    }

    const formattedData = reportData.map(row => ({
        date: row[0],
        time: row[1],
        anomaly: parseFloat(row[2])
    }));

    const AnomalyTable = formattedData.map((anomaly, index) =>
        <tr key={index}>
            <td>{anomaly.date}</td>
            <td>{anomaly.time}</td>
            <td>{AnomalyType(anomaly.anomaly)}</td>
        </tr>
    );

    return (
        <div className='reports-container'>
            <div className='report-btn-section'>
                <button className={reportFrom === 'SL1' ? 'btn report-from-btn-active btn report-from-btn' : 'btn report-from-btn'} onClick={() => handleReportChange('SL1')}>SL1</button>
                <button className={reportFrom === 'SL2' ? 'btn report-from-btn-active btn report-from-btn' : 'btn report-from-btn'} onClick={() => handleReportChange('SL2')}>SL2</button>
                <button className={reportFrom === 'SL3' ? 'btn report-from-btn-active btn report-from-btn' : 'btn report-from-btn'} onClick={() => handleReportChange('SL3')}>SL3</button>

                {loading ? <button className='report-download-btn'>Loading Document...</button> :
                    reportData.length > 0 ?
                        <PDFDownloadLink document={<ReportPDF data={formattedData} node={reportFrom} generated={new Date().toLocaleString()} />} filename="Anomaly-Report">
                            <button className='btn report-download-btn generate'>Download Report</button>
                        </PDFDownloadLink> : <button className='report-download-btn'>No Report</button>
                }
            </div>

            <div className='anomaly-report-containter mt-3'>
                <h3 className='w-100 my-0 text-center'>Anomaly Report of {reportFrom}</h3>

                {loading ? <ReactLoading type={'spokes'} color={'#0f1b2a'} height={300} width={275} className='loading-component' /> : ''}
                <Suspense fallback={<ReactLoading type={'spokes'} color={'#0f1b2a'} height={300} width={275} className='loading-component' />}>
                    <table className='anomaly-report-table mt-3'>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Anomaly</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formattedData.length > 0 ? AnomalyTable : <h5 className='w-100 mt-3 text-align-center'>No data available.</h5>}
                        </tbody>
                    </table>
                </Suspense>
            </div>
        </div >
    )
}

export default Reports;