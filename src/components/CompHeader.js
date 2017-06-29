import React, { Component } from 'react';

export default class CompHeader extends Component {	
	render(){
		return (
			<nav className="nav">
			  <div className="nav-left">
			    <a className="nav-item">

			      <img src="images/logo_nike.png" alt="Nike" />
			    </a>

			    <a className="nav-item">
			      Home
			    </a>
			    <a className="nav-item">
			      Documentation
			    </a>
			    <a className="nav-item">
			      Blog
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
		);
	}
}