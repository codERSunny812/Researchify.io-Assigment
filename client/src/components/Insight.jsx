import React from 'react'



const obj = [
    {
        id:1,
        title: "what are my tasks due today?",
        icon: "👨🏻‍💻"
    },
    {
        id:2,
        title: "what's happening with xyz client?",
        icon: "🫶"
    },
    {
        id:3,
        title: "who has been sick the most?",
        icon: "📦"
    }
]

const Insight = () => {
    const user = localStorage.getItem('user');
    const userName = JSON.parse(user).name;
  return (
      <div className="border h-[330px] bg-white px-6 py-2 rounded-3xl shadow-md flex flex-col gap-2">
          <div className="flex justify-between items-center">
              <div className="flex flex-col items-center">
                  <p className='font-medium text-lg'>Insights ✨</p>
                  <select className='outline-0 border border-gray-400 font-light text-sm capitalize px-5 py-1 rounded-lg'>
                    <option>all group</option>
                  </select>
              </div>
              
          </div>
          <h1 className="text-2xl font-semibold text-green-600 capitalize">Hi, {userName}.</h1>
          <p className="text-green-600 text-xl">How can I help you?</p>

          <div className="grid grid-cols-3 gap-1">
              {obj.map(
                  ({title,icon,id}) => (
                      <div key={id} className="p-3 border rounded-lg w-2/3">
                        <div className="">
                        <span className="ml-2">{icon}</span>
                        <p> {title}</p>
                        </div>
                         
                      </div>
                  )
              )}
          </div>

          <div className="flex items-center border p-1 rounded-lg">
              <input
                  type="text"
                  placeholder="Ask me anything about the group conversations!"
                  className="flex-grow p-2 outline-none"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">➤</button>
          </div>
      </div>
  )
}

export default Insight