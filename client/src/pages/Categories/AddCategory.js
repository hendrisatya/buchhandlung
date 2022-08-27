import React, { useState } from "react";
import { add } from "../../fetches/categoryFetch";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [form, setForm] = useState({
    name: "",
  });

  const navigation = useNavigate();

  const submitHandler = () => {
    add(form);
    navigation("/categories");
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <hr />
          <p>Add Category</p>
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

export default AddCategory;
