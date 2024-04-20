// TaskItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../actions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className='container task-list'>
      <span>{task.title}</span>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;
