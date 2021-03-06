import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import CompleteTask from './CompleteTask';
import TodoDetails from './TodoDetails';

const Todo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [user] = useAuthState(auth);
    const [tasks, setTasks] = useState([]);
    const [refetch, setReFetch] = useState(false);
    const email = user?.email;
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://glacial-earth-77178.herokuapp.com/task?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                setIsLoading(false);
            })
    }, [refetch, email])
    const completeTask = tasks.filter(task => task.taskStatus === "true");
    const unCompleteTask = tasks.filter(task => task.taskStatus === "false");

    const handelDelete = (id) => {
        fetch(`https://glacial-earth-77178.herokuapp.com/task/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    setReFetch(!refetch)
                    toast.success("Your Task is Deleted", {
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

    if (isLoading) {
        return <Loading></Loading>
    }
    if (tasks.length === 0) {
        return <h2 className='text-4xl mt-10 text-gray-500 text-center'>You have no Task</h2>
    }


    return (
        <section className='py-10'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-1/2 p-5'>
                    <h1 className='text-2xl text-blue-500 font-semibold'>incomplete Task</h1>
                    <div>
                        {
                            unCompleteTask?.map(task => <TodoDetails refetch={refetch} setReFetch={setReFetch} key={task._id} task={task} handelDelete={handelDelete}></TodoDetails>)
                        }
                    </div>
                </div>
                <div className='lg:w-1/2 p-5'>
                    <h1 className='text-2xl text-green-600 font-semibold'>complete Task</h1>
                    <div className='pb-5'>
                        {
                            completeTask.map(cTask => <CompleteTask refetch={refetch} setReFetch={setReFetch} key={cTask._id} task={cTask} handelDelete={handelDelete}></CompleteTask>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Todo;