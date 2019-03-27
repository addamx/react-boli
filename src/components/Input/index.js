import React from 'react';
import styles from './input.scss';
import { cn } from '../../util/funcs';

const Input = ({ className, value, inputRef }) => {
  return (
    <input
      type="text"
      className={cn(styles.normal, className)}
      defaultValue={value}
      ref={inputRef}
    />
  );
}

Input.defaultProps = {
  value: 'type here...'
}

export default Input;
