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

export default Total;