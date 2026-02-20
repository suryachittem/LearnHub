# 🎓 Learnify – Full-Stack Learning Management System (LMS)

> **Learnify** is a full-stack Learning Management System (LMS) built using the **MERN stack**.  
> It enables instructors to create and manage courses while allowing students to enroll, learn, and track progress — all within a clean, responsive, and secure environment.

---

## 🚀 Features

### 👨‍🏫 Instructor

- Create, update, and manage online courses
- Upload thumbnails and video lectures via **Cloudinary**
- Track student engagement and course analytics

### 👩‍🎓 Student

- Browse and purchase courses securely via **Stripe**
- Access enrolled courses and track learning progress
- Manage profile and view purchase history

### ⚙️ System

- **Role-based Authentication** using JWT (Instructor / Student)
- **Real-time API handling** with Redux Toolkit Query
- **Cloud Storage** for media via Cloudinary
- **Responsive UI** built with React, Tailwind CSS, and ShadCN UI
- **Dark mode support**

---

## 🏗️ Tech Stack

| Layer            | Technologies                                                                      |
| ---------------- | --------------------------------------------------------------------------------- |
| **Frontend**     | React.js (Vite), Redux Toolkit (RTK Query), Tailwind CSS, ShadCN UI, Lucide Icons |
| **Backend**      | Node.js, Express.js                                                               |
| **Database**     | MongoDB (Mongoose ODM)                                                            |
| **Integrations** | Cloudinary, Stripe, JWT Auth                                                      |
| **Deployment**   | Frontend – Vercel<br>Backend – Render                                             |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

First, clone the project to your local machine and navigate into the main directory.

```bash
git clone https://github.com/Sreenu-y/Learnify.git
cd learnify

```

### 2️⃣ Backend Setup

Now, let's get the backend server running. Navigate to the `backend` directory, install the dependencies, and start the server.

_This terminal will be busy running the backend._

```bash
cd backend
npm install
npm start
```

### 3️⃣ Frontend Setup

Open a **new terminal window**. From the root `learnify` directory, navigate into the `frontend`, install its dependencies, and start the development server.

```bash
# In your new terminal
cd frontend
npm install
npm run dev
```

### 4️⃣ Access the App

You're all set! With both the backend and frontend running, you can now view the application in your browser.

Open your browser and go to: **http://localhost:5173**

---

## 📁 Project Structure

```bash
├── client
    ├── .gitignore
    ├── README.md
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── jsconfig.json
    ├── package-lock.json
    ├── package.json
    ├── public
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── app
    │   ├── components
    │   ├── features
    │   ├── index.css
    │   ├── layout
    │   ├── lib
    │   ├── main.jsx
    │   └── pages
    └── vite.config.js
└── server
    ├── .gitignore
    ├── controllers
    ├── database
    ├── index.js
    ├── middlewares
    ├── models
    ├── package-lock.json
    ├── package.json
    ├── routes
    ├── uploads
    └── utils
```

## 🔐 Environment Variables

Create a `.env` file in the backend root with:

```env
PORT=8080
MONGO_URI=your_mongo_uri
SECRET_KEY=your_secret_key

# Cloudinary
CLOUD_NAME=your_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

---

## 🖂 Contact

For any inquiries, please contact Abdul Hanif Shaik at [shaikhanif2004@gmail.com](mailto:shaikhanif2004@gmail.com).
