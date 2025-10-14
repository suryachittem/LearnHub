# 🎓 Learnify – Full-Stack Learning Management System (LMS)

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![Deployed](https://img.shields.io/badge/Deployed%20On-Vercel%20%26%20Render-orange?style=flat-square)

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

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React.js (Vite), Redux Toolkit (RTK Query), Tailwind CSS, ShadCN UI, Lucide Icons |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Integrations** | Cloudinary, Stripe, JWT Auth |
| **Deployment** | Frontend – Vercel<br>Backend – Render |

---

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
## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

First, clone the project to your local machine and navigate into the main directory.

```bash
git clone [https://github.com/yourusername/learnify.git](https://github.com/yourusername/learnify.git)
cd learnify

```
### 2️⃣ Backend Setup

Now, let's get the backend server running. Navigate to the `backend` directory, install the dependencies, and start the server.

*This terminal will be busy running the backend.*

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
## Contact

For any inquiries, please contact Sreenu Yelesam at [srinuyelesam123@gmail.com](mailto:srinuyelesam123@gmail.com).
