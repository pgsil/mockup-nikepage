import React, { Component } from 'react';

export default class CompHeader extends Component {	
	render(){
		return (	
			<div>
				{/*Esse espaço tá no PSD, então por via das dúvidas botei aqui também*/}
				<div className="navspacetop">&nbsp;</div>	

				<nav className="nav container">
					<div className="nav-left">
					
						<a className="nav-item" href="http://www.nike.com.br/todos-modelos/chuteira">
							<img src="/images/logo_nike.png" alt="Nike" className="space-r40" />
						</a>

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

					<span className="nav-toggle">
						<span></span>
						<span></span>
						<span></span>
					</span>
					
					<div className="nav-right nav-menu">
						
						<div className="nav-item">      
								<p className="control">
									<a className="button is-dark">
										<span className="icon">
											<i className="fa fa-shopping-cart"></i>
										</span>
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