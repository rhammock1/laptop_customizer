import React from 'react';
import ReactDOM from 'react-dom';
import FeatureField from './FeatureField';

describe('FeatureField component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeatureField />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  it('renders without crashing without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeatureField />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  it('renders without crashing with props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeatureField featureHash feature option/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
})

