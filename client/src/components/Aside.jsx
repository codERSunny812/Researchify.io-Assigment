import React from 'react'
import Group from './Group'
import Task from './Task'
import Esclation from './Esclation'
import Insight from './Insight'

const Aside = () => {
  return (
    <div className="w-full h-full ">
          <div className="px-10   min-h-screen flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-6">
                <Group/>
                <Task/>
                <Esclation/>
              </div>
              <Insight/>
          </div>
    </div>
  )
}

export default Aside