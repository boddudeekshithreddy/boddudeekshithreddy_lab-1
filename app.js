
const express = require("express");

const app = express();

const PORT = 3000;

// Home Route
app.get("/", (request, response) => {

    response.status(200).send("Welcome to my Express server!");

});

// About Route
app.get("/about", (request, response) => {

    response.status(200).json({

        name: "Boddu Deekshith Reddy",

        section: "CSE-AIDE (2A)"

    });

});

// Time Route
app.get("/time", (request, response) => {

    response.status(200).json({

        currentDateTime: new Date()

    });

});

// 404 Error Handling
app.use((request, response) => {

    response.status(404).send("404 - Page Not Found");

});

// Start Express Server
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
