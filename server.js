const express = require("express");
const studentRoutes = require("./src/student/routes");
// const { getStudentsById } = require("./src/student/controller");

//after importing or require your "express" you need to save into a const variable and create a port
const app = express();
const port = 3000;

//middleware , allows us to post and get json from our endpoints.
app.use(express.json());

//this "get" will be what people see on the website when you actually go to localhost:3000 only. No endpoints included. , and the response will be the callback function. Make sure to restart your server to see the effect
app.get("/", (req, res) => {
  res.send("Hello this works to get the home page!");
});

//create the route that will lead to our student routes
//So this pretty much create a new domain to make people go to this page with that endpoint.
app.use("/api/v1/students", studentRoutes);
// app.use("/api/v1/students/:id", getStudentsById);

//this will see if the port works and if it does we will do a callback function that will console log a message
//To test if this work, go to terminal and type node and this file name
app.listen(port, () => console.log(`App is listening on port: ${port}`));
