const express = require("express");
const studentRoutes = require("./src/student/routes");

const app = express();
const port = 3000;

//middleware , allows us to post and get json from our endpoints.
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello this works to get the home page!");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => console.log(`App is listening on port: ${port}`));
