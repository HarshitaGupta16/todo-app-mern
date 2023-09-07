const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Connection = require("./database/db");
const path = require("path");
const dotenv = require("dotenv");
const routes = require("./router/route");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

Connection();

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
