import React from 'react';
import ReactDOM from 'react-dom';
import Total from './Total';

describe('Total component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Total />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
})
