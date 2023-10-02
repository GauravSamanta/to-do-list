const Tasks=require('../models/task')
const getAllTasks = (req, res) => {
  res.send("All items are here");
};
const getTask = (req, res) => {
  res.json({"id":req.params.id})
};
const createTask = async (req, res) => {
  console.log(req.body)
const task=await Tasks.create(req.body)
  res.status(201).json(task)
};

const updateTask = (req, res) => {
  res.send("Task updated");
};

const deleteTask = (req, res) => {
  res.send("Task deleted");
 
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
