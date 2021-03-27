import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
//import { HookApp } from './HookApp';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);

