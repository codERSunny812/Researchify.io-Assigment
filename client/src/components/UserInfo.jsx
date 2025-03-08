import React from 'react'
import houseIcon  from '../assets/house.svg'
import officeIcon from '../assets/office.svg'
import handIcon from '../assets/shakinghands.svg'
import superheroIcon from '../assets/superheroes.svg'
import userIcon from '../assets/man.svg'

const UserInfo = () => {
  //getting the data from the local storage

    const user = localStorage.getItem('user');
    const userName = JSON.parse(user).name;

  return (
   <div className="w-full flex items-center justify-center">
    <div className="border-black border flex items-center justify-between  rounded-3xl  px-12 py-3 w-11/12 bg-white">

        <div className="left flex items-center">
            <div className="profile-img">
                      <img src={userIcon} alt="profile"
                      className='h-14 w-14 rounded-full'
                      />
            </div>

            <div className="profile-info pl-5 capitalize">
                <h1 className='text-2xl'>good morning, {userName}</h1>
                <p className='text-xs font-light pl-1'>hope your days goes organised?</p>
            </div>

        </div>

        <div className="right">
                 <div className="upper flex items-center justify-between ">
                      <div className="images flex gap-0 items-baseline justify-start">
                          <img src={houseIcon} alt="" className='h-8' />
                          <img src={officeIcon} alt="" className='relative right-2 h-8' />
                          <img src={handIcon} alt="" className='relative right-4 h-8' />
                          <img src={superheroIcon} alt="" className='relative right-6 h-8' />
                          <span className='relative right-8'>...</span>
                    </div>
                    

                      <div className="border-2 text-sm border-gray-400 rounded-lg p-1">
                        @ 23
                      </div>
                      

                    

                 </div>

                 <div className="lower font-normal text-sm ">
                    <p>You have recieved  <span className='text-red-500'>132</span> messages <br />
                    since you have last logged in
                    </p>
                 </div>
        </div>



   </div>
   </div>





    
  )
}

export default UserInfo