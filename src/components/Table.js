import React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';

const mapStateToProps = (state) => {
  let tradingValues = state.tradingValues ? state.tradingValues : [];
  return ({
    tradingValues
  });
}

export class Table extends React.Component {

  render() {
    const solidBordered = {
      'border': '1px solid grey',
    };

    return (
      <div className="container">
        <table style={solidBordered}>
          <tbody>
          <tr>
            <th>CAC40</th>
            {this.props.tradingValues.map(value =>
              <Cell key={`${'CAC40'}-${value.index}`}
                    value={value}
                    type='CAC40'
                    isEditMode={false}
              />
            )}
          </tr>
          <tr>
            <th>NASDAQ</th>
            {this.props.tradingValues.map(value =>
              <Cell
                key={`${'NASDAQ'}-${value.index}`}
                value={value}
                type='NASDAQ'
                isEditMode={false}
              />
            )}
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Table)