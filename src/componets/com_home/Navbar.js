// src/components/Navbar.js
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
  const handelLogOut = ()=>{
     localStorage.removeItem("authToken");
    navigate("/Logein");
  }

  return (
    <>
     <nav className="bg-gray-800 p-4 flex justify-between">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="text-white active fs-4 hover:bg-gray-600 px-4 py-2 rounded">Home</Link>
        </li>
        { localStorage.getItem("authToken")?
         <li>
          <Link to="/MayOrder" className="text-white active fs-4 hover:bg-gray-600 px-4 py-2 rounded">MayOrder</Link>
        </li>:
        <div></div>
        }
        
      </ul>
      <div className='flex gap-1'>
        {
        !(localStorage.getItem("authToken"))?
        <div className='flex gap-2'>
        <Link to="/SignUp" className="bg-white p-4 text-gray-800 hover:bg-gray-600  py-2 rounded">SignUp</Link>
        <Link to="/Logein" className="bg-white p-4 text-gray-800 hover:bg-gray-600 py-2 rounded">LogeIn</Link>
        </div>
        :
        <div className='flex gap-3  justify-center align-middle'>
        <button className="bg-white p-4 h-11 text-green-600 hover:bg-gray-600  py-2 rounded" >AddCard+</button>
        <button className="bg-white p-4 h-11 text-red-500 hover:bg-gray-600  py-2 rounded" onClick={handelLogOut} >LogOut</button>
        </div>
        }
        </div>
    </nav>
    </>
  );
};

export default Navbar;
