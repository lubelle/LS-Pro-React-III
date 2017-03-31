const posts = [
	{
		title: 'My Post',
		author: 'Belle',
		content: 'Life is good'
	},
	{
		title: 'My Post',
		author: 'Louis',
		content: 'Life is better'
	},
	{
		title: 'My Post',
		author: 'Steven',
		content: 'Life is wonderful'
	},
	{
		title: 'My Post',
		author: 'John',
		content: 'Life is super'
	}
];
import React, { Component } from 'react';
import Card from './Card';
import './App.css';
export default class Feed extends Component{
  render(){
	  return (
	    <div className="feed">
		{ posts.map( (post)=>{return <Card title={post.title} author={post.author} content={post.content} />;} ) }
		</div>
	  );
  }
}