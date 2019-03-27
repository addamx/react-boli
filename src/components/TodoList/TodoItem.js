import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({completed, text, editable, onClick}) => {
  return (
    <span className={styles.wrapper}>
      {editing ?
        <Input
          value={text}
          className={styles.input}
          inputRef={input => this.input = input}
        /> :
        <em
          className={completed ? styles.completed : ''}
          onClick={onStateChange}
        >
          {text}
        </em>
      }
      {editable &&
        <Button onClick={() => this.handleEdit()}>
          {editing ? 'Update' : 'Edit'}
        </Button>
      }
    </span>
  );
};

TodoItem.propTypes = {

};

export default TodoItem;
