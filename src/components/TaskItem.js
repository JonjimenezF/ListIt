    // src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, toggleCompletion, removeTask }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={toggleCompletion}>
        {task.completed ? 'Desmarcar' : 'Completar'}
      </button>
      <button onClick={removeTask}>Eliminar</button>
    </li>
  );
};

export default TaskItem;