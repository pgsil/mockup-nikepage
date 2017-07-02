import React, { Component } from 'react';

export default class CompShopItem extends Component {
	constructor(props){
		super();

		this.state = {hovered: false};

		this.handleBuyButtonClick = this.handleBuyButtonClick.bind(this);
		this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
		this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
	}

	componentWillMount(){
		// request permission on page load
		document.addEventListener('DOMContentLoaded', function () {
		  if (Notification.permission !== "granted")
		    Notification.requestPermission();
		});
	}

	handleBuyButtonClick(){
	  if (!Notification) {
	    return;
	  }

	  if (Notification.permission !== "granted")
	    Notification.requestPermission();
	  else {
	    let notification = new Notification('Adicionado ao carrinho!', {
	      icon: 'http://www.raphaelfabeni.com.br/rv/images/cart.png',
	      body: "Você adicionou " + this.props.name + " ao carrinho!",
	    });
	    setTimeout(function(){notification.close()}, 2000);  
	  }
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

				<div className="has-text-centered"><br/>{this.state.hovered ? <button className="button is-warning button-buy" onClick={this.handleBuyButtonClick}>COMPRAR</button> : <button className="button is-warning button-buy" style={{opacity: 0}} >COMPRAR</button>}</div>
			</span>
		);
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