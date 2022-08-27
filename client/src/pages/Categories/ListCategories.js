import React, { useState, useEffect } from "react";
import { getCategories, deleteCategory } from "../../fetches/categoryFetch";
import LoadingBar from "../../helpers/LoadingBar";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const ListCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories((result) => setCategories(result));
  }, []);

  const deletehandler = (id) => {
    deleteCategory(id);
  };

  return (
    <>
      <div className="flex text-center">
        <p>List of available categories.</p>
      </div>
      <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <div className="float-end">
              <Link to="/categories/add" className="btn btn-sm btn-primary">
                <span className="me-2">
                  <FiPlus></FiPlus>
                </span>
                Add Category
              </Link>
              <hr />
            </div>
            <div className="w-100">
              <table className="table table-bordered">
                <thead>
                  <tr className="table-primary">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.length > 0 ? (
                    categories.map((category) => {
                      const { id, name } = category;
                      return (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>
                            <Link
                              to={`/categories/edit/${id}`}
                              className="btn btn-sm btn-info"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => deletehandler(+id)}
                              className="btn btn-sm btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <LoadingBar></LoadingBar>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCategories;
