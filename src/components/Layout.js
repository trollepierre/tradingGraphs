import React from "react";
import Table from "./Table"
import Graph from './Graph';

export default class Layout extends React.Component{
	render(){	

		return(
			<div>
				 <h1>Trading Values</h1>
				 <Graph/>
				 <Table/>
			</div>
		);
	}
}