import React, { Component } from 'react';

export default class CompBigBanner extends Component {	
	render(){
		return (
			<div className="big-banner" style={{ 	backgroundSize: this.props.bgSizeOverride,
											backgroundImage: 'url('+ this.props.imgUrl + ')',
											backgroundColor: this.props.bgColor,
											backgroundPosition: this.props.bgPos,
											height: this.props.height,
											width: this.props.widthOverride}}> &nbsp; </div>
		);
	}
}