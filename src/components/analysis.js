import React from 'react';

function Analysis() {
  return (
    <div className='analysis-container'>
      <div className='d-flex align-items-center my-0'>
        <h3 className='my-0'>System Analysis</h3>
      </div>
      <div className='d-flex align-items-center mb-3'>
        <div className='analysis-date-picker w-50'>Date Picker</div>
        <div className='analysis-date-type w-100 d-flex justify-content-end gap-2'>
          <button className='btn date-type-btn'>Day</button>
          <button className='btn date-type-btn'>Month</button>
          <button className='btn date-type-btn'>Year</button>
          <button className='btn date-type-btn'>Total</button>
        </div>
      </div>
      <div className='analysis-section'>
        analysis charts
      </div>
    </div>
  )
}

export default Analysis;