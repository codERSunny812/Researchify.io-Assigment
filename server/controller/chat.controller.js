import Chat from "../models/conversation.model.js";


export const chatController = async(req,res)=>{

    console.log(req.body)

    //checking for the request type

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }


    //checking for the request body
    if (!req.body) {
        return res.status(400).json({ error: "Message is required" });
    }

    const { conversation } = req.body;

    // api call to groq api
    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions',{
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.GRQ_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama3-8b-8192",
                messages: [{ 
                    role: "user", 
                    content: conversation 
                }],
            })
        })


        const data = await response.json();
       

        // Extract AI response
        const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't understand that.";

        // Save chat to MongoDB
        const newChat = new Chat({
            userMessage: conversation,
            botReply: reply,
        });

        await newChat.save();

        res.status(200).json({ reply });
    } catch (error) {
        console.error("Error calling LLM:", error);
        res.status(500).json({ error: "Failed to fetch response" });
    }
}