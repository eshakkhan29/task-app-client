import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FiLogOut } from 'react-icons/fi';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <header>
            <div className='flex flex-col lg:flex-row items-center justify-between py-7'>
                <div className='flex items-center'>
                    <h1 className='font-bold text-4xl text-green-600'>My <span className='text-blue-600'>Task</span></h1>
                    {user &&
                        <div className='flex items-center ml-20 lg:hidden'>
                            <img className='w-10 h-10 rounded-full mr-3' src={user?.photoURL} alt="profile" />
                            <button onClick={() => signOut(auth)} className='lg:text-2xl text-red-700 font-medium border-red-600 hover:bg-green-600 hover:text-white hover:border-white border lg:mt-0 p-2 rounded-md'>Logout <FiLogOut className='inline text-2xl' /></button>
                        </div>
                    }
                </div>
                <div className='mt-5 flex lg:flex-row flex-col-reverse items-center lg:mt-0'>
                    <div>
                        <NavLink className='nav-link' to='/'>To-Do</NavLink>
                        <NavLink className='nav-link' to='/task'>Tasks</NavLink>
                        <NavLink className='nav-link' to='/Calender'>Calender</NavLink>
                        {!user &&
                            <NavLink className='nav-link' to='/login'>Login</NavLink>
                        }
                    </div>
                    <div className='lg:inline text-end'>
                        {
                            user &&
                            <div className='lg:block hidden'>
                                <div className='flex items-center'>
                                    <img className='w-10 h-10 rounded-full mr-3' src={user?.photoURL} alt="profile" />
                                    <button onClick={() => signOut(auth)} className='lg:text-2xl text-red-700 font-medium border-red-600 hover:bg-green-600 hover:text-white hover:border-white border lg:mt-0 p-2 rounded-md'>Logout <FiLogOut className='inline text-2xl' /></button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;