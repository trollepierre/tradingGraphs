import React from 'react';
import { connect } from 'react-redux';
import EditableCell from './EditableCell.jsx';
import RenderingCell from './RenderingCell.jsx';
import { addSpecificValueAction } from '../store/actions/addSpecificValueAction';

const mapStateToProps = (state) => {
  return ({
    specificValues: state.updateSpecificValue.specificValues,
  });
};

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.editModeChange = this.editModeChange.bind(this);
    this.updateCellValue = this.updateCellValue.bind(this);
    this.state = { isEditMode: props.isEditMode }
  }

  editModeChange() {
    this.setState({ isEditMode: true });
  }

  updateCellValue(newValue) {
    const { dispatch, value, type } = this.props;
    dispatch(addSpecificValueAction(newValue, value.index, type, this.props.specificValues));
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

export default connect(mapStateToProps)(Cell);
