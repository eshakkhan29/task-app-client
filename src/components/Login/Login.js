import React from 'react';
import './Login.css';
import { ImGooglePlus3 } from 'react-icons/im';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/')
    }
    return (
        <div className='h-96 flex items-center justify-center'>
            <div>
                <h1 className='text-3xl font-semibold my-4 text-center'>Login</h1>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary items-center flex'>login with Google <ImGooglePlus3 className='inline ml-2' /> </button>
            </div>
        </div>
    );
};

export default Login;