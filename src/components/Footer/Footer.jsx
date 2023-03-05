import React, { Component } from 'react'
import TasksFilter from '../TasksFilter/TasksFilter'
import PropTypes from 'prop-types'

import './Footer.css'

class Footer extends Component {
  render() {
    const { todo, filter, onFilterChange, clearComponent } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">{todo} items left</span>
        <TasksFilter filter={filter} onFilterChange={onFilterChange} />
        <button type="button" className="clear-completed" onClick={clearComponent}>
          Clear completed
        </button>
      </footer>
    )
  }
}

Footer.propTypes = {
  todo: PropTypes.number,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
  clearComponent: PropTypes.func,
}
Footer.defaultProps = {
  filter: 'All',
}
export default Footer
