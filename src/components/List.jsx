import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import styles from '../css/Todolist.module.css';

import iconDelete from '../assets/icons/delete.svg';

const List = ({ todos, onToggle, onDelete }) => {
  const deleteCallBack = useCallback((todo) => onDelete(todo), [onDelete]);

  const toggleCallBack = useCallback((todo) => onToggle(todo), [onDelete]);

  return (
    <>
      {todos.map((todo) => {
        return (
          <li key={todo.id} className={styles.item}>
            <input
              id={`todo${todo.id}`}
              type="checkbox"
              onChange={() => toggleCallBack(todo)}
              checked={todo.completed}
            />
            <label className={styles.label} htmlFor={`todo${todo.id}`}>
              {todo.title}
            </label>
            <button
              className={styles.delete}
              type="button"
              onClick={() => deleteCallBack(todo)}
            >
              <img src={iconDelete} alt="delete icon" />
            </button>
          </li>
        );
      })}
    </>
  );
};

export default List;

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
