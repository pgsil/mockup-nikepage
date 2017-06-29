import React, { Component } from 'react';

import CompHeader from './components/CompHeader';
import CompBigBanner from './components/CompBigBanner';
import CompShopMain from './components/Shop/CompShopMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CompHeader />
        <CompBigBanner />
        <CompShopMain />
      </div>
    );
  }
}

export default App;
