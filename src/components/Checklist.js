// src/components/Checklist.js
"use client"; // Asegúrate de marcarlo como "client component" si usas hooks

import React, { useState } from 'react';
import TaskItem from './TaskItem';  
import AddTask from './AddTask';  

const Checklist = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="checklist-container">
      <h1 className="text-2xl font-semibold">Checklist</h1>
      <AddTask addTask={addTask} />
      <ul className="list-none p-0">
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />  
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
