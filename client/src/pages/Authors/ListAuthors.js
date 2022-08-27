import React, { useState, useEffect } from "react";
import {
  getAuthors,
  dateTruncateHandler,
  deleteAuthor,
} from "../../fetches/authorFetch";
import LoadingBar from "../../helpers/LoadingBar";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const ListAuthors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors((result) => setAuthors(result));
  }, []);

  const deletehandler = (id) => {
    deleteAuthor(id);
  };

  return (
    <>
      <div className="flex text-center">
        <p>List of available authors.</p>
      </div>
      <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <div className="float-end">
              <Link to="/authors/add" className="btn btn-sm btn-primary">
                <span className="me-2">
                  <FiPlus></FiPlus>
                </span>
                Add Author
              </Link>
              <hr />
            </div>
            <div className="w-100">
              <table className="table table-bordered">
                <thead>
                  <tr className="table-primary">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date Of Birth</th>
                    <th>City</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {authors.length > 0 ? (
                    authors.map((author) => {
                      const { id, name, dateOfBirth, city } = author;
                      return (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{dateTruncateHandler(dateOfBirth)}</td>
                          <td>{city}</td>
                          <td>
                            <Link
                              to={`/authors/edit/${id}`}
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

export default ListAuthors;
