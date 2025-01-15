const express = require("express");
const router = express.Router();
const taskController = require("../controllers/To-DoListController")


router.get("/tasks", taskController.getTasks);
router.post("/tasks", taskController.addTask);
router.patch("/tasks/:titulo",taskController.tickTask);
router.delete("/task/:titulo", taskController.deleteTask);
router.get("/tasks/:titulo", taskController.getTask);


module.exports = router;