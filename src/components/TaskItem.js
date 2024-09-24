import React from 'react';

const TaskItem = ({ task, toggleCompletion, removeTask }) => {
  return (
    <li className="task-item" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <div className="task-content">
        <p className="task-text">{task.text}</p>
      </div>
      <div className="task-actions">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={toggleCompletion} 
          className="task-checkbox"
        />
        <button className="btn-eliminar" onClick={removeTask}>
          <img src="/imagen/eliminar.png" alt="Eliminar" className="img-eliminar" />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
