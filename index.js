const express = require("express");

const server = express();

const lambdaRouter = require("./data/routers/router");

server.use(express.json());

server.use("/api/posts", lambdaRouter);

server.get("/", (req, res) => {
  res.send(`
      <h2>Lambda Hubs API</h>
      <p>Welcome to the Lambda Hubs API</p>
    `);
});

server.listen(5000, () => {
  console.log("\n === Server is running on http://localhost:/5000 === \n");
});
