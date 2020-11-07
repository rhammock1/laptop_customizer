import React from 'react';
import ReactDOM from 'react-dom';
import FeatureField from './FeatureField';

describe('FeatureField component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeatureField />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
})

