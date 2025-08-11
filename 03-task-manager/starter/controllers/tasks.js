<<<<<<< HEAD
const Task = require('../models/Task');

=======
>>>>>>> 0082cefe3714a2448a848012ebefdc9e8acf06d0
const getAllTasks = (req, res) => {
  res.send('get all task')
}

<<<<<<< HEAD
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json({msg: error});
  }
}

const getTask = (req, res) => {
  res.json({ id: req.params.id })
=======
const createTask = (req, res) => {
  res.send('create task')
}

const getTask = (req, res) => {
  res.send('get a single task')
>>>>>>> 0082cefe3714a2448a848012ebefdc9e8acf06d0
}

const updateTask = (req, res) => {
  res.send('update task')
}

const deleteTask = (req, res) => {
  res.send('delete task')
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
