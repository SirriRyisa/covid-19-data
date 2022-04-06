import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import Home from './components/Home';
import CovidDetails from './components/CovidDetails';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CovidDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
