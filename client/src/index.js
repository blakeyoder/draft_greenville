import React from 'react';
import ReactDOM from 'react-dom';
import Beer from './Beer';
import './index.css';
import './semantic-ui/semantic.min.css';
import data from './data';

ReactDOM.render(
  <Beer data={data} />,
  document.getElementById('root')
);
