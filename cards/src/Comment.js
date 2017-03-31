import React, { Component } from 'react';
import './App.css';

export default class Comments extends Component{
	render(){
		return (
			<div>
			{this.props.postIt} 
			</div>
		);
	}
}	