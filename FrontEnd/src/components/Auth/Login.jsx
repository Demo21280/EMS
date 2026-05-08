import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider.jsx'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loginuser} = useContext(AuthContext);
    function submitHandler(e){
        e.preventDefault();
        handleLogin(email, password);
        loginuser(email);
        setEmail('');
        setPassword('');
    }


    return (
        <div className='flex h-120 screen items-center justify-center  to-sky-100 overflow-hidden'>
            <div className='border-2 border-sky-600 rounded-xl p-8 bg-white shadow-xl max-w-md w-full mx-4'>
                <h1 className='text-4xl font-bold text-sky-600 text-center mb-8'>Login</h1>
                <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-4'>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className='w-full outline-none bg-white border-2 border-sky-300 font-medium text-lg py-3 px-4 rounded-lg placeholder:text-gray-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 transition-all' type="text" placeholder='Enter your email' />
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className='w-full outline-none bg-white border-2 border-sky-300 font-medium text-lg py-3 px-4 rounded-lg placeholder:text-gray-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 transition-all' type="password" placeholder='Enter password' />
                    <button className='w-full mt-2 text-white border-none outline-none hover:bg-sky-700 font-semibold bg-sky-600 text-lg py-3 px-8 rounded-lg transition-colors'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login