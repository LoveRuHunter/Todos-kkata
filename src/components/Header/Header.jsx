import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from '../NewTaskForm';

import './Header.css';

export default class Header extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    title: '',
  };

  render() {
    const { onAddedSubmit, onSearch, title, placeholder } = this.props;

    return (
      <header className="header">
        <h1>{title}</h1>
        <NewTaskForm onAddedSubmit={onAddedSubmit} onSearch={onSearch} placeholder={placeholder} />
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  onAddedSubmit: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  onSearch: PropTypes.func,
};
Header.defaultProps = {
  placeholder: 'What needs to be done?',
  title: 'Todos',
};
