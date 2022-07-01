import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';

const CompleteTask = ({ task, refetch, setReFetch, handelDelete }) => {
    const { taskDetails, title, date, _id } = task

    const handelUnCheck = () => {
        const taskStatus = "false";
        const exitingTask = { ...task }
        const { title, taskDetails, date, email } = exitingTask;
        const data = { title, taskDetails, email, date, taskStatus }
        fetch(`https://glacial-earth-77178.herokuapp.com/task/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    setReFetch(!refetch)
                    toast.success("Your Task is reassign", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
    }
    return (
        <div>
            <div className='py-3 shadow-lg shadow-green-100 rounded-lg mb-6 p-2 lg:px-6'>
                <div className='flex justify-between'>
                    <div>
                        <div className='flex'>
                            <p onClick={handelUnCheck} className='mr-3'><FaCheckSquare className='text-green-600 hover:text-green-400 cursor-pointer inline text-2xl' /></p>
                            <div>
                                <h1 className='text-2xl text-gray-500 line-through'>{title}</h1>
                                <span className='text-gray-500 font-semibold'>{date}</span>
                            </div>
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