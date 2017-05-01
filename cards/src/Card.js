import React, { Component } from 'react';
import CommentBox from './CommentBox';
import Image from './Image';
import './App.css';

export default class Card extends Component{
	static propTypes = {
		title: React.PropTypes.string,
		author: React.PropTypes.string,
		imgUrl: React.PropTypes.string
	};
	
	render(){
	  return (
		<div className="card">
			<h2>{this.props.title}</h2>
			<p>{this.props.author}</p>
			<Image src={this.props.imgUrl} />
			<CommentBox />
		</div>
		);
	}
}