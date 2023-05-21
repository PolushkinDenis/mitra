import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Posts from './pages/posts/Posts';
import AboutMe from './pages/aboutMe/AboutMe';
import User from './pages/user/User';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />}/>
        <Route path="/me" element={<AboutMe />}/>
        <Route path="/user/:id" element={<User />}/>
      </Routes>
    </>

  );
}

export default App;
