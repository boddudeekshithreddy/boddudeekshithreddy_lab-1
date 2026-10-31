
const http = require("http");

const PORT = 3000;

// Create HTTP Server
const server = http.createServer((request, response) => {

    response.writeHead(200, {
        "Content-Type": "text/plain"
    });

    response.end("Hello");

});

// Start Server
server.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
