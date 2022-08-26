import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Author from "./components/Author";
import AuthorForm from "./components/AuthorForm";

function App() {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1>Book Shop</h1>
        <p>Lorem Ipsum is a dummy text</p>
        <hr />
      </div>
      <div className="container">
        <Author></Author>
        <AuthorForm></AuthorForm>
      </div>
    </div>
  );
}

export default App;
