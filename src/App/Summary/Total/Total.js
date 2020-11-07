import React from 'react';
import './Total.css';

const Total = function(props) {
  const total = Object.keys(props.selected).reduce(
      (acc, curr) => acc + props.selected[curr].cost,
      0
    );
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {props.USCurrencyFormat.format(total)}
      </div>
    </div>
    )
}

Total.defaultProps = {
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

export default Total;