// Dependencies
const express = require("express");
const axios = require("axios");

// Initialize the App
const app = express();

// Set up our port value
require("dotenv").config();

// by default
const port = process.env.PORT;

const api = "https://api.hatchways.io/assessment/blog/posts";

// // MiddleWare
// app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

// app.get("/", (req, res) => {
//   console.log("Oh hey! I got a request. Let me respond with something");
//   res.send("Hello World!");
// });

// Mount Routes
// ROUTE 1
// /api/ping
app.get("/api/ping", async (req, res) => {
  await axios
    .get(api + "?tag=tech")
    .then((response) => {
      const message = {
        success: true,
      };
      // console.log("response:", response.data);
      return res.json(message);
    })
    .catch((error) => res.send(error));
});

// ROUTE 2
// /api/posts

// Tell the App to listen
app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
