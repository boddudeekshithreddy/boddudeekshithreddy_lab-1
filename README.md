
# BDF Lab 01 - Node.js and Express Server

## Student Details

- Name: Boddu Deekshith Reddy
- Section: CSE-AIDE (2A)
- Subject: Backend Development Fundamentals
- Lab: 01
- Topic: Node.js and Express Server

## Objective

To create a Node.js project and develop a basic HTTP server
using Node.js and Express.js.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- NPM
- Visual Studio Code

## Project Structure

```text
Lab-1/
├── node_modules/
├── screenshots/
├── app.js
├── plain-server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation

Initialize the project:

```bash
npm init -y
```

Install Express:

```bash
npm install express
```

## Run Node.js HTTP Server

```bash
npm run start:http
```

Open:

http://localhost:3000

Expected output:

Hello

## Run Express Server

```bash
npm start
```

## Express Routes

| Method | Endpoint | Status |
|--------|----------|--------|
| GET | / | 200 |
| GET | /about | 200 |
| GET | /time | 200 |
| GET | /unknown | 404 |

## Student Information

Name: Boddu Deekshith Reddy

Section: CSE-AIDE (2A)

## Result

Successfully created a Node.js HTTP server and an
Express.js server with three GET routes and 404 error handling.
```
