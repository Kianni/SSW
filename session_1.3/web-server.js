const http = require("http");
const httpStatus = require("http-status-codes");

const app = http.createServer((request, response) => {

    response.writeHead(httpStatus.OK, {
        'Content-Type':'text/html'
    });

    let message = '<meta charset="utf-8"><h2>Varför Paris, vi har ju Åbo</h2>';

    response.write(message);

    response.end();
});

const port = 3000;
app.listen(port);

console.log(`The server is running and listening to the port ${port}`);