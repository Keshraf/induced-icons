import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AaveIcon } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AaveIcon />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
