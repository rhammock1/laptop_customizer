import React from 'react';
import Cart from './Cart';
import Total from './Total';

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

export default Summary;

 

    