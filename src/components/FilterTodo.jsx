import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/Filter.module.css';

const FilterTodo = ({ filter, onChange }) => (
  <div>
    <button
      className={styles.button}
      disabled={filter === null}
      onClick={() => onChange(null)}
      type="button"
    >
      All
    </button>
    <button
      className={styles.button}
      disabled={filter === true}
      onClick={() => onChange(true)}
      type="button"
    >
      Completed
    </button>
    <button
      className={styles.button}
      disabled={filter === false}
      onClick={() => onChange(false)}
      type="button"
    >
      To do
    </button>
  </div>
);

export default FilterTodo;

FilterTodo.propTypes = {
  // eslint-disable-next-line react/require-default-props
  filter: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
