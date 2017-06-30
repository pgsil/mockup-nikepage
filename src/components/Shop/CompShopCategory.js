import React, { Component } from 'react';
import Slider from 'react-slick';

import CompShopItem from './CompShopItem';

export default class CompShopCategory extends Component {
	buildItems(){
		/*IMPROVE THIS*/
		/*IMPROVE THIS*/
		/*IMPROVE THIS*/
		if(this.props.data){
			let filters = this.props.filters;

			let componentsReady = this.props.data.map((element, index) => {
				let componentMapped = (<div key={"compshopitem-" + this.props.category + index + "-container"}><CompShopItem 
								key={"compshopitem-" + this.props.category + index} 
								name={element.title}
								imgurl={element.image}
								installments={element.installments}
								hightop={element["high-top"]}
								price={element.price} /></div>)

				/*No filter, just return components*/
				if(filters.length === 0){
					return componentMapped;
				}
				/*If we have filters:*/
				else{
					let match = true;

					let filterHighTops = (filters.indexOf('high-top') > - 1);
					let filterLowTops = (filters.indexOf('low-top') > -1);

					if(filterHighTops && !filterLowTops && !element['high-top']){
						match = false;
					}

					if(filterLowTops && !filterHighTops && element['high-top']){
						match = false;
					}

					if( ((filters.indexOf("campo") > -1) || (filters.indexOf("society") > -1)) && filters.indexOf(element.category) < 0){
						match = false;
					}

					return match ? componentMapped : null;
				}
			});

			/*Checks if an array is all nulls*/
			function allNull(array) {
			    for (var i = 0; i < array.length; i++)
			        if (array[i] !== null)
			            return false;
			    return true;
			}

			/*Only returns the components if there were hits after filtering*/
			if(allNull(componentsReady)){
				return (<div><p className="shop-item-empty">Sem resultados!</p><p className="shop-item-empty">Use filtros diferentes!</p></div>);
			}
			else{
				return componentsReady;
			}
		}
		else{
			console.log("CompShopCategory buildItems(): No props.data. Loading or fetch error?")
			return <p>Carregando...</p>
		}
	}

	render(){
		/*does this belong here*/
		var slideSettings = {
		  dots: true,
		  infinite: false,
		  speed: 500,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  responsive: [
					    {
					      breakpoint: 1000,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 3,
					        centerMode: false
					      }
					    },
					    {
					      breakpoint: 870,
					      settings: {
					        slidesToShow: 2,
					        slidesToScroll: 2
					      }
					    },
					    {
					      breakpoint: 480,
					      settings: {
					        slidesToShow: 1,
					        slidesToScroll: 1,
					        arrows: false
					      }
					    },
					    {
					      breakpoint: 400,
					      settings: {
					        slidesToShow: 1,
					        slidesToScroll: 1,
					        centerMode: true,
					        arrows: false,
					        mobileFirst: true
					      }
					    },
		  ]
		};

		return (
			<div className="shop-category">
				<p className="shop-category-title">{this.props.title}</p>
				<br/>
				<Slider {...slideSettings}>
					{this.buildItems()}
				</Slider>
			</div>
		);
	}
}