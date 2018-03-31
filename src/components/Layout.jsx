import React from 'react';
import { connect } from 'react-redux';
import Table from './Table.jsx';
import Graph from './Graph.jsx';
import { updateTradingValues } from '../store/actions/updateTradingValuesActions';

const mapStateToProps = (state) => {
  console.log('mapStateToProps');
  console.log(state);
  return ({
    tradingValues: state.tradingValues,
    updatedValues: state.updatedValues,
  });
};

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.dispatchUpdateTradingValues = this.dispatchUpdateTradingValues.bind(this);
  }

  componentDidMount() {
    this.dispatchUpdateTradingValues();
  }

  dispatchUpdateTradingValues() {
    const { dispatch } = this.props;
    dispatch(updateTradingValues());
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    const { dispatch } = this.props;
    dispatch(updateTradingValues());
  }

  render() {
    const layoutGraph = {
      padding: '10px',
    };
    const layoutTable = {
      padding: '20px',
    };

    console.log('render Layout');

    return (
      <div>
        <h1>Trading Values</h1>
        <button onClick={this.dispatchUpdateTradingValues}>Update please</button>
        <div style={layoutGraph}>
          <Graph tradingValues={this.props.tradingValues} />
        </div>
        <div style={layoutTable}>
          <Table tradingValues={this.props.tradingValues} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Layout);
