import React, { Component } from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  onItemChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  handSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onAddedSubmit(this.state.label);
    this.setState({
      label: '',
    });
  };

  onSearch = (e) => {
    const term = e.target.value;
    // eslint-disable-next-line react/no-unused-state
    this.setState({ term });
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onSearch(term);
  };

  render() {
    const { placeholder } = this.props;

    return (
      <form onSubmit={this.handSubmit} onChange={this.onSearch}>
        <input
          className="new-todo"
          type="text"
          onChange={this.onItemChange}
          placeholder={placeholder}
          /* eslint-disable-next-line react/destructuring-assignment */
          value={this.state.label}
        />
      </form>
    );
  }
}
NewTaskForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
};
NewTaskForm.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  label: '',
};
