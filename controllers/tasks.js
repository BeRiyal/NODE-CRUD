const express = require("express");
const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const errorHandlerMiddleware = require("../middleware/error-handler");
const { createCustomError } = require("../errors/custom-error");

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return next(createCustomError(`no task with id :${taskID}`,404));
    }
    res.status(200).json({ task });
});
const updateTask = asyncWrapper(async (req, res) => {

    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return next(createCustomError(`no task with id :${taskID}`,404));
    }
    res.status(200).json({ id: taskID, data: req.body });

});
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`no task with id :${taskID}`,404));
  }
  res.status(200).json({ msg: null, status: "success" });
});

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
