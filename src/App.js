import React, { Component } from 'react';

import CompHeader from './components/CompHeader';
import CompBigBanner from './components/CompBigBanner';
import CompShopMain from './components/Shop/CompShopMain';
import Footer from './components/Footer';

class App extends Component {
	bannerContents(){
		return (<div className="has-text-centered level-item banner-content">
					<div><p className="banner-text-justdoit">JUST DO IT.</p>
					
					<button	className="button is-dark button-showall">
						TODOS OS PRODUTOS
					</button>
					</div></div>)
	}

	render() {
		return (
			<div className="App">
				<CompHeader />
				<CompBigBanner imgUrl="./images/banner_finishit.jpg" 
								bgColor="#ff5d29" 
								bgPos="center top" 
								height="550px" />
				<CompShopMain />
				<br/><br/><br/>
				<CompBigBanner imgUrl="./images/banner_just.jpg" 
								bgPos="center top" 
								bgSizeOverride="cover" 
								widthOverride="100vw" 
								height="568px" 
								darken={true} 
								contents={this.bannerContents()}/>
				<Footer />
			</div>
		);
	}
}

export default App;
