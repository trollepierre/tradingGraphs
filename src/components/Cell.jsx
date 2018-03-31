import React from 'react';
import EditableCell from './EditableCell.jsx';
import RenderingCell from './RenderingCell.jsx';
import { connect } from 'react-redux';
import { updateTradingValue } from '../store/actions/updateTradingValueAction';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.editModeChange = this.editModeChange.bind(this);
    this.updateCellValue = this.updateCellValue.bind(this);
    this.state = { isEditMode: props.isEditMode }
  }

  editModeChange() {
    console.log('in edit mode');
    this.setState({ isEditMode: true });
  }

  updateCellValue(newValue) {
    console.log(newValue);
    const { dispatch, value, type } = this.props;
    dispatch(updateTradingValue(newValue, value.index, type));
  }

  render() {
    return this.state.isEditMode ?
      <EditableCell onNewValue={this.updateCellValue} />
      :
      <RenderingCell
        onEditMode={this.editModeChange}
        value={this.props.value}
        type={this.props.type}
      />;
  }
}

export default connect()(Cell);
