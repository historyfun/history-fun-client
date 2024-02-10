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
import Users from './components/Users/Users';


const App: React.FunctionComponent = () => {


  return (
    <div>    
      <BrowserRouter>
        <Routes>
          <Route path="/Period/:nameparam/:phonenumberparam" element={<Period />} />
          <Route path="/Subject/:nameparam/:phonenumberparam" element={<Subject />} />
          <Route path="/ShowSongs/:nameparam/:phonenumberparam" element={<ShowSongs />} />
          <Route path="/SelectPartOfSong/:nameparam/:phonenumberparam" element={<SelectPartOfSong />} />
          <Route path="/DesignBackground/:nameparam/:phonenumberparam" element={<DesignBackground />} />
          <Route path="/Product/:nameparam/:phonenumberparam/:design" element={<Product />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Users" element={<Users />} />


          <Route path="/" element={<Login />} />

        </ Routes>
      </BrowserRouter>
     </div>
  )
}

export default App;
