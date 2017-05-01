import React, { Component } from 'react';
import './App.css';

export default class Image extends Component{
	constructor(props){
		super(props);
		this.state = {
			dimensions: {}
		};
		this.onImgLoad = this.onImgLoad.bind(this);
	}
	onImgLoad({target:img}){
		this.setState(
		{
			dimensions: { height: img.offsetHeight, width: img.offsetWidth}
		}
		);
	}
	render(){
		const {src} = this.props;
		const {height, width} = this.state.dimensions;
		return (
			<div className="image">
			  <img onLoad={this.onImgLoad} width="300" height="300" src={src} alt={this.props.alt} />
			</div>
		);
	}
}	