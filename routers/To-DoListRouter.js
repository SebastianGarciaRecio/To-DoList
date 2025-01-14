const express = require("express");
const router = express.Router();
const taskController = require("../controllers/To-DoListController")


router.get("/tasks", taskController.getTasks);
router.post("/tasks", taskController.addTask);
router.patch("/tasks/:id",taskController.tickTask);
router.delete("/task/:id", taskController.deleteTask);

module.exports = router;