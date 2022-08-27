import React, { useState } from "react";
import { add } from "../../fetches/bookFetch";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [form, setForm] = useState({
    title: "",
    synopsis: "",
    price: 0,
    publicationYear: "",
    categoryId: "",
    authorId: "",
    publisherId: "",
  });

  const navigation = useNavigate();

  const submitHandler = () => {
    add(form);
    navigation("/books");
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <hr />
          <p>Add Book</p>
        </div>
        <div className="w-50 mx-auto">
          <div className="mb-3">
            <label>Title: </label>
            <input
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Synopsis: </label>
            <input
              onChange={(e) => setForm({ ...form, synopsis: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Price: </label>
            <input
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Publication Year: </label>
            <input
              onChange={(e) =>
                setForm({ ...form, publicationYear: e.target.value })
              }
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Category: </label>
            <input
              onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Author: </label>
            <input
              onChange={(e) => setForm({ ...form, authorId: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Publisher: </label>
            <input
              onChange={(e) =>
                setForm({ ...form, publisherId: e.target.value })
              }
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

export default AddBook;
