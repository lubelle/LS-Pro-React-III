const posts = [
	{
		title: '#MyGarden',
		author: 'Amber',
		imgUrl: 'http://mybeadingstudio.com/assets/cards_006.jpg'
	},
	{
		title: '#MyGarden',
		author: 'Belle',
		imgUrl: 'http://mybeadingstudio.com/assets/cards_002.jpg'
	},
	{
		title: '#MyGarden',
		author: 'Cindy',
		imgUrl: 'http://mybeadingstudio.com/assets/cards_003.jpg'
	},
	{
		title: '#MyGarden',
		author: 'Daisy',
		imgUrl: 'http://mybeadingstudio.com/assets/cards_004.jpg'
	},
	{
		title: '#MyGarden',
		author: 'Emily',
		imgUrl: 'http://mybeadingstudio.com/assets/cards_005.jpg'
	}	
];
import React, { Component } from 'react';
import Card from './Card';
import './App.css';

export default class Body extends Component{
	render(){
		return (
			<div className="body">
			{ posts.map((post)=>{return (<Card title={post.title} author={post.author} imgUrl={post.imgUrl} />);}) }
			</div>
		);
	}
}