import React from 'react'
import UserInfo from './UserInfo'
import Base from './Base'

const Home = () => {
  return (
    <div className="w-full  h-screen overflow-hidden bg-linear-to-l bg-[#f9faea] pt-3">
     <UserInfo/>
     <Base/>
    </div>
  )
}

export default Home