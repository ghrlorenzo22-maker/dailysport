# Daily Sport+ Backend README

## Overview

The Daily Sport+ backend is built using Node.js and Express, providing a RESTful API to serve data related to the 2025/2026 football season, covering both European and African leagues. This API supports functionalities such as fetching league standings, match results, player statistics, and team details.

## Project Structure

```
server
├── README.md
├── package.json
├── app.js
├── config
│   └── db.js
├── controllers
│   ├── leagueController.js
│   ├── teamController.js
│   ├── playerController.js
│   └── matchController.js
├── routes
│   ├── leagues.js
│   ├── teams.js
│   ├── players.js
│   └── matches.js
├── models
│   ├── League.js
│   ├── Team.js
│   ├── Player.js
│   └── Match.js
├── middleware
│   └── auth.js
├── services
│   └── seedService.js
├── seed
│   ├── leagues.2025-26.json
│   ├── teams.2025-26.json
│   ├── players.2025-26.json
│   └── matches.2025-26.json
└── tests
    └── api.test.js
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Daily-sport-plus/server
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   - Create a `.env` file in the `server` directory based on the `.env.example` file.
   - Set the necessary environment variables for your MongoDB connection and any other configurations.

4. **Database Configuration**
   - Ensure MongoDB is running locally or provide a connection string to a remote MongoDB instance in your `.env` file.

5. **Seed the Database (Optional)**
   - To populate the database with sample data, run the following command:
   ```bash
   npm run seed
   ```

6. **Start the Server**
   ```bash
   npm start
   ```

## API Endpoints

- **GET /api/leagues**: Fetch all leagues.
- **GET /api/leagues/:id**: Fetch details of a specific league.
- **GET /api/teams**: Fetch all teams.
- **GET /api/teams/:id**: Fetch details of a specific team.
- **GET /api/players**: Fetch all players.
- **GET /api/players/:id**: Fetch details of a specific player.
- **GET /api/matches**: Fetch all matches.
- **GET /api/matches/:id**: Fetch details of a specific match.

## Testing

- To run tests, use the following command:
```bash
npm test
```

## Deployment

- The application can be containerized using Docker. Refer to the `Dockerfile` and `docker-compose.yml` for deployment instructions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.