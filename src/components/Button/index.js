import React from 'react';
import styles from './button.scss'
import { cn } from '../../util';

const Button = ({ className, children, onClick }) => (
  <button
    type="button"
    className={cn(styles.normal, className)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;

