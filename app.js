const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/CoursesDB";

const app = express();

mongoose.connect(url, () => {
  console.log("Connected to DB successfully");
});

app.use(express.json());

const courseRouter = require("./routes/courses");
app.use("/courses", courseRouter);

app.listen(9000, () => {
  console.log("Server started");
});
