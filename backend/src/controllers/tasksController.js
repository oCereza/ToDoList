const tasksModel = require("../models/tasksModel");

const getAll = async (req, res) => {
  const tasks = await tasksModel.getAll();

  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const createdTask = await tasksModel.createTask(req.body);

  return res.status(201).json(createdTask);
};

const deleTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.deleteTask(id);

  return res.status(204).json();
};

const updatedTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.updatedTask(id, req.body);

  return res.status(204).json();
};

module.exports = { getAll, createTask, deleTask, updatedTask };
