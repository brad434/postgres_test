const express = require("express");
const cors = require("cors");

const studentRoutes = require("./src/student/routes");

const app = express();
const port = 3000;

//middleware , allows us to post and get json from our endpoints.
app.use(express.json());
app.use(cors());

//the app.get() will be for testing to see if the backend works. But app.use(('/'), studentroutes) this will be homepage

//it has to be .use because youre using a router
app.use("/", studentRoutes);

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => console.log(`App is listening on port: ${port}`));
