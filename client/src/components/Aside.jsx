import React from 'react';
import Group from './Group';
import Task from './Task';
import Esclation from './Esclation';
import Insight from './Insight';
import { useInsight } from '../hooks/CustomHook';

const Aside = () => {

  const { isMaximized, setIsMaximized } = useInsight();


  return (
    <div className="w-full h-full">
      <div className={`px-4 md:px-10 min-h-screen flex flex-row md:flex-col ${isMaximized ? "h-screen justify-center" : "flex-col gap-5"}`}>
        {isMaximized ? (
          <Insight  />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              <Group />
              <Task />
              <Esclation />
            </div>
            <Insight setIsMaximized={setIsMaximized} isMaximized={isMaximized} />
          </>
        )}
      </div>
    </div>
  );
};

export default Aside;
