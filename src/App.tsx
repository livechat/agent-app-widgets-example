import React, { useState } from 'react';
import { Link, Redirect, Route, Switch, useLocation } from 'wouter';
import CustomerDetailsWidget from './pages/customer-details-widget/CustomerDetailsWidget';

function App(): JSX.Element {
  return (
    <div className="App">
      <Route path="/pages/customer-details-widget" component={CustomerDetailsWidget} />
      <Route path="/pages/test1">test1</Route>
    </div>
  );
}

export default App;
