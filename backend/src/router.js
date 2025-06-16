const express = require("express");

const router = express.Router();

const tasksController = require("./controllers/tasksController");
const taskMiddleware = require("./middlewares/taskMiddlewares");

router.get("/tasks", tasksController.getAll);
router.post(
  "/tasks",
  taskMiddleware.validateFieldTitle,
  tasksController.createTask
);
router.delete("/tasks/:id", tasksController.deleTask);
router.put(
  "/tasks/:id",
  taskMiddleware.validateFieldTitle,
  taskMiddleware.validateFieldStatus,
  tasksController.updatedTask
);

module.exports = router;
