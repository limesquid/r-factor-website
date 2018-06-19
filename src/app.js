import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/home';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomePage} />
  </BrowserRouter>
);

export default App;
