import React from 'react';
import Task from '../Task';
import './TaskList.css';
import PropTypes from 'prop-types';

const TaskList = ({ todos, onDeleted, onToggleCompleted, editItem }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <Task
        {...itemProps}
        key={item.id}
        onDeleted={() => onDeleted(id)}
        id={id}
        onToggleCompleted={() => onToggleCompleted(id)}
        editItem={editItem}
      />
    );
  });

  return (
    <section className="main">
      <ul className="todo-list">{elements}</ul>
    </section>
  );
};

TaskList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
};
TaskList.defaultProps = {
  todos: {},
};

export default TaskList;
