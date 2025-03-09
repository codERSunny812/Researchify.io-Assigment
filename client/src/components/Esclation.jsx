import React, { useEffect, useState } from "react";
import { FcMediumPriority } from "react-icons/fc";

const Esclation = () => {
  const [escalations, setEscalations] = useState([]);

  useEffect(() => {
    const fetchEscalations = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URI}/api/info/getEscalData`
        );
        const result = await response.json();
        if (result.success) {
          setEscalations(result.data);
        }
      } catch (error) {
        console.error("Error fetching escalations:", error);
      }
    };

    fetchEscalations();
  }, []);

  return (
    <div className="border bg-white p-4 rounded-3xl shadow-md w-full text-center sm:text-left">
      <h2 className="text-xl md:text-2xl font-mono flex items-center gap-1 mt-1 justify-center sm:justify-start">
        Escalations
        <FcMediumPriority />
      </h2>
      <ul className="mt-4 space-y-2">
        {escalations.map((escalation) => (
          <li key={escalation._id} className="p-2 bg-gray-200 rounded-md text-sm md:text-base">
            <p className="font-extralight capitalize underline">{escalation.firstText}</p>
            <h1 className="capitalize text-lg">{escalation.secondText} ..</h1>
            <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-start">
              <img src={escalation.imageUrl} alt="" className="h-6 w-6 rounded-full" />
              <small className="text-gray-600 capitalize">{escalation.userName}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Esclation;
