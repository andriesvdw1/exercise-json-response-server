const http = require("http");

const host = "localhost";
const port = 8000;

const jsonArr = [
  {
    "id" : 1,
    "name": "Durian"
  },
  {
    "id" : 2,
    "name": "Rambutan"
  },
  {
    "id" : 3,
    "name": "Jackfruit"
  },
  {
    "id" : 4,
    "name": "Mangosteen"
  },
  {
    "id" : 5,
    "name": "Pitaya"
  },
  {
    "id" : 6,
    "name": "Carambola"
  },
  {
    "id" : 7,
    "name": "Lychee"
  },
  {
    "id" : 8,
    "name": "Jabuticaba"
  },

];

const requestListener = function (request, response) {
  if (request.url === "/json") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(jsonArr));
  } else {
    response.writeHead(200);
    response.end("My first server!");
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});