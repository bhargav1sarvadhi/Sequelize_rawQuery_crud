## Cricket Team and Player Management System

This project is a Cricket Team and Player Management System built using Express.js, Postgres, and Sequelize Raw Queries. It allows you to manage cricket teams and players by performing CRUD operations.

### Features

- Create,  update, and delete cricket teams
- Create,  update, and delete cricket players
- Assign players to teams and manage team rosters

### Requirements

- Node.js
- Postgres database(Sequelize)

### Getting Started

1. Clone the repository:

   \`\`\`bash
   git clone <repository-url>
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   cd Sequelize_RawQueries_crud
   npm install
   \`\`\`

3. Configure the database:

   - Create a Postgres database for the project.
   - Update the database connection settings in the \`config/db.js\` file.


4. Start the application:

   \`\`\`bash
   npm start
   \`\`\`

   The application will start on \`http://localhost:3000\`.

### API Endpoints

#### Cricket Team Endpoints

- \`POST /cricketteam\`: Create a new cricket team
- \`PUT /cricketteam/:id\`: Update a cricket team by ID
- \`DELETE /cricketteam/:id\`: Delete a cricket team by ID

#### Cricket Player Endpoints

- \`POST /cricketplayer\`: Create a new cricket player
- \`PUT /cricketplayer/:id\`: Update a cricket player by ID
- \`DELETE /cricketplayer/:id\`: Delete a cricket player by ID

### Database Structure

The project uses two tables in the Postgres database:

#### \`teams\` table

| Column     | Type    | Description                   |
|------------|---------|-------------------------------|
| id         | UUID    | Team ID (primary key)         |
| name       | VARCHAR | Team name                     |
| coach_name | VARCHAR | Coach name                    |

#### \`players\` table

| Column   | Type    | Description                  |
|----------|---------|------------------------------|
| id       | UUID    | Player ID (primary key)      |
| name     | VARCHAR | Player name                  |
| type     | VARCHAR | Player type (batsman, bowler, all-rounder) |
| age      | INTEGER | Player age                   |

### Contribution

Contributions are welcome! If you find any issues or want to enhance the project, feel free to open a pull request.








