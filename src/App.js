import React from 'react';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards"
import logo from './logo.svg';
import './App';



function App() {
  return (
    <div className="container">
      <Jumbotron />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;


