import React from "react";
import {connect} from 'react-redux'
import Table from "./Table"
import Graph from './Graph';
import {
  updateTradingValues,
} from '../actions/updateTradingValuesActions'

const mapStateToProps = (state) => ({
  tradingValues: state.tradingValues
})

export class Layout extends React.Component{
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(updateTradingValues())
  }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  //   const { dispatch } = this.props
  //   dispatch(updateTradingValues())
  // }

	render(){
		return(
			<div>
				 <h1>Trading Values</h1>
				 <Graph tradingValues={this.props.tradingValues}/>
				 <Table tradingValues={this.props.tradingValues}/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Layout)