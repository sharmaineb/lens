import React from 'react';
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import List from './components/List/List'
import Details from './components/Details/Details';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<List />} />
        <Route path='/details/:id' element={<Details />} />
      </Route>
    </Routes>
  </Router>,
);

