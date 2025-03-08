import React from "react";
import { FaPen, FaUser, FaQuestion } from "react-icons/fa";
import { ImEnlarge2 } from "react-icons/im";
import { useInsight } from "../hooks/CustomHook";
import { IoSend } from "react-icons/io5";
import { useRef,useEffect,useState } from "react";

const obj = [
  { id: 1, title: "what are my tasks due today?", icon: <FaPen /> },
  { id: 2, title: "what's happening with xyz client?", icon: <FaUser /> },
  { id: 3, title: "who has been sick the most?", icon: <FaQuestion /> },
];

const Insight = () => {
  const { setIsMaximized, isMaximized } = useInsight();
  const user = localStorage.getItem("user");
  const userName = JSON.parse(user)?.name || "User";
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const chatContainerRef = useRef(null);


    // Load chat history from localStorage
    useEffect(() => {
        const storedConversation = localStorage.getItem("chatConversation");
        if (storedConversation) {
            setConversation(JSON.parse(storedConversation));
        }
    }, []);

    // Save conversation to localStorage whenever it updates
    useEffect(() => {
        if (conversation.length > 0) {
            localStorage.setItem("chatConversation", JSON.stringify(conversation));
        }
    }, [conversation]);

    // Function to send message
    const sendMessage = async () => {
        if (!message.trim()) return;

        const updatedConversation = [
            ...conversation,
            { role: "user", content: message },
        ];
        setConversation(updatedConversation);

        const response = await fetch("http://localhost:3000/api/chat/message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ conversation: message }),
        });

        const data = await response.json();

        setConversation([
            ...updatedConversation,
            { role: "bot", content: data.reply },
        ]);

        setMessage("");
    };

    useEffect(() => {
        setTimeout(() => {
            if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
        }, 100);
    }, [conversation, isMaximized,]);


  return (
    <div
      className={`border bg-white px-6 py-4 rounded-3xl shadow-md flex flex-col gap-2 transition-all duration-300 
            ${isMaximized ? "w-full h-5/6 justify-between" : "h-[335px]"}`}

    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <p className="font-medium text-lg">Insights ✨</p>
          {
            !isMaximized && <select className="outline-0 border border-gray-400 font-light text-sm capitalize px-5 py-1 rounded-lg">
              <option>all group</option>
            </select>
          }
         
        </div>

        {/* Expand/Collapse Button */}
        <div
          className="border border-gray-400 rounded-lg p-2 cursor-pointer"
          onClick={() => setIsMaximized((prev) => !prev)}
        >
          <ImEnlarge2 className="h-5 w-5 text-gray-900" />
        </div>
      </div>

      <div className={`flex flex-col  ${isMaximized ? "gap-4" : "gap-2"}`}>
        {
        conversation.length > 0 ? (
                  <div 
                      ref={chatContainerRef}
                      className={`overflow-auto p-2 border my-2 flex flex-col gap-2 transition-all duration-300 ${isMaximized ? "h-[calc(100vh-300px)]" : "h-44"
                          }`}
                      >
                      {conversation.map((msg, index) => (
                          <div key={index} className={`flex  ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                              <div
                                  className={`px-10 py-2   max-w-xs text-white ${msg.role === "user" ? "bg-green-500 rounded-l-2xl rounded-br-2xl" : "bg-gray-500 rounded-r-2xl rounded-bl-2xl"
                                      }`}
                              >
                                  {msg.content}
                              </div>
                          </div>
                      ))}
                  </div>

        ) : (
          <>
            <h1 className="text-2xl font-semibold text-green-600 capitalize">
              Hi, {userName}.
            </h1>
            <p className="text-green-600 text-xl">How can I help you?</p>

            {/* Insight Options */}
            <div className="grid grid-cols-3 gap-1">
              {obj.map(({ title, icon, id }) => (
                <div key={id} className="p-3 border rounded-lg w-2/3">
                  <span className="ml-1">{icon}</span>
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Input Box */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask me anything about the group conversations!"
            className="flex-grow p-2 outline-none border rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={sendMessage}
          >
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insight;
