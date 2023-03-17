import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import List from './components/List/List'
import Home from './components/Home/Hero'
import Description from './components/Home/Description';
import Details from './components/Details/Details';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Description />} />
        <Route path="/list" element={<List />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  </Router>,
);

