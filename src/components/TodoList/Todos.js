import React from 'react';

import TodoItem from './TodoItem';

const Todos = ({ data: todos, onStateChange, onRemove }) => (
  <ul className={styles.items}>
    {todos.map((todo, i) => (
      <li key={`${todo}-${i}`}>
        <TodoItem
          {...todo}
          onStateChange={() => onStateChange(i)}
          onUpdate={(value) => onUpdate(i, value)}
        />
        <Button onClick={() => onRemove(i)}>
          Remove
        </Button>
      </li>
    ))}
  </ul>
);

export default Todos;
