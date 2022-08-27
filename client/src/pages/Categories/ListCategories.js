import React, { useState, useEffect } from "react";
import { getCategories, deleteCategory } from "../../fetches/categoryFetch";
import LoadingBar from "../../helpers/LoadingBar";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdEditNote, MdDeleteForever } from "react-icons/md";

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
            <div className="float">
              <Link to="/categories/add" className="btn btn-sm btn-primary">
                <span className="me-2">
                  <FiPlus></FiPlus>
                </span>
                Add Category
              </Link>
              <hr />
            </div>
            <div className="w-100">
              <div>
                <div className="row">
                  {categories.length > 0 ? (
                    categories.map((category) => {
                      const { id, name, image } = category;
                      return (
                        <div
                          className="card mx-auto mb-3"
                          style={{ width: "400px" }}
                        >
                          <div className="card-horizontal">
                            <div className="img-square-wrapper">
                              <img
                                className="kartu-img rounded-circle"
                                src={image}
                                alt="gambar"
                              />
                            </div>
                            <div className="card-body">
                              <h4 className="card-title">{name}</h4>
                              <p class="card-text">Deskripsi</p>
                            </div>
                          </div>
                          <div className="card-footer">
                            <small className="text-muted float-end">
                              <Link
                                to={`/categories/edit/${id}`}
                                className="btn btn-sm btn-link"
                              >
                                <MdEditNote></MdEditNote>
                              </Link>
                              <button
                                onClick={() => deletehandler(+id)}
                                className="btn btn-sm btn-link"
                              >
                                <MdDeleteForever></MdDeleteForever>
                              </button>
                            </small>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <LoadingBar></LoadingBar>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCategories;
