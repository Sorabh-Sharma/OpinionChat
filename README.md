# 💬 OP Chat

A modern real-time chat application built with the MERN stack that enables seamless one-to-one messaging with secure authentication and a clean, responsive user interface.

---

## 🚀 Features

- 🔐 User Authentication (JWT)
- 👤 User Registration & Login
- 💬 Real-time One-to-One Chat
- 🟢 Online/Offline User Status
- 📩 Instant Message Delivery
- 🔒 Protected Routes
- 📱 Responsive Design
- 🌙 Clean & Modern UI
- ⚡ Fast and Lightweight

---

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- Socket.IO
- JWT Authentication
- Bcrypt

### Database
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
OP-Chat/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── sockets/
│   ├── config/
│   └── server.js
│
├── README.md
└── package.json
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/op-chat.git
```

```bash
cd op-chat
```

---

### Install Frontend Dependencies

```bash
cd client
npm install
```

---

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

---

## ▶️ Run the Project

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

---

## 📸 Screenshots

Add screenshots of:

- Login Page
- Register Page
- Chat Dashboard
- Chat Window
- Responsive Mobile View

---

## 📌 Future Improvements

- Group Chats
- Voice Messages
- Video Calling
- Read Receipts
- Typing Indicator
- Message Reactions
- File & Image Sharing
- Push Notifications
- Message Search
- End-to-End Encryption

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sorabh Sharma**

If you found this project useful, don't forget to ⭐ the repository!
