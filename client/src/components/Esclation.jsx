import React, { useEffect, useState } from "react";
import { FcMediumPriority } from "react-icons/fc";

const Esclation = () => {
    const [escalations, setEscalations] = useState([]);
    

    useEffect(() => {
        const fetchEscalations = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/info/getEscalData"); // Update API URL
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
        <div className="border bg-white p-4 rounded-3xl shadow-md">
            <h2 className="text-2xl font-mono flex items-center gap-1 mt-1">
                Escalations 
                <FcMediumPriority/>
            </h2>
            <ul className="mt-4 space-y-2">
                {escalations.map((escalation) => (
                    <li key={escalation._id} className="p-2 bg-gray-200 rounded-md">
                        <p className="font-extralight  capitalize text-sm underline">{escalation.firstText}</p>
                        <h1 className="capitalize text-lg">{escalation.secondText} ..</h1>
                        <div className="flex gap-2 items-center">
                            <img src={escalation.imageUrl} alt="" className="h-6 w-6" />
                            <small className="text-gray-600 capitalize">{escalation.userName}</small>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Esclation;
