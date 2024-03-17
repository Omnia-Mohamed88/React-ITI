import React, { useState } from 'react';
import './TodoList.css';
import Button from '../reusable/button';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [counter, setCounter] = useState(1);

  const handleAddTodo = () => {
    if (title.trim() === '') return;
    const newTask = {
      id: counter,
      title: title,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setCounter(counter + 1);
    setTitle('');
  };

  const handleDeleteTodo = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleDone = (id) => {
    const taskToUpdate = tasks.find(task => task.id === id);
    if (taskToUpdate) {
        taskToUpdate.completed = !taskToUpdate.completed;
        setTasks([...tasks]);
    }
};

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button onClick={handleAddTodo}>Add Todo</Button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.title}</span>
            <div>
              <Button onClick={() => handleToggleDone(task.id)}>
                {task.completed ? 'Undo' : 'Done'}
              </Button>
              <Button onClick={() => handleDeleteTodo(task.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
