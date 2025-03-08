import React from 'react'

const Esclation = () => {
  return (
      <div className="border bg-white p-4 rounded-3xl shadow-md">
          <h2 className="text-lg font-bold flex items-center gap-1">
              Escalations <span className="text-yellow-500">⚠️</span>
          </h2>
          <ul className="mt-4 space-y-2">
              {[
                  { title: "Channel the playground is ..", user: "Sagar SK", color: "bg-red-300" },
                  { title: "There is an issue with this ..", user: "Alex", color: "bg-gray-200" },
              ].map((escalation, index) => (
                  <li key={index} className={`p-2 rounded-md ${escalation.color}`}>
                      <p className="font-semibold text-sm">{escalation.title}</p>
                      <small className="text-gray-600">{escalation.user}</small>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default Esclation