import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import Graph from './Graph';
import { updateTradingValues } from '../actions/updateTradingValuesActions';

const mapStateToProps = (state) => {
  return ({
    tradingValues: state.updateTradingValuesReducers.tradingValues,
    updatedValues: state.updateTradingValuesReducers.updatedValues
  });
};

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.dispatchUpdateTradingValues = this.dispatchUpdateTradingValues.bind(this);
  }

  componentDidMount() {
    this.dispatchUpdateTradingValues()
  }

  dispatchUpdateTradingValues() {
    console.log('this.props');
    console.log(this.props);
    console.log(this.props.tradingValues);
    console.log(this.props.updatedValues);

    const { dispatch } = this.props
    dispatch(updateTradingValues())
  }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  //   const { dispatch } = this.props
  //   dispatch(updateTradingValues())
  // }

  render() {

    const layoutGraph = {
      padding: '10px',
    };
    const layoutTable = {
      padding: '20px',
    };

    return (
      <div>
        <h1>Trading Values</h1>
        <button onClick={this.dispatchUpdateTradingValues}>Update please</button>
        <div style={layoutGraph}>
          <Graph tradingValues={this.props.tradingValues}/>
        </div>
        <div style={layoutTable}>
          <Table tradingValues={this.props.tradingValues}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Layout)