import React, { Component } from 'react';

import './TasksFilter.css';
import PropTypes from 'prop-types';

export default class TasksFilter extends Component {
  buttons = [
    {
      name: 'all',
      label: 'All',
    },
    {
      name: 'active',
      label: 'Active',
    },
    {
      name: 'completed',
      label: 'Completed',
    },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'selected' : 'btn';
      return (
        <li className="selected" key={name}>
          <button type="button" className={`${clazz}`} key={name} onClick={() => onFilterChange(name)}>
            {label}
          </button>
        </li>
      );
    });

    return <ul className={'filters'}>{buttons}</ul>;
  }
}
TasksFilter.propTypes = {
  onFilterChange: PropTypes.func,
  filter: PropTypes.string,
};
TasksFilter.defaultProps = {
  buttons: 'all',
};
