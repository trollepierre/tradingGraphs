import React from 'react';

const EditableCell = (props) => {
  function handleValueChange(event) {
    props.onNewValue(event.target.value);
  }

  const shortWidth = {
    maxWidth: '28px',
    padding: '10px',
    fontSize: '20px',
  };

  return (
    <td>
      <input
        onChange={handleValueChange}
        style={shortWidth}
        type="text"
        name="newTradingValue"
      />
    </td>
  );
};

export default EditableCell;
