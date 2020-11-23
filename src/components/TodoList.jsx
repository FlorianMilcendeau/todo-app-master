import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

import styles from '../css/Todolist.module.css';
import iconDelete from '../assets/icons/delete.svg';

const TodoList = ({ todos, filter, onToggle, onDelete, onDeleteAll }) => {
  return (
    <section>
      <ul className={styles.list}>
        {todos.length > 0 ? (
          <List todos={todos} onToggle={onToggle} onDelete={onDelete} />
        ) : (
          <li className={`${styles.item} ${styles.empty}`}>No task to do.</li>
        )}
      </ul>
      {filter && todos.length > 0 && (
        <button
          className={styles.buttonDelete}
          type="button"
          onClick={() => onDeleteAll()}
        >
          Delete All
          <img src={iconDelete} alt="delete icon" />
        </button>
      )}
    </section>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDeleteAll: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  filter: PropTypes.bool,
};
