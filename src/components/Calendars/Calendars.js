import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendars = () => {
    const [value, onChange] = useState(new Date());
    const date = value.toString();
    return (
        <div className='calender-section py-10 p-5'>
            <div>
                <div className='mx-auto text-center react-calendar flex items-center justify-center'>
                    <Calendar onChange={onChange} value={value} />
                </div>
                <div className='py-5'>
                    <h1 className='text-2xl text-center'>date: {date}</h1>
                </div>
            </div>
        </div>
    );
};

export default Calendars;