import React from "react";
import UserInfo from "./UserInfo";
import Base from "./Base";

const Home = () => {
  return (
    <div className="w-full md:overflow-hidden  md:h-screen bg-linear-to-l bg-[#f9faea] pt-3 flex flex-col">
      <UserInfo />
      <Base />
    </div>
  );
};

export default Home;
