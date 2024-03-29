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
            axios.get(`https://script.google.com/macros/s/AKfycbxYrmz38u3vKaLcyKeKLS_aNjaFZDdPlwYNNROxYXGkCGv-eUWPXx--90SkWkSow-3f/exec?node=${reportFrom}`)
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
                return 'Empty battery';
            case 5:
                return 'LED is OFF during night-time';
            case 6:
                return 'Auto switch mode not working; LED is off';
            default:
                return;
        }
    }

    const formattedData = reportData.reverse().map(row => ({
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
                <button className={reportFrom === 'SL1' ? 'report-from-btn-active btn report-from-btn' : 'report-from-btn'} onClick={() => handleReportChange('SL1')}>SL1</button>
                <button className={reportFrom === 'SL2' ? 'report-from-btn-active btn report-from-btn' : 'report-from-btn'} onClick={() => handleReportChange('SL2')}>SL2</button>
                <button className={reportFrom === 'SL3' ? 'report-from-btn-active btn report-from-btn' : 'report-from-btn'} onClick={() => handleReportChange('SL3')}>SL3</button>

                {loading ? <button className='report-download-btn'>Loading Document...</button> :
                    reportData.length > 0 ?
                        <PDFDownloadLink document={<ReportPDF data={formattedData} node={reportFrom} generated={new Date().toLocaleString()} />} filename="Anomaly-Report">
                            <button className='btn report-download-btn generate'>Download Report</button>
                        </PDFDownloadLink> : <button className='report-download-btn'>No Report</button>
                }
            </div>

            <div className='anomaly-report-containter mt-5'>
                <h3 className='w-100 my-0 text-center'>Anomaly Report of {reportFrom}</h3>

                {loading ? <ReactLoading type={'spokes'} color={'#0f1b2a'} height={300} width={275} className='loading-component' /> : ''}
                <Suspense fallback={<ReactLoading type={'spokes'} color={'#0f1b2a'} height={300} width={275} className='loading-component' />}>
                    <div className='report-table-container mt-3'>
                        <table className='anomaly-report-table'>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Anomaly</th>
                                </tr>
                            </thead>
                            {loading ? <h4 className='mt-3'>Loading...</h4> :
                                <tbody>
                                    {formattedData.length !== 0 ? AnomalyTable : <h5 className='w-100 mt-3 text-align-center'>No anomaly detected.</h5>}
                                </tbody>
                            }
                        </table>
                    </div>
                </Suspense>
            </div>
        </div >
    )
}

export default Reports;