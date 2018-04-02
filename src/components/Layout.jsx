import React from 'react';
import { connect } from 'react-redux';
import Table from './Table.jsx';
import Graph from './Graph.jsx';
import { updateTradingValuesAction } from '../store/actions/updateTradingValuesActions';

const mapStateToProps = (state) =>
  ({
    tradingValues: state.updateTradingValues.tradingValues,
    specificValues: state.updateSpecificValue.specificValues,
  });

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
    dispatch(updateTradingValuesAction(this.props.specificValues));
  }

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
          <Graph />
        </div>
        <div style={layoutTable}>
          <Table />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Layout);
