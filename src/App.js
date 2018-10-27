import React, { Component } from 'react';
import HomePage from './containers/HomePage';
import './App.css';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

// Change the css injection order for override MaterialUI styles 
//For more information please check 
const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: 'jss-insertion-point',
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <HomePage></HomePage>
        </JssProvider>
      </div>
    );
  }
}

export default App;
