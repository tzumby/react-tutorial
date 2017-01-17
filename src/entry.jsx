import { render } from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import './styles/app.css';
import './index.html';

render(
  <App />,
  document.getElementById('app'),
);
