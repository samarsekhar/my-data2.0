const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});
server.listen(3001, () => {
  console.log("Server running at http://localhost:3001/");
});
