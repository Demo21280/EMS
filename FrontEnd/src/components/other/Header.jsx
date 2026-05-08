import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider.jsx'

const Header = ({ changeUser, user }) => {
  // const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  function logoutHandler() {
    localStorage.setItem("loggedInUser", '');
    localStorage.setItem("loggedInAdmin", '');
    changeUser(null);
    setTimeout(() => {
  window.location.reload();
}, 50); 

  }

  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl text-gray-700'> <span className='text-3xl font-bold text-gray-800'>{user} 👋</span></h1>
        <button className='bg-sky-600 hover:bg-sky-700 text-base font-medium text-white px-6 py-2 rounded-lg transition-colors' onClick={logoutHandler}>Log Out</button>
    </div>
  )
}

export default Header