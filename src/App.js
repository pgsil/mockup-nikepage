import React, { Component } from 'react';

import CompHeader from './components/CompHeader';
import CompBigBanner from './components/CompBigBanner';
import CompShopMain from './components/Shop/CompShopMain';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CompHeader />
        <CompBigBanner imgUrl="/images/banner_finishit.jpg" bgColor="#ff5d29" bgPos="center top" height="550px" />
        <CompShopMain />
        <CompBigBanner imgUrl="/images/banner_just.jpg" bgPos="center top" bgSizeOverride="cover" widthOverride="100vw" height="568px" />
        <Footer />
      </div>
    );
  }
}

export default App;
