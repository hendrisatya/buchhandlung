import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  Author,
  ListAuthors,
  AddAuthor,
  EditAuthor,
  Publisher,
  Category,
  Book,
} from "../pages";

const MainContent = () => {
  return (
    <div className="container p-3">
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="authors" element={<Author></Author>}>
          <Route path="" element={<ListAuthors></ListAuthors>}></Route>
          <Route path="add" element={<AddAuthor></AddAuthor>}></Route>
          <Route path="edit">
            <Route path=":id" element={<EditAuthor></EditAuthor>}></Route>
          </Route>
        </Route>
        <Route path="publishers" element={<Publisher></Publisher>}></Route>
        <Route path="categories" element={<Category></Category>}></Route>
        <Route path="books" element={<Book></Book>}></Route>
      </Routes>
    </div>
  );
};

export default MainContent;
