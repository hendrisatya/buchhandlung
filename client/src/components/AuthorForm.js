import React, { useState } from "react";
import { add } from "../fetches/authorFetch";

const AuthorForm = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [city, setCity] = useState("");

  const submitHandler = () => {
    const tempObj = {
      name,
      dateOfBirth,
      city,
    };
    add(tempObj);
    // console.log(tempObj);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3>Add Form - Author</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto my-3">
          <form>
            <div className="mb-3">
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label>Date Of Birth</label>
              <input
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Date Of Birth"
              />
            </div>
            <div className="mb-3">
              <label>City</label>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="form-control"
                placeholder="City"
              />
            </div>
            <div className="mb-3">
              <button
                onClick={() => submitHandler()}
                type="button"
                className="btn btn-block btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthorForm;
