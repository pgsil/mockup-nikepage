import React, { Component } from 'react';

export default class CompHeader extends Component {	
	constructor(props){
		super();
		this.state = {menuvisible: false};

		this.handleMenuClick = this.handleMenuClick.bind(this);
	}
	returnMenuActive(){
		return this.state.menuvisible ? "is-active" : ""
	}

	handleMenuClick(){
		this.setState({menuvisible: !this.state.menuvisible});
	}

	render(){
		return (	
			<div>
				{/*Esse espaço tá no PSD, então por via das dúvidas botei aqui também*/}
				<div className="navspacetop">&nbsp;</div>	

				<nav className="nav container">
				<a className="nav-item" href="http://www.nike.com.br/todos-modelos/chuteira">
					<img src="images/logo_nike.png" alt="Nike" className="space-r40" />
				</a>
					<span className="nav-toggle" onClick={this.handleMenuClick}>
						<span></span>
						<span></span>
						<span></span>
					</span>
					
					<div className={"nav-right nav-menu " + this.returnMenuActive()} >
						<div className="nav-item"> 
								<a className="nav-item space-r20"  href="http://www.nike.com.br/produtos/masculinos?nid=101296">
									MASCULINO
								</a>
								<a className="nav-item space-r20"  href="http://www.nike.com.br/produtos/femininos?nid=105097">
									FEMININO
								</a>
								<a className="nav-item space-r20"  href="http://www.nike.com.br/produtos/meninos?nid=106559">
									MENINO
								</a>
								<a className="nav-item space-r20"  href="http://www.nike.com.br/produtos/meninas?nid=105979">
									MENINA
								</a>
						</div>	
						<div className="nav-item nav-item-cart"> 	
			      				<p className="control">
			      					<a className="button-cart">
			      						<img className="nav-icon-cart" src="http://www.raphaelfabeni.com.br/rv/images/cart.png" alt="Carrinho" />
			      					</a>
			      				</p>
						</div>
					</div>
				</nav>

				<div className="navspacebottom">&nbsp;</div>
			</div>
		);
	}
}