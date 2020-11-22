import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ onAdd }) => {
  const [value, setvalue] = useState('');

  const handleInput = async (e) => {
    await setvalue(e.target.value);
  };

  const postTodo = (e) => {
    e.preventDefault();
    onAdd(value);
    setvalue('');
    e.target.focus();
  };

  return (
    <form onSubmit={(e) => postTodo(e)}>
      <input type="text" value={value} onChange={(e) => handleInput(e)} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Input;

Input.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
