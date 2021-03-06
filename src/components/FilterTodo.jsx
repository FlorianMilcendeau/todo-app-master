import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/Filter.module.css';

const FilterTodo = ({ filter, onChange }) => (
  <div className={styles.wrapperFilter}>
    <button
      className={`${styles.button} ${filter === null && styles.active}`}
      disabled={filter === null}
      onClick={() => onChange(null)}
      type="button"
    >
      All
    </button>
    <button
      className={`${styles.button} ${filter === false && styles.active}`}
      disabled={filter === false}
      onClick={() => onChange(false)}
      type="button"
    >
      Active
    </button>
    <button
      className={`${styles.button} ${filter === true && styles.active}`}
      disabled={filter === true}
      onClick={() => onChange(true)}
      type="button"
    >
      Completed
    </button>
  </div>
);

export default FilterTodo;

FilterTodo.propTypes = {
  // eslint-disable-next-line react/require-default-props
  filter: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
