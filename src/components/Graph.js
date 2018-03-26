import React from 'react';
import {connect} from 'react-redux'
import { LineChart } from 'react-d3';

const mapStateToProps = (state) => {
  let tradingValues = state.tradingValues ? state.tradingValues : [];
  return ({
    tradingValues
  });
}

class Graph extends React.Component {
  render() {
    let tradingValues = this.props.tradingValues;

    let series1 = [];
    let series2 = [];
    tradingValues.forEach(value => {
      series1.push({x: value.index, y: value.stocks['CAC40']});
      series2.push({x: value.index, y: value.stocks['NASDAQ']});
    })
    tradingValues = [
      {
        name: "CAC40",
        values: series1,
        strokeWidth: 3,
        strokeDashArray: "5,5",
      },
      {
        name: "NASDAQ",
        strokeWidth: 1,
        strokeDashArray: "5,5",
        values: series2
      }
    ];

    if (this.props.tradingValues.length === 0) {
      return null;
    }

    return (
      <LineChart
        legend={true}
        data={tradingValues}
        width={1000}
        height={400}
        title="Line Chart"
        yAxisLabel="CAC40 - NASDAQ"
        xAxisLabel="Index"
        gridHorizontal={true}
      />
    );
  }
}

export default connect(mapStateToProps)(Graph)