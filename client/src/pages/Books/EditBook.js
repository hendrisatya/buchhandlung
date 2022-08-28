import React, { useState, useEffect } from "react";
import { infoBook, editBook } from "../../fetches/bookFetch";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../../fetches/categoryFetch";
import { getAuthors } from "../../fetches/authorFetch";
import { getPublishers } from "../../fetches/publisherFetch";

const EditBook = () => {
  const [form, setForm] = useState({
    title: "",
    synopsis: "",
    price: 0,
    publicationYear: "",
    categoryId: "",
    authorId: "",
    publisherId: "",
    image: "",
  });

  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    getCategories((result) => setCategories(result));
  }, []);

  useEffect(() => {
    getAuthors((result) => setAuthors(result));
  }, []);

  useEffect(() => {
    getPublishers((result) => setPublishers(result));
  }, []);

  const navigation = useNavigate();
  const params = useParams();

  const getInfoBook = () => {
    const { id } = params;
    infoBook(+id, (result) => {
      setForm({
        title: result.title,
        synopsis: result.synopsis,
        price: result.price,
        publicationYear: result.publicationYear,
        categoryId: result.categoryId,
        authorId: result.authorId,
        publisherId: result.publisherId,
        image: result.image,
      });
    });
  };

  useEffect(() => {
    getInfoBook();
  }, []);

  const submitHandler = () => {
    editBook(+params.id, form);
    navigation("/books");
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <hr />
          <p>Edit Book</p>
        </div>
        <div className="w-50 mx-auto">
          <div className="mb-3">
            <label>Title: </label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Synopsis: </label>
            <input
              value={form.synopsis}
              onChange={(e) => setForm({ ...form, synopsis: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Price: </label>
            <input
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Publication Year: </label>
            <input
              value={form.publicationYear}
              onChange={(e) =>
                setForm({ ...form, publicationYear: e.target.value })
              }
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Category: </label>
            <select
              onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
              className="form-select"
              value={form.categoryId}
            >
              <option value="">-Choose Category-</option>
              {categories.map((category, i) => {
                const { id, name } = category;
                return (
                  <option value={id} key={id}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label>Author: </label>
            <select
              onChange={(e) => setForm({ ...form, authorId: e.target.value })}
              className="form-select"
              value={form.authorId}
            >
              <option value="">-Choose Author-</option>
              {authors.map((author, i) => {
                const { id, name } = author;
                return (
                  <option value={id} key={id}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label>Publisher: </label>
            <select
              onChange={(e) =>
                setForm({ ...form, publisherId: e.target.value })
              }
              className="form-select"
              value={form.publisherId}
            >
              <option value="">-Choose Publisher-</option>
              {publishers.map((publisher, i) => {
                const { id, name } = publisher;
                return (
                  <option value={id} key={id}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label>Image: </label>
            <input
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <button
              onClick={() => submitHandler()}
              className="btn btn-block btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBook;
