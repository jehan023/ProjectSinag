import React, { useState } from 'react';

function Reports() {
    const [reportFrom, setReportFrom] = useState('SL1');
    const handleReportChange = (from) => {
        setReportFrom(from);
    }

    return (
        <div className='reports-container'>
            <div className='d-flex justify-content-between align-items-center my-2'>
                <h3 className='my-0'>Reports</h3>

                <div className='report-btn-section d-flex justify-content-end gap-3'>
                    <button className={reportFrom === 'all' ? 'btn report-from-btn-active btn report-from-btn' : 'btn report-from-btn'} onClick={() => handleReportChange('all')}>ALL</button>
                    <button className={reportFrom === 'sl1' ? 'btn report-from-btn-active btn report-from-btn' : 'btn report-from-btn'} onClick={() => handleReportChange('sl1')}>SL1</button>
                    <button className={reportFrom === 'sl2' ? 'btn report-from-btn-active btn report-from-btn' : 'btn report-from-btn'} onClick={() => handleReportChange('sl2')}>SL2</button>
                    <button className={reportFrom === 'sl3' ? 'btn report-from-btn-active btn report-from-btn' : 'btn report-from-btn'} onClick={() => handleReportChange('sl3')}>SL3</button>
                </div>
            </div>
        </div>
    )
}

export default Reports;