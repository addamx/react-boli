import React, { Component } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import Todos from './Todos';
import styles from './_module.scss'

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [

      ]
    }
  }

  render() {
    return (
      <div className={styles.container} >
        <header className={styles.header}>
          <Input
            className={styles.input}
            inputRef={(input) => this.input = input}
          />
          <Button onClick={() => this.handleAdd()}>
            Add Todo
          </Button>
        </header>
        <section className={styles.content} >
          <Todos
            data={this.state.todos}
            onStateChange={(index) => this.handleStateChange(index)}
            onRemove={(index) => this.handleRemove(index)}
          />
        </section>
      </div>
    );
  }
}

export default TodoList;
