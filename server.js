const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("errorhandler");
const e = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler());
app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Listening on port: ${port}`);
});

module.exports = app;
