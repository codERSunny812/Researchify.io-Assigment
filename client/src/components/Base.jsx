import React from "react";
import Menu from "./Menu";
import Aside from "./Aside";

const Base = () => {
  return (
    <div className=" w-full md:h-screen md:overflow-hidden  flex  px-10 py-3">
      <Menu />
      <Aside />
    </div>
  );
};

export default Base;


