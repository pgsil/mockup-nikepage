import React, { Component } from 'react';

export default class FilterCheckbox extends Component{
	constructor(props){
		super();

		this.state = {checked: false};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		this.props.change(e.target.name);

		this.setState({checked: e.target.checked});
	}

	chooseStyle(){
		if (this.state.checked){
			return {opacity: 1}
		}
		else{
			return {opacity: 0.7}
		}
	}

	render(){
		return(
			<label className="filter-item space-r20" onChange={this.handleClick} style={this.chooseStyle()}>
				<div className="level filter-inner" htmlFor={this.props.name} style={this.chooseStyle()}>
					<input type="checkbox" className="checkbox" name={this.props.name}  checked={this.state.checked} />
					<div className="level-left">{this.props.label}</div>
				</div>
			</label>
		)
	}
}