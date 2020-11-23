import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/Todolist.module.css';

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            id={`todo${todo.id}`}
            type="checkbox"
            onChange={() => onToggle(todo)}
            checked={todo.completed}
          />
          <label htmlFor={`todo${todo.id}`}>{todo.title}</label>
          <button type="button" onClick={() => onDelete(todo)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
