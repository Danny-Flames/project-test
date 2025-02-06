
## GCCL Dashboard
🚀 Project Overview
This is an interview React.js TypeScript project built with Vite. It features state management using Redux Toolkit, data visualization with Recharts, and styling with Tailwind CSS.

## 🌍 Live Demo
[Deployed URL](https://gems-dashboard.vercel.app/auth/login)

## 📂 Repository
[GitHub URL](https://github.com/Danny-Flames/project-test.git)

## 📦 Installation & Setup
- 1️⃣ Clone the Repository

git clone https://github.com/Danny-Flames/project-test.git

- Navigate into the project

cd project-test

- 2️⃣ Install Dependencies

npm install

- 3️⃣ Set Up Environment Variables
Create a .env file in the root directory and all environment variables:

    - VITE_API_URL=https://jsonplaceholder.typicode.com
    - VITE_SECRETKEY=<in_the_submission_mail>
    - VITE_ENCRYPTION_IV=<in_the_submission_mail>

- 4️⃣ Start the Development Server

npm run dev

This runs the project on http://localhost:4000 by default.

## 🛠️ Technologies Used
- React.js (Vite)
- TypeScript
- Redux Toolkit (State Management)
- Recharts (Charts/Graphs)
- Tailwind CSS (Styling)
- Crypto-js (Encryption/Decryption)
- Axios (Data Fetching)

## 📌 Main Pages
This project consists of four main pages:

- Register: User registration with encrypted local storage.
- Login: User authentication with encrypted credential validation.
- Dashboard Analytics: Displays key metrics and charts.
- Dashboard Reports: Provides detailed data insights.

## 🔐 Authentication Flow (Register & Login)
- Register Page:
    - When a user fills in all fields and clicks the Register button, an API call is simulated using setTimeout to introduce a slight delay.
    - The user’s data is encrypted using Crypto-JS before being stored in localStorage as part of an encrypted users' array.
    - If the user enters an invalid email in the email field, an error message is displayed and the registered button will still be disabled.

- Login Page:
    - When a user enters their email and password, the encrypted data is retrieved from localStorage.
    - The data is then decrypted, and the system finds a matching user by email.
    - If a match is found, the credentials are validated to grant access.

## 📊 Dashboard Analytics (Data Handling & Filtering)
- No real-time API call is made on this page because the suggested public API (jsonplaceholder) does not provide relevant data for the charts.
- Instead, a local file in the project serves as a mock database, containing structured datasets.
- In the Redux thunk, data is retrieved from this file, but a 2000ms delay is introduced to simulate an API call before returning the response.
- The Redux store holds this data, which is then accessed in the Dashboard Analytics page to feed the charts.
- Two main filters are implemented:
    - Text Search Filter – Filters the data based on the user’s search term.
    - Date Filter – Filters chart data by selected date ranges.
- Clicking the "Report" button navigates to the Dashboard Reports page.

## 📋 Dashboard Reports (Real-Time API Call)
- On the Dashboard Reports page, a real-time API call is made to jsonplaceholder to retrieve a list of users.
- The retrieved data is stored in the Redux store and then accessed on this page.
- The data is then used to populate the table displayed on the Dashboard Reports page.

## 📌 Features
- ✅ Authentication & State Management with Redux Toolkit
- ✅ Interactive Charts using Recharts
- ✅ Responsive UI with Tailwind CSS
- ✅ API Data Fetching & Handling