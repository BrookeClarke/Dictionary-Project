import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer><small>Coded by Brooke Clarke</small></footer>
      </div>
    </div>
  );
}