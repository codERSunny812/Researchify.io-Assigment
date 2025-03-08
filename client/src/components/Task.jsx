import React from 'react'

const Task = () => {
  return (
      <div className="border bg-white p-4 rounded-3xl shadow-md">
          <h2 className="text-lg font-bold">Tasks</h2>
          <ul className="mt-4 space-y-2">
              {[
                  { title: "Finish the UI and ask Animesh", icon: "" },
                  { title: "Fix bugs 🔥", icon: "" },
                  { title: "Test the dev release to make", icon: "📦" },
              ].map((task, index) => (
                  <li key={index} className="p-2 bg-gray-100 rounded-md">
                      <p>{task.title}</p>
                      <small className="text-blue-500 cursor-pointer">view conversation</small>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default Task