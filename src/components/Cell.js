import React from 'react';

const Cell = props => {
  function truncate(number) {
    return Math.round(100 * number) / 100;
  }

  function display(value, columnName) {
    return truncate(value.stocks[columnName]);
  }

  const paddedTd = {
    padding: '5px',
  };

  return (
    <td style={paddedTd}>
      {display(props.value, props.type)}
    </td>
  );
};

export default Cell;