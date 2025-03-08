import React, { useEffect, useState } from "react";

const Task = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/info/getTaskData"); // Update API URL
                const result = await response.json();
                if (result.success) {
                    setTasks(result.data);
                }
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div className="border bg-white p-4 rounded-3xl shadow-md">
            <h2 className="text-2xl font-mono mt-1">Tasks</h2>
            <ul className="mt-4 space-y-2">
                {
                tasks.map((task) => (
                    <li key={task._id} className={`p-2  rounded-md ${task.text === "finish bugs" ? "bg-yellow-200" : "bg-gray-100"}  `}>
                        <p className="capitalize">{task.text}</p>
                        <small className="text-gray-500 cursor-pointer underline">View conversation</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task;
