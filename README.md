# UrbanX

A full-stack web application for urban water management and awareness.

## Project Structure

```
urbanx/
├── backend/          # Node.js/Express backend
│   ├── controllers/  # Route controllers
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── database/     # Database configuration
│   └── utils/        # Utility functions
├── frontend/         # React frontend
│   ├── public/       # Static files
│   └── src/          # React source code
│       └── components/
└── package.json      # Root package.json
```

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Nodemailer for emails

### Frontend
- React.js
- Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/sri11223/urbanX.git
cd urbanX
```

2. Install backend dependencies
```bash
npm install
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```

4. Create a `.env` file in the root directory with:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

5. Run the development server
```bash
# Backend (from root)
npm run dev

# Frontend (from frontend folder)
npm start
```

## Features
- User Authentication (Signup, Login, Email Verification)
- Water Usage Dashboard
- Awareness Section
- About Us

## License
ISC
