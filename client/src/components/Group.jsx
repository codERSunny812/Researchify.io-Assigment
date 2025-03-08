import React, { useEffect,useState } from 'react'

const Group = () => {
    const [groups, setGroups] = useState([]);

    useEffect(()=>{
     const fetchGroupData = async()=>{
         try {
             const resp = await fetch("http://localhost:3000/api/info/getGroupData")

             const data = await resp.json();

             if(data.success){
            console.log(data);
            setGroups(data.data)
             }

         } catch (error) {
            console.log("error in fetching the data",error)
         }
     }

     fetchGroupData();
    },[])
  return (
      <div className="border bg-white p-4 rounded-3xl shadow-md">
          <h2 className="text-2xl font-mono mt-1">Groups</h2>
          <ul className="mt-4 space-y-2">
              {
              groups.map((group) => (
                              <li
                                  key={group._id}
                                  className={`flex justify-between items-center p-2 rounded-md cursor-pointer hover:bg-gray-100  ${group.text === 'Sales' ? "bg-[#e639473f] " : ''}`}
                              >
                                <div className="flex items-center gap-2">
                          <img src={group.imageUrl} alt="" className='h-9 w-9 rounded-full' />
                          <span>{group.text}</span>
                                </div>
                                  <span className="border-2 border-gray-600 text-gray-700 text-sm px-2 py-1 rounded-full">
                                      {group.number}
                                  </span>
                              </li>
                          ))}
          </ul>
      </div>
  )
}

export default Group





