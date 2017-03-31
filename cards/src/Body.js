const posts = [
	{
		title: 'My Post',
		author: 'Belle',
		content: 'Life is good',
		imgUrl: 'http://mybeadingstudio.com/assets/img_portfolio_headshot.jpg'
	},
	{
		title: 'My Post',
		author: 'Louis',
		content: 'Life is better',
		imgUrl: ''
	},
	{
		title: 'My Post',
		author: 'Steven',
		content: 'Life is wonderful',
		imgUrl: ''
	}
];
import React, { Component } from 'react';
import Card from './Card';
import './App.css';

export default class Body extends Component{
	render(){
		return (
			<div className="body">
			{ posts.map(
				(post)=>{
					return (<Card title={post.title} author={post.author} content={post.content} imgUrl={post.imgUrl} />);
				}) }
			</div>
		);
	}
}