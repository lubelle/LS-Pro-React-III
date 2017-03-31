import React, { Component } from 'react';
import Count from './Count';
import Comments from './Comments';
import Image from './Image';
import ImgOfAuthor from './ImgOfAuthor';
import './App.css';

export default class Card extends Component{
	static propTypes = {
		title: React.PropTypes.string,
		author: React.PropTypes.string,
		content: React.PropTypes.sring
	};
	
  render(){
	  return (
	    <div className="card">
		<h2>{this.props.title}</h2>
		<h3>{this.props.author}</h3>
		<p>{this.props.content}</p>
		

		<Image className="flex-item" src={this.props.imgUrl} />
		<Comments className="flex-item" />
		<Count className="flex-item" />
		</div>
	  );
  }
}