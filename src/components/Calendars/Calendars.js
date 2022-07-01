import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Calendars = () => {
    const [date, setDate] = useState(new Date());
    const newDate = format(date, 'PP')
    return (
        <div className='lg:py-10 p-5'>
            <div>
                <div className=' py-5 flex items-center justify-center'>
                    <DayPicker className='shadow-md shadow-blue-200 rounded-lg p-5'
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        styles={{
                            caption: { color: '#3B82F6' }
                        }} />
                </div>
                <div className='py-5'>
                    <h1 className='text-2xl text-center my-10'>Today: {newDate}</h1>
                </div>
            </div>
        </div>
    );
};

export default Calendars;