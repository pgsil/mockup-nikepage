import React, { Component } from 'react';

export default class CompShopMain extends Component {	
	render(){
		return (
			<div className="container">
				<br/><br/>
				<div className="level">
					<div className="level-left">
						<b>Chuteiras HyperVenom:</b>

						<span>&nbsp;</span>

						<label className="filter-item">
							<input type="checkbox" className="checkbox" label="Cano alto" />
							Cano alto
						</label>

						<label className="filter-item">
							<input type="checkbox" className="checkbox" />
							Cano baixo
						</label>

						<label className="filter-item">
							<input type="checkbox" className="checkbox" />
							Futebol Campo
						</label>
					</div>

					<div className="level-right">
						<button className="button is-dark">TODOS OS PRODUTOS</button>
					</div>

				</div>
			</div>
		);
	}
}