import React from 'react';
import { BsCheck2All, BsTrashFill } from 'react-icons/bs';

const CompleteTask = ({ task, handelDelete }) => {
    const { taskDetails, title, _id } = task
    return (
        <div>
            <div className='py-3 shadow-md mb-5 lg:px-6'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-3xl text-gray-500'>{title}</h1>
                        <p className='text-gray-500 mt-2'>{taskDetails}</p>
                    </div>
                    <div>
                        <button onClick={() => handelDelete(_id)} className='text-2xl text-red-700 hover:text-red-400'><BsTrashFill /></button>
                        <p className='text-1xl text-gray-600'>Complete <BsCheck2All className='text-green-500 inline text-3xl lg:ml-3' /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompleteTask;