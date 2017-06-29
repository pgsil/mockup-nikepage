import React, { Component } from 'react';

import CompShopCategory from './CompShopCategory';

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

	handleCheckbox(e){
		let catgo = e.target.name;

		if(this.state.filters.indexOf(catgo) > -1){
			/*Remove from filters because it's there*/
			let result = this.state.filters;
			result.splice(this.state.filters.indexOf(catgo), 1);
			this.setState({filters: result});

			e.target.checked = false;
		}
		else{
			/*Add to filters because it's not there*/
			let result = this.state.filters;
			result.push(catgo);
			this.setState({filters: result});

			e.target.checked = true;
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

				<div className="level">
					<div className="level-left">
						<b>Chuteiras HyperVenom:</b>

						<span>&nbsp;</span>

						<label className="filter-item">
							<input type="checkbox" className="checkbox" name="high-top" onChange={this.handleCheckbox} />
							Cano alto
						</label>

						<label className="filter-item">
							<input type="checkbox" className="checkbox" name="low-top" onChange={this.handleCheckbox} />
							Cano baixo
						</label>

						<label className="filter-item">
							<input type="checkbox" className="checkbox" name="campo" onChange={this.handleCheckbox} />
							Futebol Campo
						</label>

						<label className="filter-item">
							<input type="checkbox" className="checkbox" name="society" onChange={this.handleCheckbox} />
							Futebol Society
						</label>
					</div>

					<div className="level-right">
						<button className="button is-dark">TODOS OS PRODUTOS</button>
					</div>
				</div>

				<div className="itemslist">
					<CompShopCategory title="Mais vendidos" data={this.state.json["best-sellers"]} category="best-sellers" filters={this.state.filters} />
					<br/>
					<CompShopCategory title="Lançamentos" data={this.state.json["releases"]} category="releases" filters={this.state.filters} />
				</div>
			</div>
		);
	}
}