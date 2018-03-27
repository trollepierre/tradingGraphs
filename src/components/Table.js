import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  let tradingValues = state.tradingValues ? state.tradingValues : [];
  return ({
    tradingValues
  });
}

export class Table extends React.Component {

  static truncate(number) {
    return Math.round(100 * number) / 100;
  }

  display(value, columnName) {
    return Table.truncate(value.stocks[columnName]);
  }

  render() {
    return (
      <div className="container">
        <table>
          <tbody>
          <tr>
            <th>CAC40</th>
            { this.props.tradingValues.map(value => <td
              key={`CAC40-${value.index}`}>{ this.display(value, 'CAC40') }</td>) }
          </tr>
          <tr>
            <th>NASDAQ</th>
            { this.props.tradingValues.map(value => <td
              key={`NASDAQ-${value.index}`}>{ this.display(value, 'NASDAQ') }</td>) }
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Table)