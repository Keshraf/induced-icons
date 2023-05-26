import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TwentyFourSupportIcon } from '../src/index';

const App = () => {
  return (
    <div>
      <TwentyFourSupportIcon />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
