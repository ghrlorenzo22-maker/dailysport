# Daily Sport+ Project

## Overview
Daily Sport+ is a web application designed to provide comprehensive information and statistics for the 2025/2026 football season, focusing on both European and African leagues. The application features live tables, match results, player statistics, and team rankings, all presented in a user-friendly interface.

## Architecture
The project is structured as a full-stack application with a React frontend and a Node.js backend. The data is stored in a MongoDB database, and the application communicates through secure REST APIs.

### Folder Structure
```
Daily-sport-plus
├── README.md
├── .gitignore
├── .env.example
├── docker-compose.yml
├── Dockerfile
├── client
│   ├── README.md
│   ├── package.json
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── index.js
│   │   ├── App.js
│   │   ├── services
│   │   │   └── api.js
│   │   ├── components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── LeagueList.jsx
│   │   │   ├── LeaguePage.jsx
│   │   │   ├── TeamPage.jsx
│   │   │   ├── StatsPanel.jsx
│   │   │   └── Pagination.jsx
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   └── NotFound.jsx
│   │   ├── routes
│   │   │   └── AppRoutes.jsx
│   │   ├── styles
│   │   │   └── tailwind.css
│   │   └── __tests__
│   │       └── App.test.js
├── server
│   ├── README.md
│   ├── package.json
│   ├── app.js
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── leagueController.js
│   │   ├── teamController.js
│   │   ├── playerController.js
│   │   └── matchController.js
│   ├── routes
│   │   ├── leagues.js
│   │   ├── teams.js
│   │   ├── players.js
│   │   └── matches.js
│   ├── models
│   │   ├── League.js
│   │   ├── Team.js
│   │   ├── Player.js
│   │   └── Match.js
│   ├── middleware
│   │   └── auth.js
│   ├── services
│   │   └── seedService.js
│   ├── seed
│   │   ├── leagues.2025-26.json
│   │   ├── teams.2025-26.json
│   │   ├── players.2025-26.json
│   │   └── matches.2025-26.json
│   └── tests
│       └── api.test.js
└── scripts
    ├── seed-db.sh
    └── start-dev.sh
```

## Features
- **Dynamic Data Fetching**: The frontend fetches data dynamically from the backend API, ensuring that users always see the latest statistics and results.
- **Responsive Design**: The application is built with a responsive design, ensuring usability across various devices.
- **Search Functionality**: Users can filter teams, players, and leagues using a search bar.
- **Pagination and Sorting**: Long tables are paginated, and statistics can be sorted for better user experience.
- **Testing**: The project includes basic tests for both the frontend and backend to ensure reliability.

## Setup Instructions
1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd Daily-sport-plus
   ```

2. **Environment Variables**:
   - Copy `.env.example` to `.env` and fill in the required variables.

3. **Install Dependencies**:
   - For the backend:
     ```
     cd server
     npm install
     ```
   - For the frontend:
     ```
     cd client
     npm install
     ```

4. **Run the Application**:
   - Start the backend server:
     ```
     cd server
     npm run dev
     ```
   - Start the frontend client:
     ```
     cd client
     npm start
     ```

5. **Database Seeding**:
   - To seed the database with sample data, run:
     ```
     cd server
     npm run seed
     ```

## Deployment
- The application can be deployed using Docker. Use the provided `Dockerfile` and `docker-compose.yml` for containerization.
- For cloud deployment, consider using platforms like Heroku or Vercel.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.