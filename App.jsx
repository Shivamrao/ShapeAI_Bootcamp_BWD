import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import ReactDOM from "react-dom";
// import "./styles.css";


function App() {
  return (
    <div className="App">
       <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
