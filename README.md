<<<<<<< HEAD
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
    # Daily Sport+

    A full-stack web application for browsing football leagues, teams, matches and player statistics for the 2025/2026 season. The project includes a React frontend and an Express/MongoDB backend with sample seed data.

    ## Key Features
    - Browse leagues, teams, matches and player stats
    - Search, pagination and sorting for long lists
    - Seeded dataset for the 2025/2026 season (European & African leagues)
    - Docker-ready with `Dockerfile` and `docker-compose.yml`

    ## Repo Structure
    - `client/` — React app (UI, routes, components)
    - `server/` — Express API, Mongoose models, seed data and tests
    - `scripts/` — helper scripts (`seed-db.sh`, `start-dev.sh`)

    ## Quick Start

    Prerequisites: `node` (v16+), `npm`, and optionally `docker` & `docker-compose`.

    1. Install dependencies

      Backend:
      ```bash
      cd server
      npm install
      ```

      Frontend:
      ```bash
      cd client
      npm install
      ```

    2. Create environment file

      Copy the example and edit values as needed:
      ```bash
      cp .env.example .env
      ```

    3. Seed the database (local MongoDB required)

      From the `server` folder:
      ```bash
      npm run seed
      ```

    4. Run locally (in separate terminals)

      Start backend:
      ```bash
      cd server
      npm run dev
      ```

      Start frontend:
      ```bash
      cd client
      npm start
      ```

    5. Or run with Docker Compose

      ```bash
      docker-compose up --build
      ```

    ## Tests

    Backend tests are under `server/tests`. Run them with:

    ```bash
    cd server
    npm test
    ```

    Frontend tests are under `client/src/__tests__` and can be run with:

    ```bash
    cd client
    npm test
    ```

    ## Contributing
    - Fork the repo, create a feature branch, and open a pull request.
    - Please include tests for new features and follow existing code style.

    ## License
    This project is offered under the MIT License. See `LICENSE` if present.

    ## Contact
    If you need help, open an issue or contact the repository owner.
