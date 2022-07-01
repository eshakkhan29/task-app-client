// import React from 'react';
// import { DayPicker, useInput } from 'react-day-picker';

// const CustomCalender = () => {
//     const { inputProps, dayPickerProps } = useInput({
//         defaultSelected: new Date(),
//         format: 'PP',
//         required: true
//     });
//     const footer = (
//         <form>
//             <input
//                 {...inputProps}
//                 name="date" className="text-2xl placeholder:text-black bg-white w-full border border-blue-400 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1"
//             />
//         </form>
//     );
//     return (
//         <>
//             <div>
//                 <DayPicker {...dayPickerProps}
//                     footer={footer} />
//             </div>
//         </>
//     )
// };

// export default CustomCalender;