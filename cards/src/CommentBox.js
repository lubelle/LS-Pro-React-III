import React, { Component } from 'react';
import './App.css';

export default class CommentBox extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.togglePhoto = this.togglePhoto.bind(this);
		this.remainingCharacters = this.remainingCharacters.bind(this);
		this.overflowAlert = this.overflowAlert.bind(this);
		this.state = {
			text: "",
			photoAdded: false
		};
	}
	
  handleChange(event){
    this.setState({text: event.target.value});
  }
  togglePhoto(event){
    this.setState({photoAdded: !this.state.photoAdded});
  }
  remainingCharacters(){
    if(this.state.photoAdded){
      return 200 - 23 - this.state.text.length;
    } else {
      return 200 - this.state.text.length;
    }
  }
  overflowAlert(event){
    if(this.remainingCharacters() < 0){
      if(this.state.photoAdded){
          var beforeOverflowText = this.state.text.substring(200 - 23 - 10, 200 - 23);
          var overflowText = this.state.text.substring(200 - 23);
      } else {
        var beforeOverflowText = this.state.text.substring(200 - 10, 200);
        var overflowText = this.state.text.substring(200);
      }
      return (
        <div className="alert">
          <strong>Ouch! Too Long: </strong>&nbsp;...{beforeOverflowText}
          <strong>{overflowText}</strong>
        </div>
      );
    } else {
      return "";
    }
  }
	render(){
		return (
			<div className="commentbox">
			{ this.overflowAlert() }
				<textarea placeholder="Comment:" className="form-control" onChange={this.handleChange}></textarea><br />
				<span>{ this.remainingCharacters() } characters remaining</span>
				<button className="button big-btn" onClick={ this.togglePhoto }>{ this.state.photoAdded ? " Photo Added " : " Add Photo "}</button>
				<button className="button big-btn" disabled={ this.remainingCharacters() === 200 }>Comment</button>
			</div>
		);
	}
}	