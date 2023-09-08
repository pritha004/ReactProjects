"use client";

import React, { useState } from "react";

const page = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { title: taskTitle, desc: taskDesc, completed: false },
    ]);
    setTaskTitle("");
    setTaskDesc("");
  };

  const deleteHandler = (index) => {
    let copyTask = [...tasks];
    copyTask.splice(index, 1);
    setTasks(copyTask);
  };

  let renderTask = <h2>No task avaialable</h2>;

  if (tasks.length > 0) {
    renderTask = tasks.map((task, index) => {
      return (
        <li className="flex items-center justify-around mb-5" key={index}>
          <div className="w-2/3">
            <h5 className="text-2xl font-semibold">{task.title}</h5>
            <p className="text-lg font-semibold text-slate-800">{task.desc}</p>
          </div>

          <button
            className="bg-red-400 text-white rounded px-4 py-2 "
            onClick={() => deleteHandler(index)}
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <div>
      <div className="">
        <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
          Todo List
        </h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
            placeholder="Enter task title"
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
          />
          <input
            type="text"
            className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
            placeholder="Enter description"
            value={taskDesc}
            onChange={(e) => {
              setTaskDesc(e.target.value);
            }}
          />
          <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5">
            Add Task
          </button>
        </form>
        <hr />
        <div className="p-8 bg-slate-200">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </div>
  );
};

export default page;
