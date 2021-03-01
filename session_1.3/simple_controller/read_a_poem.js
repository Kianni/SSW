const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");

const getViewUrl = url => `views${url}.html`;

const app = http.createServer((request, response) => {

    let viewUrl = getViewUrl(request.url);
    console.log(viewUrl);

    fs.readFile(viewUrl, (error, data) => {
        if (error) {
            response.writeHead(httpStatus.NOT_FOUND, {
                'Content-Type':'text/html'
            });
            response.write(`<h1>Not found</h1>`);
        } else {
            response.writeHead(httpStatus.OK, {
                'Content-Type':'text/html'
            });

            response.write(data);

        }
        response.end();
    });


    
});

const port = 3000;
app.listen(port);

console.log(`The server is running and listening to the port ${port}`);