import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
// import Author from "./components/Author";
// import AuthorForm from "./components/AuthorForm";
import { NavbarMenu, MainContent, Banner } from "./components";

function App() {
  // return (
  //   <div className="main-page container-fluid">
  //     <div className="container text-center">
  //       <h1>Book Shop</h1>
  //       <p>Lorem Ipsum is a dummy text</p>
  //       <hr />
  //     </div>
  //     <div className="container">
  //       <Author></Author>
  //       <AuthorForm></AuthorForm>
  //     </div>
  //   </div>
  // );

  return (
    <div className="w-auto">
      {/* <Banner></Banner> */}
      <NavbarMenu></NavbarMenu>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
