import React from 'react';
import './FeatureList.css'
import FeatureField from './FeatureField/FeatureField';




const FeaturesList = function(props) {
 
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {Object.keys(props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      
      return (
        <FeatureField 
          key={featureHash} 
          feature={feature}
          selected={props.selected}
          features={props.features}
          USCurrencyFormat={props.USCurrencyFormat}
          updateFeature={props.updateFeature} 
          
        />
      )
    })}
      </form>
    )
}

FeaturesList.defaultProps = {
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
  features:{}
}
export default FeaturesList;
