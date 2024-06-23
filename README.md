# MERN Email Communication App

This is a MERN stack application that allows users to log in using Google OAuth, view their communication history, and send emails using the Postmark API. The application consists of a Node.js backend and a React frontend.

## Features

- **User Authentication**: Login using Google OAuth.
- **Communication History**: View sent and received emails.
- **Send Emails**: Compose and send emails using Postmark.
- **Email Templates**: Use Postmark templates for various email types.
- **Email Analytics**: Track opens, clicks, and unsubscribes.

## Prerequisites

- Node.js (v12.x or higher)
- MongoDB (local or Atlas)
- Google Cloud Platform account for OAuth credentials
- Postmark account for email service
- Git

## Setup Instructions

### Clone the Repository

```sh
git clone <repository_url>
cd repository_name

1. Backend Setup:
Navigate to the backend directory:
cd backend

2. Install backend dependencies:
npm install

3. Create a .env file in the backend directory:
touch .env

4. Add the following environment variables to the .env file:
PORT=5000
MONGO_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
POSTMARK_API_TOKEN=your_postmark_api_token
SESSION_SECRET=your_session_secret

5. Run the backend server:
node server.js


Frontend Setup
1. Navigate to the frontend directory:
cd ../frontend

2. Install frontend dependencies:
npm install

3. Run the frontend development server:
npm start

Perform Google cloud platform setup

Postmark setup

