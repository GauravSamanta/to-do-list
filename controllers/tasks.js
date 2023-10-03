const Tasks = require("../models/task");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

  res.send("All items are here");
};
const getTask = async (req, res) => {
  try {
    const task = await Tasks.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${req.params.id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: TaskID } = req.params;
    const task = await Tasks.findOneAndUpdate({ _id: TaskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${req.params.id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: TaskID } = req.params;
    const task = await Tasks.findOneAndDelete({ _id: TaskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${req.params.id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
