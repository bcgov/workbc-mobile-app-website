import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.scss';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'


function App() {
  const [language,setLanguage] = useState("en")
  return (
    <Router>
        <Header 
          language = {language}
          setLanguage = {setLanguage} />
        <Main 
          language = {language}
          setLanguage = {setLanguage} />
        <Footer />
    </Router>
  );
}

export default App;
