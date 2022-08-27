import React, { useState } from "react";
import { add } from "../../fetches/authorFetch";
import { useNavigate } from "react-router-dom";

const AddAuthor = () => {
  const [form, setForm] = useState({
    name: "",
    dateOfBirth: "",
    city: "",
  });

  const navigation = useNavigate();

  const submitHandler = () => {
    add(form);
    navigation("/authors");
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <hr />
          <p>Add Author</p>
        </div>
        <div className="w-50 mx-auto">
          <div className="mb-3">
            <label>Name: </label>
            <input
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Date of birth: </label>
            <input
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
              onChange={(e) => setForm({ ...form, city: e.target.value })}
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

export default AddAuthor;
