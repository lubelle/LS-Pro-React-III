import React, { Component } from 'react';
import Comment from './Comment';
import './App.css';

export default class Comments extends Component{
	render(){
		return (
			<div className="comments">
			  <Comment postIt={'comment'} />
			</div>
		);
	}
}	