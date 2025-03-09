
# 🚀 Full-Stack Application

## 📌 Overview

This is a **full-stack** web application featuring a **chat interface** powered by an **LLM API**, a **dashboard with group, task, and escalation management**, and **local chat history persistence**. The project is built using **React  for the frontend**, **Node.js & Express for the backend**, and a **cloud database**.

## 🎯 Features

- ✅ **Responsive Design** – Fully optimized for mobile, tablet, and desktop.
- ✅ **Chat Interface** – Send messages to an LLM and receive AI-generated responses.
- ✅ **Local Chat History** – Messages persist even after refreshing the page.
- ✅ **Dashboard** – Displays **Groups, Tasks, and Escalations** dynamically fetched from the backend.
- ✅ **Collapsible Sidebar Menu** – Toggle between full and minimized menu views.
- ✅ **Secure API Calls** – Backend routes handle API requests securely.
- ✅ **Authentication** – Users can log in and store personalized data.

---

## 🏗️ Tech Stack

### 🔹 Frontend

- **React.js** – Modern framework for React-based applications.
- **Tailwind CSS** – For styling and responsiveness.
- **React Icons** – For interactive UI elements.

### 🔹 Backend

- **Node.js & Express.js** – For handling API requests.
- **MongoDB (Atlas)** – Cloud database for storing groups, tasks, and chat history.

### 🔹 APIs & Libraries

- **Groq API** – Used for LLM-based chat responses.
- **dotenv** – For secure environment variables.
- **cors & express.json** – Middleware for API communication.

---

## 📂 Project Structure`

```bash
📦 project-root
 ┣ 📂 backend
 ┃ ┣ 📂 controllers
 ┃ ┃ ┣ chat.controller.js
 ┃ ┃ ┣ group.controller.js
 ┃ ┃ ┣ task.controller.js
 ┃ ┣ 📂 routes
 ┃ ┃ ┣ chat.routes.js
 ┃ ┃ ┣ group.routes.js
 ┃ ┃ ┣ task.routes.js
 ┃ ┣ server.js
 ┣ 📂 frontend
 ┃ ┣ 📂 components
 ┃ ┃ ┣ Home.jsx
 ┃ ┃ ┣ Menu.jsx
 ┃ ┃ ┣ Insight.jsx
 ┃ ┃ ┣ Group.jsx
 ┃ ┃ ┣ Task.jsx
 ┃ ┃ ┣ Esclation.jsx
 ┃ ┣ App.js
 ┃ ┣ index.js
 ┣ .env
 ┣ package.json
 ┣ README.md
```

## 🚀 Getting Started

### 🔹 Setup & Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/codERSunny812/Researchify.io-Assigment
   cd Researchify.io-Assigment 

2. **Install Dependencies** (For both backend & frontend)

    `npm install`

3. **Set Up Environment Variables** (`.env` file)

    ````bash
    VITE_BACKEND_URI=http://yourbackenduri:3000
    GRQ_API_KEY=your-groq-api-key
    MONGO_URI=your-mongodb-connection-string
    ```
    
4. **Run the Backend**

    ````
    cd backend
    npm start
    ```
    
5. **Run the Frontend**

    ```
    cd frontend
    npm run dev
    ```

6. **Access the App**
    - Open `http://localhost:5173` in your browser.

----------

## 🤝 Contributing

Feel free to fork this repository, raise issues, or submit pull requests! 🚀

----------

## 📜 License

This project is licensed under the **MIT License**.

----------

## 💬 Contact

For questions or collaborations, reach out to me at <sushil812.dev@gmail.com>.
