import React from 'react';
import slugify from 'slugify';



const FeatureOption = function(props) {
 
  return (
    <div data-id={props.key} className="feature__item">
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={slugify(props.feature)}
        checked={props.item.name === props.selected[props.feature].name}
        onChange={e => props.updateFeature(props.feature, props.item)}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.item.name} ({props.USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
    )
}

FeatureOption.defaultProps = {
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
  feature: 'Processor',
  key: '',
  USCurrencyFormat: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }),
  item: [
    {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    {
      name: 'Professor X AMD Fire Breather with sidewinder technology',
      cost: 1200
    }
  ],
}

export default FeatureOption;