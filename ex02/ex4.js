const http = require("http");
const httpStatus = require("http-status-codes"); //1
const eval = require("./evaluator");

let scale = [{ grade: 1, points: 20},{ grade: 2, points: 35},
    { grade: 3, points: 50},
    { grade: 4, points: 65},{ grade: 5, points: 80}];
eval.setEvaluationScale(scale);
result = eval.getGrade(81);

const port = 3000; //2
const app = http.createServer((request, response) => { //3
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, { //4
        "Content-Type": "text/html"
    }); 
    let responseMessage = `<h1>Your grade is ${result}!</h1>`;
    response.write(responseMessage); //5
    response.end(); //6
    console.log(`Sent a response : ${responseMessage}`);
});

app.listen(port); //7
