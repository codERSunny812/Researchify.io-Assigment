import React from "react";
import Group from "./Group";
import Task from "./Task";
import Esclation from "./Esclation";
import Insight from "./Insight";
import { useInsight } from "../hooks/CustomHook";

const Aside = () => {
  const { isMaximized, setIsMaximized } = useInsight();

  return (
    <div className="w-full h-full px-4 md:px-10">
      <div
        className={`min-h-screen flex flex-col ${isMaximized ? "h-screen" : "gap-5"
          }`}
      >
        {isMaximized ? (
          <Insight />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-7">
              <Group />
              <Task />
              <Esclation />
            </div>
            <Insight
              setIsMaximized={setIsMaximized}
              isMaximized={isMaximized}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Aside;
