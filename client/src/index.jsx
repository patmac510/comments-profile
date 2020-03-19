import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
const sample = require('./sampleData.js')


ReactDOM.render(<App sampleData={sample.sampleData} />, document.getElementById('app'));
