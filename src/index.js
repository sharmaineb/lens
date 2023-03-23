import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import List from './components/List/List'
import Home from './components/Home/Hero'
import Details from './components/Details/Details';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  </Router>,
);

