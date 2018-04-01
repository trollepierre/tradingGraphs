import React from 'react';
import { connect } from 'react-redux';
import { LineChart } from 'react-d3';

const mapStateToProps = (state) => {
  const tradingValues = state.updateTradingValues.tradingValues ? state.updateTradingValues.tradingValues : [];
  // console.log(tradingValues);
  // const filter = tradingValues.filter(val => val.stocks['CAC40'] >= 1);
  // if (filter.length > 1) {
  //   console.log('gagne');
  // }
  return ({
    tradingValues,
  });
};

class Graph extends React.Component {
  render() {
    // console.log('render du Graph');
    let tradingValues = this.props.tradingValues;

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

    if (this.props.tradingValues.length === 0) {
      return null;
    }

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
