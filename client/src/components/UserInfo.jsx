import React from "react";
import houseIcon from "../assets/house.svg";
import officeIcon from "../assets/office.svg";
import handIcon from "../assets/shakinghands.svg";
import superheroIcon from "../assets/superheroes.svg";
import userIcon from "../assets/man.svg";

const UserInfo = () => {
  //getting the data from the local storage
  const user = localStorage.getItem("user");
  const userName = JSON.parse(user)?.name || "User";

  return (
    <div className="w-full flex items-center justify-center px-4 md:px-0">
      <div className="border-black border flex flex-col md:flex-row items-center justify-between rounded-3xl px-6 md:px-12 py-3 w-full md:w-11/12 bg-white">
        <div className="left flex items-center gap-4">
          <div className="profile-img">
            <img src={userIcon} alt="profile" className="h-12 w-12 md:h-14 md:w-14 rounded-full" />
          </div>
          <div className="profile-info text-center md:text-left capitalize">
            <h1 className="text-xl md:text-2xl">Good morning, {userName}</h1>
            <p className="text-xs md:text-sm font-light">Hope your day goes organized?</p>
          </div>
        </div>

        {/* Hide right section on mobile */}
        <div className="right hidden md:block">
          <div className="upper flex items-center justify-between">
            <div className="images flex gap-2 items-baseline justify-start">
              <img src={houseIcon} alt="" className="h-6 md:h-8" />
              <img src={officeIcon} alt="" className="h-6 md:h-8" />
              <img src={handIcon} alt="" className="h-6 md:h-8" />
              <img src={superheroIcon} alt="" className="h-6 md:h-8" />
            </div>

            <div className="border-2 text-sm border-gray-400 rounded-lg p-1">@ 23</div>
          </div>

          <div className="lower font-normal text-sm">
            <p>
              You have received <span className="text-red-500">132</span> messages <br /> since you last logged in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

