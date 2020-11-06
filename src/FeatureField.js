import React from 'react';
import slugify from 'slugify';
import FeatureOption from './FeatureOption';
import FEATURES from './FEATURES';

const FeatureField = function(props) {
  
  return (
    <fieldset className="feature" data-id={props.key}>
    <legend className="feature__name">
      <h3>{props.feature}</h3>
    </legend>
    {props.features[props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FeatureOption 
            key={itemHash}
            itemHash={itemHash}
            feature={props.feature}
            selected={props.selected}
            updateFeature={props.updateFeature}
            USCurrencyFormat={props.USCurrencyFormat}
            item={item}
          />
        );
      })}
  </fieldset>
    )
  
}

FeatureField.defaultProps = {
  key:{}, 
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
  }),
  updateFeature:{},
  feature:'Processor',
  features: FEATURES
}

export default FeatureField;