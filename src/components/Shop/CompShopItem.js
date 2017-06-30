import React, { Component } from 'react';

export default class CompShopItem extends Component {
	constructor(props){
		super();

		this.state = {hovered: false};

		this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
		this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
	}

	onMouseEnterHandler(){
		this.setState({hovered: true});
	}
	onMouseLeaveHandler(){
		this.setState({hovered: false});
	}

	buildComponent(){

		let toCurrency = (float) => {return float.toFixed(2).toString().replace(".", ",")}

		let price = toCurrency(this.props.price);

		let installmentsValue = toCurrency(this.props.installments.value);

		let hightoptype = this.props.hightop ? "Cano Alto" : "Cano Baixo";

		return(
			<span>
				<img src={this.props.imgurl} alt={this.props.name} />

				<div className="shop-item-personalize level-left">
					<img src="./images/personalize.jpg" alt="personalize" /><span className="shop-item-personalize-spacer">&nbsp; </span> PERSONALIZE
				</div>

				<p className="shop-item-title"><b>{this.props.name}</b></p>
				<p className="shop-item-type">{hightoptype}</p>

				<p className="shop-item-price">R$ {price}</p>
				<p className="shop-item-installments">ou {this.props.installments.number}X {installmentsValue} sem juros</p>

				<div className="has-text-centered"><br/>{this.state.hovered ? <button className="button is-warning button-buy">COMPRAR</button> : <button className="button is-warning button-buy" style={{opacity: 0}} >COMPRAR</button>}</div>
			</span>
		)
	}

	render(){
		return (
			<div className="shop-item" onMouseEnter={this.onMouseEnterHandler}
					onMouseLeave={this.onMouseLeaveHandler}>
				{this.buildComponent()}
			</div>
		);
	}
}