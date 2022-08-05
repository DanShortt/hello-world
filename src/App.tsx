import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Searchbar from './components/Search/Search';
import Table from './components/Table/Table';

function App() {
  return (
    <div>
      <NavBar />
      <Searchbar />
      <Table />
    </div>
  );
}

export default App;
