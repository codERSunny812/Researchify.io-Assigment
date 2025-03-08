import React from 'react'
import { FaThLarge, FaTasks, FaChartLine, FaShoppingCart } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";



const Menu = () => {
    const navigate = useNavigate();


    // logout function 
    const handleLogout = () => {     
        localStorage.removeItem("token"); // Remove token from local storage
        localStorage.removeItem("user"); // Remove user from local storage
        alert("Logged out successfully!");
        navigate("/signin"); // Redirect to login page

    }

    // Menu Item Component
    function MenuItem({ icon, label, count, active }) {
        return (
            <li className={`flex items-center p-3 ${active ? "bg-lime-100" : "hover:bg-gray-100"} rounded-lg cursor-pointer`}>
                {icon} <span className="ml-2">{label}</span>
                {count && <span className="ml-auto bg-gray-200 text-xs px-2 py-0.5 rounded-full">{count}</span>}
            </li>
        );
    }

  return (
    // <div className="">
    <div className="border border-black rounded-3xl bg-white w-1/4 h-fit p-4 mb-2">     
              <div className="mt-3">
                <div className="flex items-center justify-between px-4">
                  <h3 className="text-lg font-semibold">Menu</h3>
                   <MdKeyboardDoubleArrowLeft className="text-2xl cursor-pointer"  />
                </div>
                  <ul className="space-y-2 my-10">
                      <MenuItem icon={<FaThLarge />} label="Dashboard" count={2} active />
                      <MenuItem icon={<FaChartLine />} label="Insights" />
                      <MenuItem icon={<FaTasks />} label="Tasks" />
                      <MenuItem icon={<FaShoppingCart />} label="Sales" />
                  </ul>

              <div className=" bg-[#EDFFC9] p-2 rounded-3xl">
                    <div className="flex items-center">
                        <h2 className='capitalize font-semibold'>upgrade plan</h2>
                        <BsArrowUpRightCircle className='mx-1.5 h-6 w-6 text-gray-700 bg-white rounded-full'/>
                    </div>
                    <p className='my-1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia ut accusantium vel temporibus.</p>
                  </div>
              </div>

          <ul className="mx-6  space-y-2 my-10 cursor-pointer">
              <li className='uppercase'>faqs</li>
              <li className='capitalize text-red-500' onClick={handleLogout}>log out</li>
          </ul>

    </div> 
    // </div>
  )
}

export default Menu