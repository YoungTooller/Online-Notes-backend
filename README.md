# 📝 Online Notes

<div align="center">

![Node.js version](https://img.shields.io/badge/Node.js-v18.19.1-brightgreen) 
![Express version](https://img.shields.io/badge/Express-v5.1.0-000000) 
![Mongoose version](https://img.shields.io/badge/MongoDB-v8.14.1-4DB33D) 
![License](https://img.shields.io/badge/License-MIT-blue)

<p>
  <a href="./docs/README_ru.md">Documentation in Russian</a>
</p>

</div>

---


## 🚀 About the project

This is the backend part of the **Online Notes** project - a service for creating, editing, deleting, and pinning notes.  
Features include:

- User registration and authentication 🔐
- Notes management: create, edit, delete, pin 📋
- REST API built with **Node.js** and **Express**
- Request logging with **Morgan**
- Connection to **MongoDB** database via **Mongoose**

---

> ⚠️ **Important:** This project is created for educational and demonstration purposes only. It lacks full security measures for storing and protecting sensitive data.  
> **Do not use this backend to store valuable or personal information!**  
> For production applications, it is recommended to implement additional security layers, encryption, validation, and security audits.

---

## ⚙️ Technologies

- [Node.js v18.19.1](https://nodejs.org/en/)
- [Express v5.1.0](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose v8.14.1](https://mongoosejs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt) - for password hashing
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - for JWT authentication
- [Morgan](https://www.npmjs.com/package/morgan) - request logging
- [dotenv](https://www.npmjs.com/package/dotenv) - environment variables management
- [cors](https://www.npmjs.com/package/cors) - CORS configuration

---

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository_URL>
cd backend
```


2. Install dependencies:

```bash
npm install
```


3. Create a `.env` file in the root folder of the project and add the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
PORT=5000
```


- `MONGO_URI` - MongoDB connection string (see [official MongoDB docs](https://docs.mongodb.com/manual/reference/connection-string/))
- `JWT_SECRET` - secret key for generating JWT tokens (choose a strong string)
- `JWT_EXPIRE` - token expiration time (e.g., `30d` for 30 days)
- `PORT` - port on which the server will run (default 5000)

---

## 🚀 Running the project

To start in development mode with auto-reloading:

```bash
npm run dev
```


The server will be available at: `http://localhost:5000`

---

## 📋 API

### Authentication and User Profile (`/api/auth`)

| Method | Path          | Description                     |
|--------|---------------|--------------------------------|
| POST   | `/register`   | Register a new user             |
| POST   | `/login`      | User login                     |
| GET    | `/profile`    | Get current user profile       |

---

### Notes Management (`/api/notes`)

| Method | Path           | Description                    |
|--------|----------------|--------------------------------|
| GET    | `/`            | Get list of notes              |
| POST   | `/`            | Create a new note             |
| GET    | `/:id`         | Get note by ID                |
| PUT    | `/:id`         | Update note by ID             |
| DELETE | `/:id`         | Delete note by ID             |
| PATCH  | `/:id/pin`     | Pin/unpin a note              |

---

## 🔗 Useful Links

- [MongoDB Connection String Documentation](https://docs.mongodb.com/manual/reference/connection-string/)
- [Mongoose Official Docs](https://mongoosejs.com/docs/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

---

## 🧑‍💻 Author

**YoungTooller**

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) © YoungTooller
