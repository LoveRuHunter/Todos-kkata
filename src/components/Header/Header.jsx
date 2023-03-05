import React, { Component } from 'react'
import NewTaskForm from '../NewTaskForm'
import PropTypes from 'prop-types'

import './Header.css'

export default class Header extends Component {
  state = {
    title: '',
  }
  render() {
    const { onAddedSubmit, onSearch, title, placeholder } = this.props

    return (
      <header className="header">
        <h1>{title}</h1>
        <NewTaskForm onAddedSubmit={onAddedSubmit} onSearch={onSearch} placeholder={placeholder} />
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onAddedSubmit: PropTypes.func,
  onSearch: PropTypes.func,
}
Header.defaultProps = {
  placeholder: 'What needs to be done?',
  title: 'Todos',
}
