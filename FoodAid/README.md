# Screenshots

![alt text](<Screenshots/Screenshot from 2025-10-22 05-40-04.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-22 05-41-01.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-22 06-24-26.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-22 09-58-33.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-22 10-11-42.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-23 12-08-25.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-23 12-08-46.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-23 12-08-57.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-23 12-09-17.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-23 12-09-27.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-23 12-23-13.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-23 12-23-34.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-23 13-00-23.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-23 13-25-26.png>) 
![alt text](<Screenshots/Screenshot from 2025-10-23 22-10-01.png>) 
![alt text](<Screenshots/Screenshot from 2025-11-12 18-52-09.png>) 
![alt text](<Screenshots/Screenshot from 2025-11-12 18-52-36.png>) 
![alt text](<Screenshots/Screenshot from 2025-11-12 18-53-07.png>) 
![alt text](<Screenshots/Screenshot from 2025-11-12 18-53-19.png>) 
![alt text](<Screenshots/Screenshot from 2025-11-12 22-50-05.png>) 
![alt text](<Screenshots/Screenshot from 2025-11-12 22-51-20.png>)



# cd frontend
npm create vite@latest . -- --template react
npm install tailwindcss @tailwindcss/vite
npm install -D @tailwindcss/vite
npm install axios
npm install @clerk/clerk-react

npm run dev
👉 http://localhost:5173

# cd backkend
npm install
npm install express mongoose dotenv cors
npm install mongoose
npm install dotenv
nodeseed.js (sample donations inserted successfully)
create.env file
npm install -D nodemon
npm run dev/ npx nodemon server.js
✅ Server running on port 5000
MongoDB connected successfully

🛠 Tech Stack
Frontend
React 19 - UI library
Vite - Build tool and dev server
Tailwind CSS 4 - Utility-first CSS framework
Axios - HTTP client
Vitest - Testing framework
React Testing Library - Component testing utilities
Backend
Node.js - Runtime environment
Express 5 - Web framework
MongoDB - Database
Mongoose - ODM for MongoDB
Jest - Testing framework
Supertest - HTTP assertion library
MongoDB Memory Server - In-memory MongoDB for testing


Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v18 or higher)
npm (v9 or higher)
MongoDB (v6 or higher) - for production
Git - for version control
🚀 Installation
1. Clone the repository
git clone https://github.com/PLP-MERN-Stack-Development/Week-6-testing.git
cd Week-6-testing
2. Install Backend Dependencies
cd backend
npm install
3. Install Frontend Dependencies
cd ../frontend
npm install
4. Set up Environment Variables
Create a .env file in the backend directory:

cd ../backend
touch .env
Add the following variables:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-todo
NODE_ENV=development
🏃 Running the Application
Development Mode
Start Backend Server
cd backend
npm run dev
The backend server will start on http://localhost:5000

Start Frontend Development Server
cd frontend
npm run dev
The frontend will start on http://localhost:5173

Production Mode
Build Frontend
cd frontend
npm run build
Start Backend in Production
cd backend
npm start

FoodAid - MERN Stack Donation Portal

A web application for managing and tracking food donations. Donors can submit donations, and the system keeps a record of recent contributions. Built using the MERN stack (MongoDB, Express, React, Node.js) with authentication powered by Clerk.

Table of Contents

Project Structure

Tech Stack

Features

Prerequisites

Installation

Running the Application

API Endpoints

Environment Variables

Contributing

License

Learning Resources

Project Structure
FoodAid/
│
├─ backend/
│   ├─ config/           # Database and environment config
│   ├─ controllers/      # Request handlers for routes
│   ├─ models/           # Mongoose schemas
│   ├─ routes/           # Express routes
│   ├─ server.js         # Entry point for backend server
│   ├─ seed.js           # Sample data seeder
│   ├─ package.json
│   └─ package-lock.json
│
├─ frontend/
│   ├─ components/       # React components
│   ├─ public/           # Static assets
│   ├─ src/              # Main app source code
│   ├─ index.html
│   ├─ package.json
│   ├─ vite.config.js
│   └─ README.md
│
├─ Screenshots/          # Project screenshots
├─ README.md
|--.env.example

Tech Stack

Frontend: React, Vite, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (Atlas)

Authentication: Clerk

HTTP Client: Axios

Version Control: Git / GitHub

Features

User authentication (Sign in / Sign out) via Clerk

Submit food donations (name, amount, location, contact, message)

View recent donations in real-time

Responsive and user-friendly UI

Protected routes for submitting donations

Sample data seeding for testing

Prerequisites

Node.js (v18+ recommended)

npm or yarn

MongoDB Atlas account

Git

GitHub account (for repository hosting)

Installation

Clone the repository:

git clone https://github.com/<your-username>/FoodAid.git
cd FoodAid


Backend setup:

cd backend
npm install


Frontend setup:

cd ../frontend
npm install

Running the Application

Start backend server:

cd backend
npm run dev


Server runs on http://localhost:5000

Start frontend:

cd frontend
npm run dev


Frontend runs on http://localhost:5173 (or specified by Vite)

API Endpoints
Donations
Method	Endpoint	Description
GET	/api/donations	Get all donations
POST	/api/donations	Create a new donation

All POST requests require authentication via Clerk.

Environment Variables
Backend (backend/.env)
MONGO_URI=<your_mongodb_atlas_connection_string>
PORT=5000
CLERK_API_KEY=<your_clerk_api_key>      # Optional if backend verifies auth



Restart the dev server after changing .env files.

.env.example
Backend (backend/.env.example)
# MongoDB connection string
MONGO_URI=your_mongodb_atlas_connection_string

# Backend server port
PORT=5000

# Clerk API key (optional if backend needs to verify auth)
CLERK_API_KEY=your_clerk_api_key

Frontend (frontend/.env.example)
# Clerk publishable key for authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Backend API URL
VITE_BACKEND_URL=http://localhost:5000


Contributing

Fork the repository

Create a feature branch: git checkout -b feature/your-feature

Commit your changes: git commit -m "Add some feature"

Push to branch: git push origin feature/your-feature

Open a Pull Request

Please follow clean code practices and comment your code where necessary.

# deployment

# frontend
Vercel
deployment link: https://foodaidmernfinalproject-six.vercel.app/

# backend
Render
deploymnet link: https://foodaid-mern-final-project-4.onrender.com/

License

This project is licensed under the MIT License — see LICENSE
 for details.

Learning Resources

MERN Stack Tutorial

React Documentation

Express Documentation

MongoDB Atlas Guide

Clerk Authentication Docs

Tailwind CSS Documentation