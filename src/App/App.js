import React, { Component } from 'react';
import FEATURES from './FEATURES';

import './App.css';
import FeaturesList from './FeatureList/FeaturesList';
import Summary from './Summary/Summary';
import Header from './Header/Header';

// This object will allow us to
// easily convert numbers into US dollar values


class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <Header />
        <main>
          <FeaturesList 
            USCurrencyFormat={this.USCurrencyFormat} 
            updateFeature={this.updateFeature} selected={this.state.selected}
            features={FEATURES} 
          />
          <Summary 
            USCurrencyFormat={this.USCurrencyFormat}
            selected={this.state.selected}
          />
          
        </main>
      </div>
    );
  }
}

export default App;
