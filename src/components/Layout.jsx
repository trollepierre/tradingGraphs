import React from 'react';
import { connect } from 'react-redux';
import Table from './Table.jsx';
import Graph from './Graph.jsx';
import { updateTradingValues } from '../store/actions/updateTradingValuesActions';

const mapStateToProps = (state) => {
  const tradingValues = state.fetchAllTradingValues.tradingValues;
  return ({
    tradingValues: tradingValues,
    updatedValues: state.fetchAllTradingValues.updatedValues,
  });
};

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.dispatchUpdateTradingValues = this.dispatchUpdateTradingValues.bind(this);
  }

  componentDidMount() {
    this.dispatchUpdateTradingValues();
    setInterval(this.dispatchUpdateTradingValues, 1000);
  }

  dispatchUpdateTradingValues() {
    const { dispatch } = this.props;
    dispatch(updateTradingValues());
  }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  //   const { dispatch } = this.props;
  //   dispatch(updateTradingValues());
  // }

  render() {
    const layoutGraph = {
      padding: '10px',
    };
    const layoutTable = {
      padding: '20px',
    };

    console.log('render Layout');
    console.log(this.props.tradingValues);

    return (
      <div>
        <h1>Trading Values</h1>
        <button onClick={this.dispatchUpdateTradingValues}>Update please</button>
        <div style={layoutGraph}>
          <Graph/>
        </div>
        <div style={layoutTable}>
          <Table/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Layout);
