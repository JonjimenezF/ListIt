// src/components/Checklist.js
"use client"; // Asegúrate de marcarlo como "client component" si usas hooks

import React, { useState } from 'react';
import TaskItem from './TaskItem';  
import AddTask from './AddTask';  

const Checklist = () => {
  const [tasks, setTasks] = useState([]);

  const AgregarTask = (taskText) => {
    // Cada tarea es un objeto con propiedades como 'text' y 'completed'
    const newTask = { text: taskText, completed: false };
    setTasks([...tasks, newTask]); //Se crea un array que contiene todas las tareas existentes
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="checklist-container">
      <h1 className="text-2xl font-semibold">Checklist</h1>
      {<AddTask addTask={AgregarTask} /> /* addTask es el nombre de la prop que recibirás en el componente AddTask */}
      <ul className="list-none p-0">
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task}
          toggleCompletion={() => toggleCompletion(index)} 
          removeTask={() => removeTask(index)}  />  
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
