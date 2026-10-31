
# BDF Lab 01 - Node.js and Express Server

## Student Information

| Details | Information |
|---|---|
| Student Name | Boddu Deekshith Reddy |
| Section | CSE-AIDE (2A) |
| Subject | Backend Development Fundamentals |
| Lab Number | 01 |
| Lab Title | Node.js and Express Server |
| Programming Language | JavaScript |

---

## 1. Objective

To set up a Node.js project and develop a web server using the built-in HTTP module and Express.js framework.

The experiment demonstrates server creation, HTTP request handling, routing, JSON responses, date and time generation, and 404 error handling.

## 2. Technologies Used

- Node.js
- Express.js
- JavaScript
- NPM (Node Package Manager)
- Visual Studio Code
- Google Chrome

## 3. Project Structure

```text
Lab-1/
│
├── node_modules/
│
├── screenshots/
│   ├── node-server.png
│   ├── home.png
│   ├── about.png
│   ├── time.png
│   └── not-found.png
│
├── app.js
├── plain-server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 4. Installation and Setup

### Step 1: Initialize the project

```bash
npm init -y
```

### Step 2: Install Express.js

```bash
npm install express
```

### Step 3: Verify Node.js and NPM

```bash
node -v
npm -v
```

## 5. Implementation

### A. Basic Node.js HTTP Server

File: `plain-server.js`

The built-in HTTP module is used to create a basic web server that responds with the text "Hello".

Run the server:

```bash
npm run start:http
```

Server URL:

http://localhost:3000

Expected Output:

```text
Hello
```

### B. Express.js Server

File: `app.js`

Express.js is used to create a web server with three GET routes.

Run the server:

```bash
npm start
```

Server URL:

http://localhost:3000

## 6. Express Routes

| HTTP Method | Endpoint | Description | Status |
|---|---|---|---|
| GET | `/` | Displays welcome message | 200 |
| GET | `/about` | Displays student information in JSON | 200 |
| GET | `/time` | Displays current date and time | 200 |
| GET | `/unknown` | Handles unknown routes | 404 |

### Route 1: Home

URL: `http://localhost:3000/`

Expected Response:

```text
Welcome to my Express server!
```

### Route 2: About

URL: `http://localhost:3000/about`

Expected Response:

```json
{
  "name": "Boddu Deekshith Reddy",
  "section": "CSE-AIDE (2A)"
}
```

### Route 3: Time

URL: `http://localhost:3000/time`

Expected Response:

```json
{
  "currentDateTime": "Automatically generated date and time"
}
```

The actual date and time are generated dynamically using JavaScript's `new Date()` method.

### Route 4: 404 Error Handling

URL: `http://localhost:3000/unknown`

Expected Response:

```text
404 - Page Not Found
```

## 7. Screenshots and Outputs

The following screenshots demonstrate the successful execution of the lab.

### Node.js HTTP Server

![Node.js HTTP Server](screenshots/node-server.png)

### Express Home Route

![Home Route](screenshots/home.png)

### Express About Route

![About Route](screenshots/about.png)

### Express Time Route

![Time Route](screenshots/time.png)

### Express 404 Error Handling

![404 Route](screenshots/not-found.png)

## 8. Important Concepts Learned

- Creating a Node.js project using NPM.
- Understanding package.json and node_modules.
- Installing and using Express.js.
- Creating an HTTP server using http.createServer().
- Handling HTTP requests and responses.
- Implementing GET routes using Express.
- Returning JSON responses.
- Generating current date and time using new Date().
- Handling unknown routes using HTTP 404 status codes.
- Understanding HTTP response status codes.

## 9. Result

Successfully created and executed a basic Node.js HTTP server and an Express.js web server.

Implemented the home, about, and time routes with appropriate HTTP status codes. Also implemented 404 error handling for unknown routes and verified the outputs using a web browser.

## 10. Author

**Boddu Deekshith Reddy**

Section: CSE-AIDE (2A)

Subject: Backend Development Fundamentals

Lab: 01 - Node.js and Express Server

---

*Developed as part of the Backend Development Fundamentals laboratory.*
