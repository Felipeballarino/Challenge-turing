const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes/index.js");
const cors = require("cors");

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(express.json());

server.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);
server.use("/", routes);

server.listen(8080, () => {
  console.log("Listen on port 8080");
});
