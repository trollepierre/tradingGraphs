import React from "react"
import {connect} from 'react-redux'
import axios from 'axios';
import {updateTradingValues} from '../actions/updateTradingValuesActions'

const mapStateToProps = (state) => ({
  tradingValues:state.tradingValues
})


export class Table extends React.Component{
  display(value, columnName) {
    return value.stocks[columnName];
  }

  componentDidMount() {
    axios.get('http://localhost:8000/?count=20')
      .then(res => {
        const tradingValues = res.data;
        this.props.dispatch(updateTradingValues(tradingValues))
      })
  }

  render(){
		return(
			<div className="container">
				<table>
					<tbody>
					<tr>
						<th>CAC40</th>
            { this.props.tradingValues.map(value => <td key={`CAC40-${value.index}`}>{ this.display(value, 'CAC40') }</td>) }
					</tr>
					<tr>
						<th>NASDAQ</th>
            { this.props.tradingValues.map(value => <td key={`NASDAQ-${value.index}`}>{ this.display(value, 'NASDAQ') }</td>) }
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Table)