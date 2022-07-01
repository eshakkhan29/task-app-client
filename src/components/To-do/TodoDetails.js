import React, { useState } from 'react';
import { RiEdit2Line } from 'react-icons/ri';
import { BsTrashFill } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const TodoDetails = ({ task, refetch, setReFetch, handelDelete }) => {
    const [user] = useAuthState(auth);
    const { taskDetails, title, date, _id } = task
    const [edit, setEdit] = useState(false);

    const handelCheck = event => {
        if (event.target.checked === true) {
            const taskStatus = "true";
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
                        toast.success("Your Task is Completed", {
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
    }
    const handelUpdate = (event) => {
        event.preventDefault()
        const email = user.email;
        const title = event.target.title.value;
        const taskDetails = event.target.task.value;
        const date = event.target.date.value;
        const data = { title, taskDetails, date, email }
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
                    setEdit(!edit)
                    toast.success("Your Task is Updated", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setReFetch(!refetch)
                }
            })
        event.target.reset();
    }

    return (
        <>
            <div className='flex items-center justify-between py-3 mb-5 px-4 shadow-md shadow-blue-200 rounded-lg'>
                <div>
                    <div>
                        <div className='flex items-center'>
                            <div className='mr-3'>
                                <input onClick={handelCheck} type="checkbox" name='done' className=" w-5 h-5" />
                            </div>
                            <div>
                                <h1 className='text-3xl'>{title}</h1>
                                <span className='text-red-700 font-semibold   '>{date}</span>
                            </div>
                        </div>
                        <p className='text-black-600 mt-2'>{taskDetails}</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <button onClick={() => setEdit(!edit)} className='mb-5 text-2xl text-green-600 hover:text-green-400'> <RiEdit2Line /> </button>
                    <button onClick={() => handelDelete(_id)} className='text-2xl text-red-700 hover:text-red-400'><BsTrashFill /></button>
                </div>
            </div>
            {edit &&
                <div>
                    <form onSubmit={handelUpdate}>
                        <label className="relative block">
                            <input className="placeholder:italic placeholder:text-slate-500 block bg-white w-full border border-blue-500 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Type your task title" type="text" name="title" defaultValue={title} />
                        </label>
                        <label className="relative block">
                            <textarea className="mt-4 placeholder:italic placeholder:text-slate-500 block bg-white w-full border border-blue-500 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Type your task description" type="text" name="task" defaultValue={taskDetails} />
                        </label>
                        <label className="relative block">
                            <input className="mt-4 placeholder:italic placeholder:text-slate-500 block bg-white w-full border border-blue-500 rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Type your task description" type="text" name="date" defaultValue={date} />
                        </label>
                        <input className='btn btn-primary mt-2' type="submit" value="Save" />
                    </form>
                </div>
            }
        </>
    );
};

export default TodoDetails;