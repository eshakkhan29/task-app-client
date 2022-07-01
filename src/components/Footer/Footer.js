import React from 'react';

const Footer = () => {
    return (
        <footer className='h-20 bg-gray-200 fixed bottom-0 w-full'>
            <div className='h-full flex items-center justify-center'>
                <p className='text-gray-600'>&copy; All Right Reserve | {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;