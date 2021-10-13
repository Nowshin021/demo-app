
import React from 'react';
import Home from './Components/Home/Home.js'
//use this notation if Header.js file has export const
import { Header } from './Components/Header/Header.js'

import Popup from './Components/Popup/Popup.js'
import Footer from './Components/Footer/Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {
  

  return (
    <div className="App">
    <Header></Header>
  
    <Home></Home>
    <Popup></Popup>
    <Footer></Footer>
    
    </div>
    
  );
}

export default App;