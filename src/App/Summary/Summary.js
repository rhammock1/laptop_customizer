import React from 'react';
import Cart from './Cart/Cart';
import Total from './Total/Total';
import './Summary.css';

const Summary = function(props) {
  
    return (
      <section className="main__summary">
    <h2>Your cart</h2>
    <Cart 
      USCurrencyFormat={props.USCurrencyFormat}
      selected={props.selected}
    />
    <Total 
      USCurrencyFormat={props.USCurrencyFormat}
      selected={props.selected}
    />
  </section>
      )
  
}

Summary.defaultProps = {
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
  },
  USCurrencyFormat: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export default Summary;

 

    