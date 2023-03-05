import React, { Component } from 'react';

import TaskList from '../TaskList';
import Footer from '../Footer';
import Header from '../Header';
import './App.css';

export default class App extends Component {
  maxId = 3;

  state = {
    todoData: [],
    // eslint-disable-next-line react/no-unused-state
    term: '',
    filter: 'all',
  };

  onAddedSubmit = (label) => {
    const newItem = {
      completed: false,
      id: this.maxId++,
      date: new Date(),
      label,
    };
    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem],
    }));
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.splice(0, idx), ...todoData.splice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  editItem = (id, text) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo = { ...todo, label: text };
        }
        return todo;
      }),
    }));
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = {
        ...oldItem,
        completed: !oldItem.completed,
      };
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  // eslint-disable-next-line class-methods-use-this,react/sort-comp
  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((i) => !i.completed);
      case 'completed':
        return items.filter((i) => i.completed);
      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  onSearch = (term) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ term });
  };

  clearComponent = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((el) => !el.completed),
    }));
  };

  render() {
    const { todoData, filter } = this.state;

    const visibleItems = this.filter(todoData, filter);

    const doneCount = todoData.filter((el) => el.completed).length;
    const todoCount = todoData.length - doneCount;

    return (
      <section className="todoapp">
        <Header onAddedSubmit={this.onAddedSubmit} onSearch={this.onSearch} />
        <TaskList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleCompleted={this.onToggleCompleted}
          editItem={this.editItem}
        />
        <Footer
          todo={todoCount}
          filter={filter}
          onFilterChange={this.onFilterChange}
          clearComponent={this.clearComponent}
        />
      </section>
    );
  }
}
