import React, { useState, memo } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

function Analysis(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const minDate = new Date(2022, 10, 1);
  const [viewMode, setViewMode] = useState('day');
  const [dateFormat, setDateFormat] = useState({ month: 'long', day: 'numeric', year: 'numeric' });

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const handleChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };
  const CustomInput = ({ value, onClick }) => (
    <FaCalendarAlt className="date-picker-icon" onClick={onClick} />
  );
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    if (mode === 'month') {
      setDateFormat({ month: 'long', year: 'numeric' });
    } else if (mode === 'year') {
      setDateFormat({ year: 'numeric' });
    } else {
      setDateFormat({ month: 'long', day: 'numeric', year: 'numeric' });
    }
  };

  const options = dateFormat;
  const formattedDate = selectedDate.toLocaleDateString('en-US', options);

  const allData = props.data;
  //Filtered Data by Date
  const filterData = allData.filter(row => {
    const logDate = new Date(row.date);
    const month = logDate.getMonth();
    const day = logDate.getDate();
    const year = logDate.getFullYear();

    const fDate = new Date(formattedDate);
    const fMonth = fDate.getMonth();
    const fday = fDate.getDate();
    const fYear = fDate.getFullYear();

    switch (viewMode) {
      case 'day':
        return month === fMonth && day === fday && year === fYear;
      case 'month':
        return month === fMonth && year === fYear;
      case 'year':
        return year === fYear;
      default:
        return month === fMonth && day === fday && year === fYear;
    }
  });
  console.table(filterData);
  console.log(formattedDate);

  return (
    <div className='analysis-container'>
      <div className='d-flex align-items-center my-0'>
        <h3 className='my-0'>System Analysis</h3>
      </div>
      <div className='d-flex align-items-center'>
        <div className='analysis-date-picker w-50 py-1'>
          <div className='date-picker-container d-flex justify-content-start align-items-center gap-2'>
            <CustomInput onClick={toggleDatePicker} />
            <h6 className='my-0'>{formattedDate}</h6>
          </div>
        </div>     {/** DATE PICKER */}
        <div className='analysis-date-type w-100 d-flex justify-content-end gap-2'>
          <button className={viewMode === 'day' ? 'btn date-type-btn-active btn date-type-btn' : 'btn date-type-btn'} onClick={() => handleViewModeChange('day')}>Day</button>
          <button className={viewMode === 'month' ? 'btn date-type-btn-active btn date-type-btn' : 'btn date-type-btn'} onClick={() => handleViewModeChange('month')}>Month</button>
          <button className={viewMode === 'year' ? 'btn date-type-btn-active btn date-type-btn' : 'btn date-type-btn'} onClick={() => handleViewModeChange('year')}>Year</button>
        </div>
      </div>

      {showDatePicker && (
        <div className="calendar-container">
          <DatePicker
            selected={selectedDate}
            onChange={handleChange}
            showMonthYearPicker={viewMode === 'month'}
            showYearPicker={viewMode === 'year'}
            customInput={<></>}
            popperPlacement="top-start"
            inline
            minDate={minDate}
            maxDate={new Date()}
          />
        </div>
      )}

      <div className='analysis-section mt-3'>
        {/******* ENERGY CHART ***************************************************/}
        <div className='energy-chart-section'>
          <div className='energy-chart'>
            Energy Chart
          </div>
          <div className='energy-chart-label d-flex justify-content-between'>
            <p>System Generate: </p>
            <p>Consumption: </p>
          </div>
        </div>
        {/******* CHARGING CHART **************************************************/}
        <div className='charging-chart-section'>
          <div className='charging-chart'>
            Energy Chart
          </div>
          <div className='charging-chart-label d-flex justify-content-between'>
            <p>Charging Time</p>
            <p>Discharging Time</p>
          </div>
        </div>
        {/******* ENERGY ANALYSIS CHART COMBINED **********************************/}
        <div className='energy-analysis-section mb-4'>
          Energy Analysis Chart
        </div>
        {/******* BATTERY LEVEL ANALYSIS CHART ************************************/}
        <div className='battery-analysis-section'>
          Battery Level Chart
        </div>
      </div>
    </div>
  )
}

export default memo(Analysis);