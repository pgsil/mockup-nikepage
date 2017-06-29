import React, { Component } from 'react';

import CompShopItem from './CompShopItem';

export default class CompShopCategory extends Component {
	buildItems(){
		if(this.props.data){	
			let filters = this.props.filters;

			return this.props.data.map((element, index) => {
				let componentMapped = (<CompShopItem 
								key={"compshopitem-" + this.props.category + index} 
								name={element.title}
								imgurl={element.image}
								installments={element.installments}
								price={element.price} />)

				/*No filter, just return components*/
				if(filters.length === 0){
					return componentMapped;
				}
				/*If we have filters:*/
				else{
					let match = true;

					if(((filters.indexOf("campo") > -1) || (filters.indexOf("society") > -1)) && filters.indexOf(element.category) < 0){
						match = false;
					}
					if(filters.indexOf('high-top') > -1 && !element['high-top']){
						match = false;
					}
					if(filters.indexOf('low-top') > -1 && element['high-top']){
						match = false;
					}

					return match ? componentMapped : null;
				}


			});
		}
		else{
			console.log("CompShopCategory buildItems(): No props.data. Loading or fetch error?")
			return <p>Carregando...</p>
		}
	}

	render(){
		return (
			<div className="shop-item">
				{this.buildItems()}
			</div>
		);
	}
}