const http = require("http"); // Remembering to not use import, use require instead
const host = "localhost"; // Developing the server on ip address 127.0.0.1
const port = 8000; // Using the port usually used either 8000 or 8080 

// Create some interesting fruit name array to display when requested using the /json url
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

// Create a requestListener 
const requestListener = function (request, response) {
  //Add logic to display different content based on the url the user enters in the browser
  if (request.url === "/json") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(jsonArr));
  }
   else if (request.url === "/") {
    // the default text to show
    response.writeHead(200);
    response.end("<h1>My personal server!</h1>");
  }
  else{
    response.writeHead(200);
    response.end("<h1>404 requested page not found!</h1> ");
  }
};

// Create an http server using the requestListener that was previously defined
const server = http.createServer(requestListener);

// Start the server on the specified port and ip address previously defined
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});