const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.method === "GET" && req.url === "/") {
        const resBody = fs.readFileSync("index.html");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end(resBody);
    }

    if (req.method === "GET" && req.url === "/main.css") {
        const resBody = fs.readFileSync("main.css");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        return res.end(resBody);
    }

    let reqBody = "";
    req.on("data", (data) => {
        reqBody += data;
    });

    req.on("end", () => {
        if (reqBody) {

            req.body = reqBody // 'tasks=Read&time=08%3A55'
                .split("&") // ['tasks=Read', 'time=08%3A55']
                .map((keyValuePair) => keyValuePair.split("=")) // [['tasks','Read'], ['time', '08%3A55']]
                .map(([key, value]) => [key, value.replace("+", " ")]) // [['tasks','Read'], ['time', '08%3A55']]
                .map(([key, value]) => [key, decodeURIComponent(value)]) // [['tasks','Read'], ['time', '08:55']]
                .reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {}); // { key: 'Read', time: '08:55'}
        }

        if (req.method === "POST" && req.url === "/tasks") {
            console.log(req.body);
            // save that task into the database
            // redirect the user to homepage
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        }
    });

    // app.use(express.urlencoded)

    
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));