import React, { useState, useEffect } from "react";
import { infoBook, editBook } from "../../fetches/bookFetch";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
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
            <input
              value={form.categoryId}
              onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Author: </label>
            <input
              value={form.authorId}
              onChange={(e) => setForm({ ...form, authorId: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Publisher: </label>
            <input
              value={form.publisherId}
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

export default EditBook;
