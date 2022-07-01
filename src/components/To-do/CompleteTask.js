import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { TiDeleteOutline } from 'react-icons/ti';

const CompleteTask = ({ task, handelDelete }) => {
    const { taskDetails, title, _id } = task
    return (
        <div>
            <div className='py-3 shadow-md mb-5 p-2 lg:px-6'>
                <div className='flex justify-between'>
                    <div>
                        <div className='flex items-center'>
                            <h1 className='text-3xl text-gray-500 line-through'>{title}</h1>
                            <p className='ml-2'><FaCheckCircle className='text-green-600 inline text-2xl lg:ml-3' /></p>
                        </div>
                        <p className='text-gray-500 mt-2'>{taskDetails}</p>
                    </div>
                    <div>
                        <button onClick={() => handelDelete(_id)} className='text-2xl text-red-700 hover:text-red-400'><TiDeleteOutline /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompleteTask;