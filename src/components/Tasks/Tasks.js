import React from 'react';
import { DayPicker, useInput } from 'react-day-picker';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Tasks = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { inputProps, dayPickerProps } = useInput({
        defaultSelected: new Date(),
        format: 'PP',
        required: true
    });


    // add task
    const handelTaskAdd = (event) => {
        event.preventDefault()
        const title = event.target.title.value;
        const taskDetails = event.target.task.value;
        const taskStatus = 'false';
        const email = user.email;
        const date = inputProps.value;
        const data = { title, taskDetails, email, taskStatus, date }
        console.log(data);
        fetch("https://glacial-earth-77178.herokuapp.com/task", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success("Your Task is Added", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    if (user) {
                        navigate('/')
                    }
                }

            })

        event.target.reset();
    }

    // date 
    const footer = (
        <form>
            <input
                {...inputProps}
                name="date" className="text-2xl text-center placeholder:text-black bg-white w-full border border-blue-400 rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1"
            />
        </form>
    );

    return (
        <div className='lg:p-10 flex items-center flex-col lg:flex-row  py-20'>
            <div className='lg:w-1/2 flex items-center justify-center'>
                <div>
                    <DayPicker {...dayPickerProps}
                        footer={footer} />
                </div>
            </div>
            <div className='lg:w-1/2'>
                <h1 className='text-3xl text-green-600 py-4 uppercase font-semibold'>Add Task</h1>
                <form onSubmit={handelTaskAdd}>
                    <label className="relative block">
                        <input className="placeholder:italic placeholder:text-slate-500 block bg-white w-full border border-blue-400 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1 sm:text-sm" placeholder="Type your task title" type="text" name="title" required />
                    </label>
                    <label className="relative block">
                        <input className="mt-4 placeholder:italic placeholder:text-slate-500 block bg-white w-full border border-blue-400 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-600 focus:ring-green-600 focus:ring-1 sm:text-sm" placeholder="Type your task description" type="text" name="task" required />
                    </label>
                    <input className='btn btn-primary mt-3' type="submit" value="Add" />
                </form>
                <h2 className='text-1xl text-center'>Hit enter button to added task</h2>
            </div>
        </div>
    );
};

export default Tasks;