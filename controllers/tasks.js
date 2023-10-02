const getAllTasks = (req, res) => {
  res.send("All items are here");
};
const getTask = (req, res) => {
  res.json({"id":req.params.id})
};
const createTask = (req, res) => {
  res.json(req.body);
  console.log(req.body)
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
