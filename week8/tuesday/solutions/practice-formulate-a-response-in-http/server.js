//!!START
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req, res);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World!</title>
    </head>
    <body>
      <h1>Hello there!</h1>
  `)

  if (true) {
    res.write(`<h2>My name is Javier</h2>`)
  }
  res.write(`</body></html>`)
  res.end();
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
//!!END