import React, { Component } from 'react';

import CompShopItem from './CompShopItem';

export default class CompShopCategory extends Component {
	buildItems(){
		if(this.props.data){	
			let filter = this.props.filters;

			return this.props.data.map((element, index) => {return <CompShopItem 
																	key={"compshopitem-" + this.props.category + index} 
																	name={element.title}
																	imgurl={element.image}
																	installments={element.installments}
																	price={element.price} />});
		}
		else{
			console.log("CompShopCategory buildItems(): No props.data. Loading or fetch error?")
			return <p>Carregando...</p>
		}
	}

	render(){
		console.log("Rendering CompShopCategory.");

		return (
			<div className="shop-item">
				{this.buildItems()}
			</div>
		);
	}
}