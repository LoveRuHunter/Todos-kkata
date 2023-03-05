import React, { Component } from 'react'
import './NewTaskForm.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  state = {
    label: '',
  }
  onItemChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }
  handSubmit = (e) => {
    e.preventDefault()
    this.props.onAddedSubmit(this.state.label)
    this.setState({
      label: '',
    })
  }

  onSearch = (e) => {
    const term = e.target.value
    this.setState({ term })
    this.props.onSearch(term)
  }
  render() {
    const { placeholder } = this.props

    return (
      <form onSubmit={this.handSubmit} onChange={this.onSearch}>
        <input
          className="new-todo"
          type="text"
          onChange={this.onItemChange}
          placeholder={placeholder}
          value={this.state.label}
        />
      </form>
    )
  }
}
NewTaskForm.propTypes = {
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
}
NewTaskForm.defaultProps = {
  label: '',
}
