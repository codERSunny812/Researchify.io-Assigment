# Researchify . io

### This is the backend documentation for this project

## 🛠️ API Endpoints

### 🔹 Check Server Status

**GET**  

```bash
https://researchify-io-assigment.onrender.com
```

---

### 🔹 User Authentication

#### 📝 User Sign Up

**POST**  

```bash
https://researchify-io-assigment.onrender.com/api/auth/signup
```

**Body (JSON)**  

```bash
{
    "name": "sunny",
    "email": "sushil812.dev@gmail.com",
    "password": "sunnynjr"
}
```

#### 🔑 User Sign In

**POST**  

```bash
(https://researchify-io-assigment.onrender.com/api/auth/signin
```

**Body (JSON)**

```bash
{
    "email": "sushil812.dev@gmail.com",
    "password": "sunnynjr"
}
```

----------

### 🔹 Chat API (LLM Interaction)

#### 💬 Send Message to LLM

**POST**  

```bash
https://researchify-io-assigment.onrender.com/api/chat/message
```

**Body (JSON)**

```json
{
   "conversation": "teach me about indo china relation"
}
```

----------

### 🔹 Data Management APIs

#### 📌 Add Data to Group Model

**POST**  

```bash
https://researchify-io-assigment.onrender.com/api/info/group
```

**Body (JSON)**

```json
{
    "imageUrl": "hello.png",
    "text": "hello",
    "number": 2
}
```

#### 📌 Add Data to Task Model

**POST**  

```bash
(https://researchify-io-assigment.onrender.com/api/info/task
```

**Body (JSON)**

```json
{
    "text": "this is my new task"
}
```

#### 📌 Add Data to Escalation Model

**POST**  

```bash
https://researchify-io-assigment.onrender.com/api/info/esclation
```

**Body (JSON)**

```json
{
    "firstText": "this is the first text",
    "secondText": "this is the second text",
    "imageUrl": "sunny.png",
    "userName": "sunny"
}
```

----------

### 🔹 Retrieve Data APIs

#### 📌 Get Group Model Data

**GET**  

```bash
https://researchify-io-assigment.onrender.com/api/info/getGroupData
```

#### 📌 Get Task Model Data

**GET**  

```bash
https://researchify-io-assigment.onrender.com/api/info/getTaskData
```

#### 📌 Get Escalation Model Data

**GET**  

```bash
https://researchify-io-assigment.onrender.com/api/info/getEscalData
```
