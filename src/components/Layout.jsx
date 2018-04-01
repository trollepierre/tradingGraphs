import React from 'react';
import { connect } from 'react-redux';
import Table from './Table.jsx';
import Graph from './Graph.jsx';
import { updateTradingValuesAction } from '../store/actions/updateTradingValuesActions';

const mapStateToProps = (state) => {
  const tradingValues = state.updateTradingValues.tradingValues;
  return ({
    tradingValues: tradingValues,
    updatedValues: state.updateSpecificValue.updatedValues,
  });
};

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.dispatchUpdateTradingValues = this.dispatchUpdateTradingValues.bind(this);
  }

  componentDidMount() {
    this.dispatchUpdateTradingValues();
    // setInterval(this.dispatchUpdateTradingValues, 10000);
  }

  dispatchUpdateTradingValues() {
    // console.log('Layout va dispatch une updateTradingValuesAction');
    const { dispatch } = this.props;
    dispatch(updateTradingValuesAction());
  }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  //   const { dispatch } = this.props;
  //   dispatch(updateTradingValuesAction());
  // }

  render() {
    const layoutGraph = {
      padding: '10px',
    };
    const layoutTable = {
      padding: '20px',
    };

    console.log('render Layout');
    console.log('this.props.tradingValues');
    console.log(this.props.tradingValues);
    console.log('this.props.updatedValues');
    console.log(this.props.updatedValues);

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
