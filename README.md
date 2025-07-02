# PostgreSQL CRUD API (Mini Project)

A simple and well-structured Express.js API to perform **Create**, **Read**, **Update**, and **Delete** operations on a PostgreSQL `users` table. Designed for clarity, modularity, and professional API handling.

---

## 📦 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- express-validator
- Postman (for testing)

---

## 🧱 Database Schema

Run this SQL to create the table:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);
```

---

## 🚀 Setup Instructions

1. **Clone this repo**

```bash
git clone https://github.com/your-username/pg-crud-api.git
cd pg-crud-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```env
PG_HOST=localhost
PG_PORT=5432
PG_USER=your_postgres_user
PG_PASSWORD=your_password
PG_DATABASE=your_database_name
PORT=3000
```

4. **Start the server**

```bash
npm start
```

---

## 📮 API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/users`         | Get all users            |
| GET    | `/users/:id`     | Get a single user        |
| POST   | `/users`         | Create a new user        |
| PUT    | `/users/:id`     | Update an existing user  |
| DELETE | `/users/:id`     | Delete a user            |

---

## ✅ Input Validation

Applied to `POST` and `PUT`:

- **name**: at least 2 characters
- **email**: must be a valid email format
- **age**: must be a number between `0` and `120`

Errors return status `400` with descriptive messages.

---

## ❗ Error Handling

- **400** – Bad Request (validation errors)
- **404** – Not Found (user doesn’t exist)
- **500** – Internal Server Error (DB/server issues)

---

## 🔬 Postman Collection

A full Postman collection with tests is included:

📥 [Download pg-crud-api.postman_collection.json](./pg-crud-api.postman_collection.json)

### 💡 To Use:
1. Open Postman → Import → Upload the file
2. Run each request and view **Test Results** tab

---

## 📁 Folder Structure

```
pg-crud-api/
├── controllers/         # All business logic
│   └── usersController.js
├── routes/              # API routes
│   └── users.js
├── middleware/          # Input validation
│   └── validateUser.js
├── db.js                # PostgreSQL pool + error check
├── index.js             # Server entry point
├── .env
├── .gitignore
├── README.md
└── pg-crud-api.postman_collection.json
```

---

## 📌 Notes

- No secrets or credentials are pushed — `.env` is ignored
- Fully tested using Postman with automated assertions
- Scalable structure ready for future features or deployment

---

## 🧠 Author

**Oluseyi Samuel Olalere**  
3MTT Software Development Track – PostgreSQL CRUD Mini Project