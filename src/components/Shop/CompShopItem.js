import React, { Component } from 'react';

export default class CompShopItem extends Component {
	buildComponent(){

		let toCurrency = (float) => {return float.toFixed(2).toString().replace(".", ",")}

		let price = toCurrency(this.props.price);

		let installmentsValue = toCurrency(this.props.installments.value);

		return(
			<span>
			<p><b>{this.props.name}</b></p>
			<img src={this.props.imgurl} alt={this.props.name} />
			<p>R$ {price}</p>
			<p>ou {this.props.installments.number}X {installmentsValue} sem juros</p>
			</span>
		)
	}

	render(){
		return (
			<div className="shop-item">
				{this.buildComponent()}
			</div>
		);
	}
}