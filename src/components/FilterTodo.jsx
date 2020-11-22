import React from 'react';
import PropTypes from 'prop-types';

const FilterTodo = ({ filter, onChange }) => (
  <>
    <button
      disabled={filter === null}
      onClick={() => onChange(null)}
      type="button"
    >
      All
    </button>
    <button
      disabled={filter === true}
      onClick={() => onChange(true)}
      type="button"
    >
      Completed
    </button>
    <button
      disabled={filter === false}
      onClick={() => onChange(false)}
      type="button"
    >
      To do
    </button>
  </>
);

export default FilterTodo;

FilterTodo.propTypes = {
  // eslint-disable-next-line react/require-default-props
  filter: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
