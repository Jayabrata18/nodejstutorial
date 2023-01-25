const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page!");
  }
  // res.write('Welcome to our home page!');
  // res.end()
  if (req.url === "/about") {
    res.end("Welcome to our about page!");
  }
  res.end(`
 <h1>Oops!</h1>
 <p>We cant able to find the page</p>
 <a href="/">Back home</a>
`);
});
server.listen(5000);
