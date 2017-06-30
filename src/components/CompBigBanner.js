import React, { Component } from 'react';

export default class CompBigBanner extends Component {	
	getDarken(){
		if(this.props.darken){
			let urlstr = 'url('+ this.props.imgUrl + ')';
			return "linear-gradient(" + "rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55) )," + urlstr;
		}
		else{
			return 'url('+ this.props.imgUrl + ')';
		}
	}
	getContents(){
		if(this.props.contents){
			return this.props.contents;
		}
		else{
			return <div>&nbsp;</div>
		}
	}

	render(){
		return (
			<div className="big-banner level has-text-centered is-mobile" style={{ 	
				background: this.getDarken(),
				backgroundSize: this.props.bgSizeOverride,
				backgroundColor: this.props.bgColor,
				backgroundPosition: this.props.bgPos,
				height: this.props.height,
				width: this.props.widthOverride}}>

				{this.getContents()}

			</div>
		);
	}
}