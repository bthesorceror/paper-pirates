const _ = require("lodash");
const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();

// Serve static assets
const staticMiddleware = express.static(path.join(__dirname, "public"));
app.use("/public", staticMiddleware);

// Render main page
app.get("/", (req, res) => {
  res.writeHead(200, {
    "content-type": "text/html"
  });

  fs.createReadStream(path.join(__dirname, "views", "index.html")).pipe(res);
});

const port = _.get(process.env, "PORT", 4000);
app.listen(port, () => {
  console.info(`Now listening on port ${port}`);
});