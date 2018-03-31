import React from 'react';

const RenderingCell = props => {
  function truncate(number) {
    return Math.round(100 * number) / 100;
  }

  function display(value, columnName) {
    return truncate(value.stocks[columnName]);
  }

  const spacedTd = {
    padding: '10px',
    fontSize: '20px',
  };

  function editMode(e) {
    e.preventDefault();
    props.onEditMode();
  }

  return (
    <td style={spacedTd} onClick={editMode}>
      {display(props.value, props.type)}
    </td>
  );
};

export default RenderingCell;