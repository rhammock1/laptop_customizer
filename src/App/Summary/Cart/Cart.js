import React from 'react';
import './Cart.css';

const Cart = function(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {props.USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });
  return summary;

}

Cart.defaultProps = {
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

export default Cart;