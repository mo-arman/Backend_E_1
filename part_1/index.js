let http = require("http");

let server = http.createServer((req, res) => {
  if (req.url === "/news") {
    let obj = {
      statusCode: 200,
      message: "Server is running successfully",
      data: [
        {
          newsTitle: "News 1",
          newsDescription: "News 1 Description",
        },
        {
          newsTitle: "News 2",
          newsDescription: "News 2 Description",
        },
        {
          newsTitle: "News 3",
          newsDescription: "News 3 Description",
        },
        {
          newsTitle: "News 4",
          newsDescription: "News 4 Description",
        },
        {
          newsTitle: "News 5",
          newsDescription: "News 5 Description",
        },
      ],
    };
    res.end(JSON.stringify(obj));
  }
  if (req.url === "/about") {
    res.end("<h1>About</h1>");
  }
  if (req.url === "/contact") {
    res.end("<h1>Contact</h1>");
  }
  if (req.url === "/") {
    res.end("<h1>Home</h1>");
  }
  if (req.url === "/weather") {
    res.end("<h1>Weather</h1>");
  }
  res.end("I have Created my first server using Node.js");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
