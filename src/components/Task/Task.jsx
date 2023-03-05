import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KG from 'date-fns/locale/en-AU';
import { formatDistanceToNow } from 'date-fns';

class Task extends Component {
  state = {
    editing: false,
    value: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { editItem, id } = this.props;
    editItem(id, this.state.value);
    this.setState({ editing: false });
  };

  render() {
    const { onDeleted, onToggleCompleted, label, id, completed, date } = this.props;

    return (
      <li className={completed ? 'completed' : this.state.editing ? 'editing' : null}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed} onChange={onToggleCompleted} />
          <label>
            <span className="description" onClick={onToggleCompleted}>
              {label}
            </span>
            <span className="created">
              {`created ${formatDistanceToNow(date, {
                includeSeconds: true,
                locale: KG,
                addSuffix: true,
              })}`}
            </span>
          </label>
          <button
            className="icon icon-edit"
            onClick={() =>
              this.setState(({ editing }) => ({
                editing: !editing,
                value: this.props.label,
              }))
            }
            key={id}
          />
          <button className="icon icon-destroy" onClick={() => onDeleted(id)} />
        </div>
        {this.state.editing && (
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={(e) => this.setState({ value: e.target.value })}
              type="text"
              className="edit"
              value={this.state.value}
            />
          </form>
        )}
      </li>
    );
  }
}

Task.propTypes = {
  label: PropTypes.string,
  completed: PropTypes.bool,
  id: PropTypes.number,
  onToggleCompleted: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date),
  editItem: PropTypes.func,
};
Task.defaultProps = {
  completed: false,
};
export default Task;
