import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState(''); // la variable task contiene el texto

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (task.trim()) {  // Verifica que no esté vacío
      addTask(task); // Aquí se llama a la función addTask que se pasó como prop
      setTask(''); // Reinicia el campo de entrada a una cadena vacía
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div class= 'divinput'>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Nueva tarea"
          />
        </div>
        <br></br>
        <div class="button container" >
          <button type="submit" >Agregar</button>
        </div>
      </form>
  );
};

export default AddTask;
