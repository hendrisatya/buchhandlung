import React, { useState } from "react";
import { add } from "../../fetches/publisherFetch";
import { useNavigate } from "react-router-dom";

const AddPublisher = () => {
  const [form, setForm] = useState({
    name: "",
    founded: "",
    countryOfOrigin: "",
    headquarter: "",
    homePage: "",
  });

  const navigation = useNavigate();

  const submitHandler = () => {
    add(form);
    navigation("/publishers");
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <hr />
          <p>Add Publisher</p>
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
            <label>Founded: </label>
            <input
              onChange={(e) => setForm({ ...form, founded: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Country Of Origin: </label>
            <input
              onChange={(e) =>
                setForm({ ...form, countryOfOrigin: e.target.value })
              }
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>headquarter: </label>
            <input
              onChange={(e) =>
                setForm({ ...form, headquarter: e.target.value })
              }
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Homepage: </label>
            <input
              onChange={(e) => setForm({ ...form, homePage: e.target.value })}
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

export default AddPublisher;
