import logo from './logo.svg';
import './App.css';
import Login from './Login';
import styled from 'styled-components';
import Home from './components/Home.js';
import React from 'react';
import Header from './Header';
import Detail from './components/Detail.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from './components/SearchPage.js';
import WatchList from './components/WatchList';
function App() {
  return (
    <div>
    <Router>
    <Header/>
    <Routes>
    <Route path = "/" element = {<Login />}/>
    <Route path = "/home" element = {<Home />} />
    <Route path = "/details/:id" element = {<Detail />} />
    <Route path = "/search" element = {<SearchPage />} />
    <Route path = "/watchlist" element = {<WatchList />} />
    </Routes>
    </Router>
    </div>
  );
}
export default App;
