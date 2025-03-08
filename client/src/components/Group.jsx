import React from 'react'

const Group = () => {
  return (
      <div className="border bg-white p-4 rounded-3xl shadow-md">
          <h2 className="text-lg font-bold">Groups</h2>
          <ul className="mt-4 space-y-2">
              {[
                  { name: "Sales", count: 22, active: true },
                  { name: "Tech", count: 12 },
                  { name: "Design", count: 12 },
              ].map((group) => (
                  <li
                      key={group.name}
                      className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${group.active ? "bg-red-300" : "hover:bg-gray-100"
                          }`}
                  >
                      <span>{group.name}</span>
                      <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full">
                          {group.count}
                      </span>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default Group