import React, { Component } from 'react';
import './App.css';

export default class Image extends Component{
	render(){
		return (
			<div className="image">
			  <img src={this.props.src} alt={this.props.alt} />
			</div>
		);
	}
}	