# Express.js PostgreSQL CRUD API

## Setup

1. Install PostgreSQL and create a database
2. Run the SQL to create the `users` table (see below)
3. Create `.env` file with your database credentials
4. Install dependencies:

```bash
npm install
```

5. Start the server:

```bash
node index.js
```

6. Test with Postman at `http://localhost:3000/users`

## SQL for Users Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);
```
