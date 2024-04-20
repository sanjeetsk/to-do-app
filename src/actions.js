// actions.js
export const addTask = (title) => ({
  type: 'ADD_TASK',
  payload: { title }
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: { id }
});
