import {LineChart, Line, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import React, {Component} from 'react';

export default class GraphComponent extends Component{

	render () {
  	return (
    	<LineChart width={500} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Legend />
       <Line type="monotone" dataKey="EUR" stroke="#8884d8" />
       <Line type="monotone" dataKey="USD" stroke="#82ca9d" />
      </LineChart>
    );
  }

}
