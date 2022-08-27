import React, { useState, useEffect } from "react";
import {
  getPublishers,
  dateTruncateHandler,
  deletePublisher,
} from "../../fetches/publisherFetch";
import LoadingBar from "../../helpers/LoadingBar";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const ListPublishers = () => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    getPublishers((result) => setPublishers(result));
  }, []);

  const deletehandler = (id) => {
    deletePublisher(id);
  };

  return (
    <>
      <div className="flex text-center">
        <p>List of available publishers.</p>
      </div>
      <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className="w-100">
            <div className="float-end">
              <Link to="/publishers/add" className="btn btn-sm btn-primary">
                <span className="me-2">
                  <FiPlus></FiPlus>
                </span>
                Add Publisher
              </Link>
              <hr />
            </div>
            <div className="w-100">
              <table className="table table-bordered">
                <thead>
                  <tr className="table-primary">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Founded</th>
                    <th>Country Of Origin</th>
                    <th>Headquarter</th>
                    <th>Homepage</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {publishers.length > 0 ? (
                    publishers.map((publisher) => {
                      const {
                        id,
                        name,
                        founded,
                        countryOfOrigin,
                        headquarter,
                        homePage,
                      } = publisher;
                      return (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{dateTruncateHandler(founded)}</td>
                          <td>{countryOfOrigin}</td>
                          <td>{headquarter}</td>
                          <td>{homePage}</td>
                          <td>
                            <Link
                              to={`/publishers/edit/${id}`}
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

export default ListPublishers;
