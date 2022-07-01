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
            <div className='flex flex-col lg:flex-row items-center justify-between py-4'>
                <div>
                    <img src="" alt="" />
                    <h1 className='font-sans font-bold text-4xl text-green-600'>Task</h1>
                </div>
                <div className='mt-2 lg:mt-0'>
                    <NavLink className='nav-link' to='/'>To-Do</NavLink>
                    <NavLink className='nav-link' to='/task'>Tasks</NavLink>
                    <NavLink className='nav-link' to='/Calender'>Calender</NavLink>
                    <div className='lg:inline text-end'>
                        {
                            user ? <button onClick={() => signOut(auth)} className='text-3xl text-red-600 font-bold border-green-600 border mt-2 lg:mt-0 p-2 rounded-md'>Logout <FiLogOut className='inline text-2xl' /></button>
                                :
                                <NavLink className='nav-link' to='/login'>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;