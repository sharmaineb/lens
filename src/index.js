import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import List from './components/List/List'
import Home from './components/Home/Hero'
import Details from './components/Details/Details';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import PlacesList from './components/PlacesList/PlacesList';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/places" element={<PlacesList />} />
      </Route>
    </Routes>
  </Router>,
);

