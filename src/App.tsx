import React from 'react';
import { Route } from 'wouter';
import CustomerDetailsWidget from './pages/customer-details-widget/CustomerDetailsWidget';
import './App.css';
import MessageBoxWidget from './pages/messagebox-widget/MessageBoxWidget';

function App(): JSX.Element {
  return (
    <div className="App">
      <Route path="/pages/customer-details-widget" component={CustomerDetailsWidget} />
      <Route path="/pages/message-box-widget" component={MessageBoxWidget} />
      <Route path="/pages/test1">test1</Route>
    </div>
  );
}

export default App;
