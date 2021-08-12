import React from 'react';
import { Route } from 'wouter';
import CustomerDetailsWidget from './pages/customer-details-widget/CustomerDetailsWidget';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Route path="/pages/customer-details-widget" component={CustomerDetailsWidget} />
      <Route path="/pages/test1">test1</Route>
    </div>
  );
}

export default App;
