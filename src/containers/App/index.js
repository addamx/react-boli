import React, { Component } from 'react';
import styles from './app.scss';
import TodoList from 'components/TodoList';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.header}>Todo List Demo</h2>
        <div className={styles.content}>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
