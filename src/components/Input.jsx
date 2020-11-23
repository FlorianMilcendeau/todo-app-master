import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../css/Input.module.css';

const Input = ({ onAdd }) => {
  const [value, setvalue] = useState('');

  const handleInput = async (e) => {
    await setvalue(e.target.value.trimStart());
  };

  const postTodo = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      onAdd(value);
      setvalue('');
      e.target.focus();
    }
  };

  return (
    <form className={styles.wrapperForm} onSubmit={(e) => postTodo(e)}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => handleInput(e)}
      />
      <input className={styles.inputButton} type="submit" value="Add" />
    </form>
  );
};

export default Input;

Input.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
