import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import Graph from './Graph';
import { updateTradingValues } from '../actions/updateTradingValuesActions';

const mapStateToProps = (state) => ({
  tradingValues: state.tradingValues
})

export class Layout extends React.Component {
  componentDidMount() {
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