const express = require("express");
const router = express.Router();
const Course = require("../models/course");

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const course = new Course({
    name: req.body.name,
    technology: req.body.technology,
    completed: req.body.completed,
  });

  try {
    const newCouse = await course.save();
    res.json(newCouse);
  } catch (err) {
    res.send("Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const courseToBeUpdated = await Course.findById(req.params.id);
    courseToBeUpdated.name = req.body.name;
    courseToBeUpdated.technology = req.body.technology;
    courseToBeUpdated.completed = req.body.completed;

    const updatedCourse = await courseToBeUpdated.save();
    res.json(updatedCourse);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Course.delete({ _id: req.params.id });
    res.json({ message: "deleted successfully" });
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
