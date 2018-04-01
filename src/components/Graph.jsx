import React from 'react';
import { connect } from 'react-redux';
import { LineChart } from 'react-d3';

const mapStateToProps = (state) => {
  return ({
    tradingValues: state.updateTradingValues.tradingValues ? state.updateTradingValues.tradingValues : [],
  });
};

class Graph extends React.Component {
  render() {
    let tradingValues = this.props.tradingValues;

    if (tradingValues.length === 0) {
      return null;
    }

    const series1 = [];
    const series2 = [];

    tradingValues.forEach((value) => {
      series1.push({ x: value.index, y: value.stocks.CAC40 });
      series2.push({ x: value.index, y: value.stocks.NASDAQ });
    });

    tradingValues = [
      {
        name: 'CAC40',
        values: series1,
        strokeWidth: 3,
        strokeDashArray: '5,5',
      },
      {
        name: 'NASDAQ',
        strokeWidth: 1,
        strokeDashArray: '5,5',
        values: series2,
      },
    ];

    return (
      <LineChart
        legend
        data={tradingValues}
        width={1000}
        height={400}
        title="Line Chart"
        yAxisLabel="CAC40 - NASDAQ"
        xAxisLabel="Index"
        gridHorizontal
      />
    );
  }
}

export default connect(mapStateToProps)(Graph);
