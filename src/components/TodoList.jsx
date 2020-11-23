import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/Todolist.module.css';
import iconDelete from '../assets/icons/delete.svg';

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className={styles.list}>
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <li key={todo.id} className={styles.item}>
              <input
                id={`todo${todo.id}`}
                type="checkbox"
                onChange={() => onToggle(todo)}
                checked={todo.completed}
              />
              <label htmlFor={`todo${todo.id}`}>{todo.title}</label>
              <button
                className={styles.delete}
                type="button"
                onClick={() => onDelete(todo)}
              >
                <img src={iconDelete} alt="delete icon" />
              </button>
            </li>
          );
        })
      ) : (
        <li className={`${styles.item} ${styles.empty}`}>No task to do.</li>
      )}
    </ul>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
