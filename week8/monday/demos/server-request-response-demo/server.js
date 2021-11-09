const http = require('http');
const fs = require("fs");
const { userInfo } = require('os');

let database = [];
const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
        
    if (req.method === "GET" && req.url === "/") {
        const htmlPage = fs.readFileSync("index.html", "utf-8");
        const tasksList = database.map(task => {
            return `<li>${task["tasks"]} - ${task["time"]}</li>`
        });
        const resBody = htmlPage
            .replace("${tasks}", tasksList.join(""));
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
        // Parsing the body of the request
        if (reqBody) {
            req.body = reqBody
                .split("&")
                .map((keyValuePair) => keyValuePair.split("="))
                .map(([key, value]) => [key, value.replace(/\+/g, " ")])
                .map(([key, value]) => [key, decodeURIComponent(value)])
                .reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {});
            console.log(req.body);
        }

        if (req.method === "GET" && req.url === "/posts/5/edit") {
            // Code to create a new user in my database
            const htmlPage = fs.readFileSync("form-to-edit-post-5.html", "utf-8");
        }

        if (req.method === "POST" && req.url === "/posts/5") {
            // Code to update an existing user
            req.body
            oldPost.title = req.body.title


        }

        if (req.method === "GET" && req.url === "/users") {
            // Send HTML display all users
        }

        if (req.method === "POST" && req.url === "/posts") {
            if (!req.body.time) {
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/html");
                return res.end(`<!DOCTYPE html>
                                <html lang="en">
                                <head>
                                    <meta charset="UTF-8">
                                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Server Request/Response Demo</title>
                                    <link rel="stylesheet" href="./main.css">
                                </head>
                                <body>
                                <h2>Unauthorized</h2>
                                </body>
            `);
            }
            console.log(req.body);
            database.push(req.body);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        }
    });

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    return res.end(`<!DOCTYPE html>
                                <html lang="en">
                                <head>
                                    <meta charset="UTF-8">
                                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Server Request/Response Demo</title>
                                    <link rel="stylesheet" href="./main.css">
                                </head>
                                <body>
                                <h2>Not Found</h2>
                                </body>
            `);
    
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));