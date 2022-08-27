import React, { useState, useEffect } from "react";
import { infoCategory, editCategory } from "../../fetches/categoryFetch";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  const navigation = useNavigate();
  const params = useParams();

  const getInfoCategory = () => {
    const { id } = params;
    infoCategory(+id, (result) => {
      setForm({
        name: result.name,
        image: result.image,
      });
    });
  };

  useEffect(() => {
    getInfoCategory();
  }, []);

  const submitHandler = () => {
    editCategory(+params.id, form);
    navigation("/categories");
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <hr />
          <p>Edit Category</p>
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

export default EditCategory;
