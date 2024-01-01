import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Period from './components/Period/Period';
import Subject from './components/subject/subject';
import ShowSongs from './components/ShowSong/ShowSongs';
import Login from './components/Login/Login';
import SelectPartOfSong from './components/SelectPartOfSong/SelectPartOfSong';
import DesignBackground from './components/DesignBackground/DesignBackground';
import Product from './components/Product/Product';
import Logout from './components/Logout/Logout';

const App: React.FunctionComponent = () => {


  return (
    <div>    
      <BrowserRouter>
        <Routes>
          <Route path="/Period" element={<Period />} />
          <Route path="/Subject" element={<Subject />} />
          <Route path="/ShowSongs" element={<ShowSongs />} />
          <Route path="/SelectPartOfSong" element={<SelectPartOfSong />} />
          <Route path="/DesignBackground" element={<DesignBackground />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Logout" element={<Logout />} />

          <Route path="/" element={<Login />} />

        </ Routes>
      </BrowserRouter>
     </div>
  )
}

export default App;
