import React, { useEffect, useState } from "react";
import { infoPublisher, editPublisher } from "../../fetches/publisherFetch";
import { useNavigate, useParams } from "react-router-dom";

const EditPublisher = () => {
  const [form, setForm] = useState({
    name: "",
    founded: "",
    countryOfOrigin: "",
    headquarter: "",
    homePage: "",
  });

  const navigation = useNavigate();
  const params = useParams();

  const getInfoPublisher = () => {
    const { id } = params;
    infoPublisher(+id, (result) => {
      setForm({
        name: result.name,
        founded: result.founded,
        countryOfOrigin: result.countryOfOrigin,
        headquarter: result.headquarter,
        homePage: result.homePage,
      });
    });
  };

  useEffect(() => {
    getInfoPublisher();
  }, []);

  const submitHandler = () => {
    editPublisher(+params.id, form);
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
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Founded: </label>
            <input
              value={form.founded}
              onChange={(e) => setForm({ ...form, founded: e.target.value })}
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label>Country Of Origin: </label>
            <input
              value={form.countryOfOrigin}
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
              value={form.headquarter}
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
              value={form.homePage}
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

export default EditPublisher;
