import React from 'react'
import Menu from './Menu'
import Aside from './Aside'

const Base = () => {
  return (
   <div className=" w-full h-screen  flex  px-16 py-3 ">
    <Menu/>
    <Aside/>
   </div>
  )
}

export default Base