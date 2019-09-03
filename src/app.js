import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import IndecisionApp from './components/IndecisionApp';


ReactDom.render(<IndecisionApp />, document.getElementById('app'));

