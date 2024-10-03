
Serenova is a work-life balance web application designed to help users manage tasks, detect stress levels using AI, and provide relaxation techniques to promote mental well-being. It integrates task management and stress detection features in a simple, user-friendly interface.

Features
Task Management: Organize and manage daily tasks with ease.
AI-Based Stress Detection: Automatically monitor and analyze stress levels based on user activities.
Relaxation Techniques: Access personalized relaxation suggestions to reduce stress and maintain balance.

Table of Contents
Features
Installation
Usage
Contributing
License

Installation

Prerequisites
Before starting, ensure you have the following installed on your machine:

PHP (>= 7.3)
Composer
Node.js (>= 12.x)
npm
MySQL (or any other supported database)
Git

Link Machine Learning
https://github.com/ghazafm/stress-checker-model.git

Backend (Laravel)

Clone the repository:
git clone https://github.com/your-username/serenova.git
cd serenova

Install PHP dependencies:
composer install

Configure the environment:
Copy the .env.example file to create your .env file:
cp .env.example .env

Set your database credentials in the .env file:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=serenova
DB_USERNAME=root
DB_PASSWORD=

Generate the application key:
php artisan key:generate

Run database migrations:
php artisan migrate

Run the backend server:
php artisan serve

Frontend (Next.js)

Navigate to the frontend directory:
cd frontend

Install Node.js dependencies:
npm install

Run the Next.js development server:
npm run dev

The app will be running at http://localhost:3000.

Combined Run

To run both backend and frontend, you can open two terminal windows:

In the first terminal window, run the Laravel backend with:
php artisan serve

In the second terminal window, navigate to the frontend and run:
cd frontend
npm run dev

Usage

Once both the backend and frontend servers are running, you can access Serenova at http://localhost:3000.

Use the Task Management feature to plan your day.
Check your stress levels with the Stress Checker powered by AI.
Access Relaxation Techniques to keep stress in balance.

Contributing

If you wish to contribute to Serenova, feel free to create pull requests or raise issues in the repository. We welcome all contributions to improve the platform.

License

This project is licensed under the MIT License. See the LICENSE file for more details.
