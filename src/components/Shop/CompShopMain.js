import React, { Component } from 'react';

import CompShopCategory from './CompShopCategory';
import FilterCheckbox from '../FilterCheckbox';

export default class CompShopMain extends Component {
	constructor(props){
		super();
		this.state = {filters: [], json: {}};

		this.handleCheckbox = this.handleCheckbox.bind(this);
	}

	componentWillMount(){
		console.log("Mounting CompShopMain.");

		fetch('http://www.raphaelfabeni.com.br/rv/data.json')
		.then((response) => response.json())
		.then((json) => {this.setState({json: json})})
		.then(() => console.log("JSON fetch success"))

		.catch((err) => {console.log("JSON fetch error at componentWillMount in CompShopMain: " + err)});
	}

	handleCheckbox(value){
		let catgo = value;		

		if(this.state.filters.indexOf(catgo) > -1){
			/*Remove from filters because it's there*/
			let result = this.state.filters;
			result.splice(this.state.filters.indexOf(catgo), 1);
			this.setState({filters: result});			
		}
		else{
			/*Add to filters because it's not there*/
			let result = this.state.filters;
			result.push(catgo);
			this.setState({filters: result});
		}
	}

	conditionalRender(){
		if("json" in this.state){
			return 
		}
		else{
			return <p>Loading!</p>
		}
	}

	render(){
		return (
			<div className="container">
				<br/><br/>

				<div className="level filters-main">
					<div className="level-left">
						<span className="filter-title space-r40"><b>Chuteiras HyperVenom:</b></span>

						<span>&nbsp;</span>

						<FilterCheckbox name="high-top" label="Cano alto" change={this.handleCheckbox} />

						<FilterCheckbox name="low-top" label="Cano baixo" change={this.handleCheckbox} />

						<FilterCheckbox name="campo" label="Futebol Campo" change={this.handleCheckbox} />

						<FilterCheckbox name="society" label="Futebol Society" change={this.handleCheckbox} />
					</div>

					<div className="level-right">
						<button className="button is-dark button-showall">TODOS OS PRODUTOS</button>
					</div>
				</div>
				<div className="separator">&nbsp;</div>

				<div className="itemslist">
					<CompShopCategory title="Mais vendidos" data={this.state.json["best-sellers"]} category="best-sellers" filters={this.state.filters} />

					<br/>

					<CompShopCategory title="Lançamentos" data={this.state.json["releases"]} category="releases" filters={this.state.filters} />
				</div>
			</div>
		);
	}
}