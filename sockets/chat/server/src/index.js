const express = require("express");
const httpServer = require("http");
const WebSocket = require("ws");
const app = express();
const port = 3000;

const server = new WebSocket({ server: httpServer.createServer(app) });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(port, () => console.log(`Lisening on port : ${port}`));
