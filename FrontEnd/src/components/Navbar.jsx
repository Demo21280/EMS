import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-white flex justify-between items-center px-6 shadow-sm">
      
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full border-2 border-sky-600"
        />
        <span className="text-gray-700 font-medium">
          Valerie Luna
        </span>
      </div>

      <button className='bg-sky-600 hover:bg-sky-700 text-base font-medium text-white px-6 py-2 rounded-lg transition-colors'>
        <Link to="/">Login</Link>
      </button>

    </div>
  );
};

export default Navbar;