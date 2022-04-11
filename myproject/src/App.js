import logo from './logo.svg';
import './App.css';
import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {
  return (
    <div className="container">
    <Navbar />
    <Main />
</div>
  );
}

export default App;
