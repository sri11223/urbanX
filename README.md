# 💧 UrbanX - Smart Water Conservation Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js" alt="Node.js"/>
  <img src="https://img.shields.io/badge/MongoDB-6.x-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express" alt="Express"/>
</p>

## 🌍 Problem Statement

**Water scarcity is one of the most pressing global challenges of our time.** With rapid urbanization and climate change, cities are struggling to manage water resources efficiently. Households often lack awareness of their water consumption patterns, leading to:

- 💔 **Excessive water wastage** due to lack of monitoring
- 📊 **No visibility** into daily/weekly/monthly consumption patterns
- ⚠️ **Delayed detection** of leaks and unusual usage
- 🌱 **Limited awareness** about water conservation impact

## 💡 Our Solution - WaterConserve

**UrbanX (WaterConserve)** is a comprehensive smart water management platform that empowers households and communities to monitor, analyze, and optimize their water usage through:

- 📈 **Real-time Usage Tracking** - Monitor daily water consumption per household
- 🔔 **Smart Alerts** - Get notified when usage exceeds personalized thresholds
- 📊 **Analytics Dashboard** - Visualize weekly, monthly, and yearly trends
- 💰 **Cost Calculation** - See the financial impact of excess water usage
- 🌿 **Impact Awareness** - Understand how your savings contribute to environmental conservation
- 👥 **Community Comparison** - Compare your usage with regional averages

---

## ✨ Key Features

### 🏠 Household Dashboard
- **Personalized Login** - Each household has unique credentials
- **Daily Usage Tracking** - View water consumption in liters
- **Threshold Alerts** - Based on family size (110 liters/person/day)
- **Excess Cost Calculator** - ₹10/liter for first 50L excess, ₹20/liter beyond

### 📊 Analytics & Visualization
- **Interactive Charts** - Bar charts showing usage vs threshold
- **Time Period Filters** - Weekly, Monthly, Yearly views
- **Color-coded Data** - Blue for normal usage, Red for exceeded usage

### 🌱 Awareness Section
- **Personal Impact Stats** - Wells replenished, trees saved, carbon reduced
- **Regional Comparison** - Compare with neighborhood averages
- **Conservation Tips** - Actionable water-saving recommendations

### 📝 Complaints & Feedback
- **Issue Reporting** - Report leaks, billing issues, water quality problems
- **Feedback System** - Submit suggestions and feedback

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React.js | UI Framework |
| React Router | Navigation |
| Bootstrap 5 | Styling & Components |
| Chart.js | Data Visualization |
| Font Awesome | Icons |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Web Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| Bcrypt.js | Password Hashing |
| Nodemailer | Email Service |

---

## 📁 Project Structure

```
urbanX/
├── 📂 backend/
│   ├── 📂 controllers/
│   │   └── auth.js            # Authentication logic (signup, login, logout)
│   ├── 📂 models/
│   │   └── user.js            # User schema
│   ├── 📂 routes/
│   │   └── auth.js            # Auth API routes
│   ├── 📂 database/
│   │   ├── connectDB.js       # MongoDB connection
│   │   └── nodemailer.js      # Email configuration
│   ├── 📂 utils/
│   │   ├── generateTokenAndSetCookie.js
│   │   └── generateVerificationCode.js
│   └── index.js               # Server entry point
│
├── 📂 frontend/
│   ├── 📂 public/
│   │   └── index.html
│   └── 📂 src/
│       ├── 📂 components/
│       │   ├── Header/        # Landing page hero section
│       │   ├── Navbar/        # Navigation bar
│       │   ├── Home.jsx       # Household login page
│       │   ├── Dashboard.jsx  # Main analytics dashboard
│       │   ├── awareness/     # Water conservation awareness
│       │   ├── aboutus/       # About WaterConserve
│       │   ├── getstarted/    # Getting started guide
│       │   └── footer/        # Footer component
│       ├── App.js
│       └── index.js
│
├── .env                       # Environment variables
├── .gitignore
├── package.json               # Root dependencies
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sri11223/urbanX.git
cd urbanX
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Install frontend dependencies**
```bash
cd frontend
npm install
cd ..
```

4. **Configure environment variables**

Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/urbanx
JWT_SECRET=your_super_secret_jwt_key
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_email_app_password
SENDER_EMAIL=noreply@waterconserve.com
```

5. **Run the application**

```bash
# Terminal 1 - Start Backend
npm run dev

# Terminal 2 - Start Frontend
cd frontend
npm start
```

6. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

---

## 📱 Demo Credentials

To test the household dashboard:
| Household ID | Password |
|--------------|----------|
| 1 | hs1 |
| 2 | hs2 |
| 3 | hs3 |

---

## 📊 How It Works

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   IoT Sensors   │ ──── │  Data Collection │ ──── │    Database     │
│  (Future Scope) │      │      Layer       │      │    (MongoDB)    │
└─────────────────┘      └─────────────────┘      └─────────────────┘
                                                           │
                                                           ▼
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   User Action   │ ◄─── │    Dashboard    │ ◄─── │   Analytics     │
│   (Conserve!)   │      │   (React App)   │      │    Engine       │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

1. **Data Collection** - Water usage data is collected (currently from JSON, future: IoT sensors)
2. **Analysis** - System analyzes usage against thresholds based on household size
3. **Visualization** - Data is presented through interactive charts and dashboards
4. **Alerts** - Users are notified when usage exceeds recommended limits
5. **Action** - Users take conservation measures based on insights

---

## 🎯 Future Roadmap

- [ ] 📡 IoT sensor integration for real-time data
- [ ] 🤖 AI-powered leak detection
- [ ] 📱 Mobile app (React Native)
- [ ] 🏘️ Community leaderboards
- [ ] 💧 Rainwater harvesting tracker
- [ ] 🔧 Maintenance scheduling system
- [ ] 📧 Automated weekly reports via email

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Sri** - [GitHub](https://github.com/sri11223)

---

<p align="center">
  <b>💧 Every Drop Counts - Start Conserving Today! 💧</b>
</p>
