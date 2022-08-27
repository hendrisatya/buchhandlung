import React, { useState, useEffect } from "react";
import { infoAuthor, editAuthor } from "../../fetches/authorFetch";
import { useNavigate, useParams } from "react-router-dom";

const EditAuthor = () => {
  const [form, setForm] = useState({
    name: "",
    dateOfBirth: "",
    city: "",
    image: "",
  });

  const navigation = useNavigate();
  const params = useParams();

  const getInfoAuthor = () => {
    const { id } = params;
    infoAuthor(+id, (result) => {
      setForm({
        name: result.name,
        dateOfBirth: result.dateOfBirth,
        city: result.city,
        image: result.image,
      });
    });
  };

  useEffect(() => {
    getInfoAuthor();
  }, []);

  const submitHandler = () => {
    editAuthor(+params.id, form);
    navigation("/authors");
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <hr />
          <p>Edit Author</p>
        </div>
        <div className="w-50 mx-auto">
          <div className="mb-3">
            <label>Name: </label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Date of birth: </label>
            <input
              value={form.dateOfBirth}
              onChange={(e) =>
                setForm({ ...form, dateOfBirth: e.target.value })
              }
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>City: </label>
            <input
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              type="text"
              className="form-control"
            ></input>
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

export default EditAuthor;
